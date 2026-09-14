import { animate } from "motion-v";
import { isRef, watch, type Ref } from "vue";

type MotionElement = Element | SVGElement;
type MotionTarget =
  | MotionElement
  | Ref<MotionElement | null | undefined>
  | null
  | undefined;

type MotionTransition = Record<string, unknown>;
type MotionValues = Record<string, unknown>;

export interface MotionVariant extends MotionValues {
  transition?: MotionTransition;
}

export interface UseMotionOptions {
  initial?: MotionVariant;
  enter?: MotionVariant;
}

interface MotionControls {
  stop?: () => void;
}

export interface MotionInstance {
  apply: (variant: MotionVariant) => void;
  stop: () => void;
}

const isDomElement = (value: unknown): value is MotionElement => {
  if (typeof window === "undefined") {
    return false;
  }
  return value instanceof Element;
};

const resolveElement = (target: MotionTarget): MotionElement | null => {
  const element = isRef(target) ? target.value : target;
  if (!element) {
    return null;
  }
  return isDomElement(element) ? element : null;
};

const takeTransformOrigin = (value: unknown): string | null => {
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value) && value.length > 0) {
    // biome-ignore lint/style/useAtIndex: ES2020 lib target for package type-check does not include Array.prototype.at.
    const lastValue = value[value.length - 1];
    if (typeof lastValue === "string") {
      return lastValue;
    }
  }
  return null;
};

const extractAnimatableValues = (
  element: MotionElement,
  values: MotionValues
): MotionValues => {
  const animatableValues: MotionValues = { ...values };
  const transformOrigin = takeTransformOrigin(values.transformOrigin);

  if (transformOrigin && "style" in element) {
    element.style.transformOrigin = transformOrigin;
    animatableValues.transformOrigin = undefined;
  }

  return animatableValues;
};

const runAnimation = (
  element: MotionElement,
  controlsRef: { current: MotionControls | null },
  variant: MotionVariant,
  instant = false
): void => {
  if (typeof window === "undefined") {
    return;
  }

  const { transition, ...values } = variant;
  const animatableValues = extractAnimatableValues(element, values);

  if (Object.keys(animatableValues).length === 0) {
    return;
  }

  controlsRef.current?.stop?.();

  const animationOptions = instant
    ? ({ duration: 0 } as MotionTransition)
    : (transition ?? {});

  controlsRef.current = animate(
    element,
    animatableValues as Record<string, unknown>,
    animationOptions
  ) as MotionControls;
};

export const useMotion = (
  target: MotionTarget,
  options: UseMotionOptions = {}
): MotionInstance => {
  const controlsRef: { current: MotionControls | null } = { current: null };

  const initialize = (element: MotionElement): void => {
    if (options.initial) {
      runAnimation(element, controlsRef, options.initial, true);
      return;
    }
    if (options.enter) {
      runAnimation(element, controlsRef, options.enter, true);
    }
  };

  const resolvedAtSetup = resolveElement(target);
  if (resolvedAtSetup) {
    initialize(resolvedAtSetup);
  }

  if (isRef(target)) {
    watch(
      () => target.value,
      (element) => {
        if (isDomElement(element)) {
          initialize(element);
        }
      },
      { immediate: true }
    );
  }

  const apply = (variant: MotionVariant): void => {
    if (typeof window === "undefined") {
      return;
    }
    const element = resolveElement(target);
    if (!element) {
      return;
    }
    runAnimation(element, controlsRef, variant);
  };

  return {
    apply,
    stop: () => {
      controlsRef.current?.stop?.();
    },
  };
};
