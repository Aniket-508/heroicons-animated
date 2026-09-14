import 'package:flutter/animation.dart';

/// Base class for all element animations.
sealed class ElementAnimation {
  const ElementAnimation({
    required this.duration,
    this.delay = Duration.zero,
    this.curve = Curves.easeOut,
  });

  final Duration duration;
  final Duration delay;
  final Curve curve;
}

/// Animates the stroke drawing from [from] to [to] (0.0 to 1.0).
///
/// Uses `Path.computeMetrics()` and `extractPath()` under the hood.
class PathLengthAnimation extends ElementAnimation {
  const PathLengthAnimation({
    required this.from,
    required this.to,
    required super.duration,
    super.delay,
    super.curve,
    this.fromOffset = 0,
    this.toOffset = 0,
  });

  final double from;
  final double to;

  /// Path offset start value (0.0 to 1.0). Maps to framer-motion's
  /// `pathOffset`.
  final double fromOffset;

  /// Path offset end value (0.0 to 1.0).
  final double toOffset;
}

/// Keyframe-based stroke drawing animation.
///
/// This supports Framer Motion style `pathLength` and optional `pathOffset`
/// keyframes.
class PathLengthKeyframeAnimation extends ElementAnimation {
  const PathLengthKeyframeAnimation({
    required this.keyframes,
    required super.duration,
    this.offsetKeyframes = const [],
    super.delay,
    super.curve,
  });

  /// Path length keyframes (0.0 to 1.0).
  final List<double> keyframes;

  /// Optional path offset keyframes (0.0 to 1.0). Empty means always 0.
  final List<double> offsetKeyframes;
}

/// Animates opacity from [from] to [to].
class OpacityAnimation extends ElementAnimation {
  const OpacityAnimation({
    required this.from,
    required this.to,
    required super.duration,
    super.delay,
    super.curve,
  });

  final double from;
  final double to;
}

/// Keyframe-based opacity animation.
class OpacityKeyframeAnimation extends ElementAnimation {
  const OpacityKeyframeAnimation({
    required this.keyframes,
    required super.duration,
    super.delay,
    super.curve,
  });

  final List<double> keyframes;
}

/// Animates stroke width from [from] to [to].
class StrokeWidthAnimation extends ElementAnimation {
  const StrokeWidthAnimation({
    required this.from,
    required this.to,
    required super.duration,
    super.delay,
    super.curve,
  });

  final double from;
  final double to;
}

/// Keyframe-based stroke width animation.
class StrokeWidthKeyframeAnimation extends ElementAnimation {
  const StrokeWidthKeyframeAnimation({
    required this.keyframes,
    required super.duration,
    super.delay,
    super.curve,
  });

  final List<double> keyframes;
}

/// Simple rotation animation from [fromDegrees] to [toDegrees].
class RotateAnimation extends ElementAnimation {
  const RotateAnimation({
    required this.fromDegrees,
    required this.toDegrees,
    required super.duration,
    super.delay,
    super.curve,
    this.originX = 0.5,
    this.originY = 0.5,
  });

  final double fromDegrees;
  final double toDegrees;

  /// Rotation origin X as fraction (0.0 = left, 0.5 = center, 1.0 = right).
  final double originX;

  /// Rotation origin Y as fraction (0.0 = top, 0.5 = center, 1.0 = bottom).
  final double originY;
}

/// Keyframe-based rotation animation for shake effects.
///
/// Example: `keyframes: [0, -10, 10, -10, 0]` creates a shake.
class RotateKeyframeAnimation extends ElementAnimation {
  const RotateKeyframeAnimation({
    required this.keyframes,
    required super.duration,
    super.delay,
    super.curve,
    this.originX = 0.5,
    this.originY = 0.5,
  });

  /// List of rotation values in degrees at evenly spaced intervals.
  final List<double> keyframes;

  final double originX;
  final double originY;
}

/// Rotation animation around the X axis (3D perspective).
class RotateXAnimation extends ElementAnimation {
  const RotateXAnimation({
    required this.fromDegrees,
    required this.toDegrees,
    required super.duration,
    super.delay,
    super.curve,
    this.originX = 0.5,
    this.originY = 0.5,
  });

  final double fromDegrees;
  final double toDegrees;
  final double originX;
  final double originY;
}

/// Keyframe-based rotation animation around the X axis.
class RotateXKeyframeAnimation extends ElementAnimation {
  const RotateXKeyframeAnimation({
    required this.keyframes,
    required super.duration,
    super.delay,
    super.curve,
    this.originX = 0.5,
    this.originY = 0.5,
  });

  final List<double> keyframes;
  final double originX;
  final double originY;
}

/// Rotation animation around the Y axis (3D perspective).
class RotateYAnimation extends ElementAnimation {
  const RotateYAnimation({
    required this.fromDegrees,
    required this.toDegrees,
    required super.duration,
    super.delay,
    super.curve,
    this.originX = 0.5,
    this.originY = 0.5,
  });

  final double fromDegrees;
  final double toDegrees;
  final double originX;
  final double originY;
}

/// Keyframe-based rotation animation around the Y axis.
class RotateYKeyframeAnimation extends ElementAnimation {
  const RotateYKeyframeAnimation({
    required this.keyframes,
    required super.duration,
    super.delay,
    super.curve,
    this.originX = 0.5,
    this.originY = 0.5,
  });

  final List<double> keyframes;
  final double originX;
  final double originY;
}

/// Simple scale animation from [from] to [to].
class ScaleAnimation extends ElementAnimation {
  const ScaleAnimation({
    required this.from,
    required this.to,
    required super.duration,
    super.delay,
    super.curve,
    this.originX = 0.5,
    this.originY = 0.5,
  });

  final double from;
  final double to;
  final double originX;
  final double originY;
}

/// Keyframe-based scale animation for pulse effects.
///
/// Example: `keyframes: [1, 1.08, 1]` creates a pulse.
class ScaleKeyframeAnimation extends ElementAnimation {
  const ScaleKeyframeAnimation({
    required this.keyframes,
    required super.duration,
    super.delay,
    super.curve,
    this.originX = 0.5,
    this.originY = 0.5,
  });

  /// List of scale values at evenly spaced intervals.
  final List<double> keyframes;
  final double originX;
  final double originY;
}

/// Non-uniform scale animation on X and Y axes.
class ScaleXYAnimation extends ElementAnimation {
  const ScaleXYAnimation({
    required this.fromX,
    required this.toX,
    required this.fromY,
    required this.toY,
    required super.duration,
    super.delay,
    super.curve,
    this.originX = 0.5,
    this.originY = 0.5,
  });

  final double fromX;
  final double toX;
  final double fromY;
  final double toY;
  final double originX;
  final double originY;
}

/// Keyframe-based non-uniform scale animation.
class ScaleXYKeyframeAnimation extends ElementAnimation {
  const ScaleXYKeyframeAnimation({
    required this.keyframesX,
    required this.keyframesY,
    required super.duration,
    super.delay,
    super.curve,
    this.originX = 0.5,
    this.originY = 0.5,
  });

  final List<double> keyframesX;
  final List<double> keyframesY;
  final double originX;
  final double originY;
}

/// Simple translate animation.
class TranslateAnimation extends ElementAnimation {
  const TranslateAnimation({
    required super.duration,
    super.delay,
    super.curve,
    this.fromX = 0,
    this.fromY = 0,
    this.toX = 0,
    this.toY = 0,
  });

  final double fromX;
  final double fromY;
  final double toX;
  final double toY;
}

/// Keyframe-based translate animation.
class TranslateKeyframeAnimation extends ElementAnimation {
  const TranslateKeyframeAnimation({
    required this.keyframesX,
    required this.keyframesY,
    required super.duration,
    super.delay,
    super.curve,
  });

  /// X translation keyframes. Empty list means no X translation.
  final List<double> keyframesX;

  /// Y translation keyframes. Empty list means no Y translation.
  final List<double> keyframesY;
}

/// Simple skew animation on the X axis.
class SkewXAnimation extends ElementAnimation {
  const SkewXAnimation({
    required this.fromDegrees,
    required this.toDegrees,
    required super.duration,
    super.delay,
    super.curve,
    this.originX = 0.5,
    this.originY = 0.5,
  });

  final double fromDegrees;
  final double toDegrees;
  final double originX;
  final double originY;
}

/// Keyframe-based skew animation on the X axis.
class SkewXKeyframeAnimation extends ElementAnimation {
  const SkewXKeyframeAnimation({
    required this.keyframes,
    required super.duration,
    super.delay,
    super.curve,
    this.originX = 0.5,
    this.originY = 0.5,
  });

  final List<double> keyframes;
  final double originX;
  final double originY;
}

/// Combines multiple animation types on a single element.
class CombinedAnimation extends ElementAnimation {
  const CombinedAnimation({
    required super.duration,
    super.delay,
    super.curve,
    this.pathLength,
    this.pathLengthKeyframe,
    this.opacity,
    this.opacityKeyframe,
    this.strokeWidth,
    this.strokeWidthKeyframe,
    this.rotate,
    this.rotateKeyframe,
    this.rotateX,
    this.rotateXKeyframe,
    this.rotateY,
    this.rotateYKeyframe,
    this.scale,
    this.scaleKeyframe,
    this.scaleXY,
    this.scaleXYKeyframe,
    this.translate,
    this.translateKeyframe,
    this.skewX,
    this.skewXKeyframe,
  });

  final PathLengthAnimation? pathLength;
  final PathLengthKeyframeAnimation? pathLengthKeyframe;
  final OpacityAnimation? opacity;
  final OpacityKeyframeAnimation? opacityKeyframe;
  final StrokeWidthAnimation? strokeWidth;
  final StrokeWidthKeyframeAnimation? strokeWidthKeyframe;
  final RotateAnimation? rotate;
  final RotateKeyframeAnimation? rotateKeyframe;
  final RotateXAnimation? rotateX;
  final RotateXKeyframeAnimation? rotateXKeyframe;
  final RotateYAnimation? rotateY;
  final RotateYKeyframeAnimation? rotateYKeyframe;
  final ScaleAnimation? scale;
  final ScaleKeyframeAnimation? scaleKeyframe;
  final ScaleXYAnimation? scaleXY;
  final ScaleXYKeyframeAnimation? scaleXYKeyframe;
  final TranslateAnimation? translate;
  final TranslateKeyframeAnimation? translateKeyframe;
  final SkewXAnimation? skewX;
  final SkewXKeyframeAnimation? skewXKeyframe;
}
