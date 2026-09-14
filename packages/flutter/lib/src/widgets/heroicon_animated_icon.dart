import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:heroicons_animated/src/models/animation.dart';
import 'package:heroicons_animated/src/models/element.dart';
import 'package:heroicons_animated/src/models/icon_data.dart';
import 'package:heroicons_animated/src/painters/animated_path_painter.dart';
import 'package:heroicons_animated/src/widgets/controller.dart';

/// Renders an animated Heroicon.
///
/// The icon animates based on the [trigger] parameter:
/// - [AnimationTrigger.onTap]: animate on tap (default)
/// - [AnimationTrigger.onHover]: animate on mouse enter
/// - [AnimationTrigger.loop]: continuously loop
/// - [AnimationTrigger.manual]: controlled via [controller]
///
/// ```dart
/// HeroiconAnimatedIcon(
///   icon: heart,
///   size: 32,
///   color: Colors.red,
///   trigger: AnimationTrigger.onTap,
/// )
/// ```
class HeroiconAnimatedIcon extends StatefulWidget {
  const HeroiconAnimatedIcon({
    required this.icon,
    super.key,
    this.size = 24,
    this.color = Colors.white,
    this.trigger = AnimationTrigger.onTap,
    this.controller,
    this.onTap,
    this.duration,
    this.curve,
    this.strokeWidth,
  });

  /// The icon data containing paths and animation definitions.
  final HeroiconAnimatedIconData icon;

  /// The size of the icon in logical pixels.
  final double size;

  /// The stroke color of the icon.
  final Color color;

  /// How the animation is triggered.
  final AnimationTrigger trigger;

  /// Optional controller for manual animation control.
  final HeroiconAnimatedIconController? controller;

  /// Optional tap callback (fires in addition to animation on tap trigger).
  final VoidCallback? onTap;

  /// Override the default animation duration.
  final Duration? duration;

  /// Override the default animation curve.
  final Curve? curve;

  /// Override the icon's default stroke width.
  final double? strokeWidth;

  @override
  State<HeroiconAnimatedIcon> createState() => _HeroiconAnimatedIconState();
}

class _HeroiconAnimatedIconState extends State<HeroiconAnimatedIcon>
    with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  bool _isForward = true;

  Duration get _effectiveDuration {
    if (widget.duration != null) return widget.duration!;
    final iconAnim = widget.icon.animation;
    if (iconAnim != null) return iconAnim.duration;
    // Find the longest element animation duration + delay.
    var maxDuration = Duration.zero;
    for (final element in widget.icon.elements) {
      final anim = element.animation;
      if (anim != null) {
        final total = anim.duration + anim.delay;
        if (total > maxDuration) maxDuration = total;
      }
    }
    return maxDuration == Duration.zero
        ? const Duration(milliseconds: 500)
        : maxDuration;
  }

  double get _scaleFactor => widget.size / widget.icon.viewBoxWidth;

  double get _effectiveStrokeWidth =>
      widget.strokeWidth ?? widget.icon.strokeWidth;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      vsync: this,
      duration: _effectiveDuration,
    );

    _animationController.addStatusListener(_onAnimationStatus);

    widget.controller?.addListener(_onControllerChanged);

    if (widget.trigger == AnimationTrigger.loop) {
      _animationController.repeat();
    }
  }

  @override
  void didUpdateWidget(covariant HeroiconAnimatedIcon oldWidget) {
    super.didUpdateWidget(oldWidget);

    if (oldWidget.controller != widget.controller) {
      oldWidget.controller?.removeListener(_onControllerChanged);
      widget.controller?.addListener(_onControllerChanged);
    }

    if (oldWidget.duration != widget.duration ||
        oldWidget.icon != widget.icon) {
      _animationController.duration = _effectiveDuration;
    }

    if (oldWidget.trigger != widget.trigger) {
      if (widget.trigger == AnimationTrigger.loop) {
        _animationController.repeat();
      } else {
        _animationController.stop();
      }
    }
  }

  @override
  void dispose() {
    widget.controller?.removeListener(_onControllerChanged);
    _animationController.dispose();
    super.dispose();
  }

  void _onAnimationStatus(AnimationStatus status) {
    if (status == AnimationStatus.completed ||
        status == AnimationStatus.dismissed) {
      widget.controller?.isAnimating = false;
    }
  }

  void _onControllerChanged() {
    final ctrl = widget.controller;
    if (ctrl == null) return;

    if (ctrl.shouldAnimate) {
      ctrl
        ..consumeRequests()
        ..isAnimating = true;
      _animationController
        ..reset()
        ..forward();
    } else if (ctrl.shouldReverse) {
      ctrl
        ..consumeRequests()
        ..isAnimating = true;
      _animationController.reverse();
    } else if (ctrl.shouldReset) {
      ctrl
        ..consumeRequests()
        ..isAnimating = false;
      _animationController.reset();
    }
  }

  void _triggerAnimation() {
    if (_animationController.isAnimating) return;

    if (_isForward) {
      _animationController
        ..reset()
        ..forward();
    } else {
      _animationController.reverse(from: 1);
    }
    _isForward = !_isForward;
  }

  @override
  Widget build(BuildContext context) {
    Widget icon = RepaintBoundary(
      child: AnimatedBuilder(
        animation: _animationController,
        builder: (context, _) => _buildIcon(),
      ),
    );

    // Wrap in icon-level animation transforms.
    if (widget.icon.animation != null) {
      icon = RepaintBoundary(
        child: AnimatedBuilder(
          animation: _animationController,
          builder:
              (context, child) => _applyIconAnimation(
                child: child!,
                animation: widget.icon.animation!,
                t: _animationController.value,
              ),
          child: icon,
        ),
      );
    }

    switch (widget.trigger) {
      case AnimationTrigger.onTap:
        return GestureDetector(
          onTap: () {
            _triggerAnimation();
            widget.onTap?.call();
          },
          child: icon,
        );
      case AnimationTrigger.onHover:
        return MouseRegion(
          onEnter: (_) => _triggerAnimation(),
          child: GestureDetector(onTap: widget.onTap, child: icon),
        );
      case AnimationTrigger.loop:
      case AnimationTrigger.manual:
        return GestureDetector(onTap: widget.onTap, child: icon);
    }
  }

  Widget _buildIcon() {
    return SizedBox(
      width: widget.size,
      height: widget.size,
      child: Stack(
        children: [
          for (final element in widget.icon.elements) _buildElement(element),
        ],
      ),
    );
  }

  Widget _buildElement(IconElement element) {
    switch (element) {
      case PathElement():
        return _buildPathElement(element);
      case CircleElement():
        return _buildCircleElement(element);
      case RectElement():
        return _buildRectElement(element);
      case LineElement():
        return _buildLineElement(element);
      case PolylineElement():
        return _buildPolylineElement(element);
    }
  }

  Widget _buildPathElement(PathElement element) {
    final anim = element.animation;
    final t = _getAnimationValue(anim);
    final strokeWidth = _getStrokeWidthValue(anim, t) ?? _effectiveStrokeWidth;

    Widget child;

    final pathLengthValues = _getPathLengthValues(anim, t);
    if (pathLengthValues != null) {
      final opacity = _getOpacityValue(anim, t);

      child = CustomPaint(
        size: Size(widget.size, widget.size),
        painter: AnimatedPathPainter(
          pathData: element.d,
          progress: pathLengthValues.progress,
          pathOffset: pathLengthValues.offset,
          color: widget.color,
          strokeWidth: strokeWidth,
          scaleFactor: _scaleFactor,
          opacity: opacity,
        ),
      );
    } else {
      final opacity = _getOpacityValue(anim, t);

      if (element.fill ?? false) {
        child = CustomPaint(
          size: Size(widget.size, widget.size),
          painter: FilledPathPainter(
            pathData: element.d,
            color: widget.color,
            scaleFactor: _scaleFactor,
            opacity: opacity,
          ),
        );
      } else {
        child = CustomPaint(
          size: Size(widget.size, widget.size),
          painter: StaticPathPainter(
            pathDataList: [element.d],
            color: widget.color,
            strokeWidth: strokeWidth,
            scaleFactor: _scaleFactor,
            opacity: opacity,
          ),
        );
      }
    }

    return _applyElementTransforms(child: child, animation: anim, t: t);
  }

  Widget _buildCircleElement(CircleElement element) {
    final anim = element.animation;
    final t = _getAnimationValue(anim);
    final strokeWidth = _getStrokeWidthValue(anim, t) ?? _effectiveStrokeWidth;

    Widget child;

    final pathLengthValues = _getPathLengthValues(anim, t);
    if (pathLengthValues != null) {
      final opacity = _getOpacityValue(anim, t);

      child = CustomPaint(
        size: Size(widget.size, widget.size),
        painter: AnimatedCirclePainter(
          cx: element.cx,
          cy: element.cy,
          r: element.r,
          progress: pathLengthValues.progress,
          color: widget.color,
          strokeWidth: strokeWidth,
          scaleFactor: _scaleFactor,
          opacity: opacity,
        ),
      );
    } else {
      final opacity = _getOpacityValue(anim, t);

      child = CustomPaint(
        size: Size(widget.size, widget.size),
        painter: CirclePainter(
          cx: element.cx,
          cy: element.cy,
          r: element.r,
          color: widget.color,
          strokeWidth: strokeWidth,
          scaleFactor: _scaleFactor,
          opacity: opacity,
        ),
      );
    }

    return _applyElementTransforms(child: child, animation: anim, t: t);
  }

  Widget _buildRectElement(RectElement element) {
    // Convert rect to a path for rendering.
    final rx = element.rx;
    final ry = element.ry;
    final pathData =
        rx > 0 || ry > 0
            ? 'M${element.x + rx},${element.y}'
                'L${element.x + element.width - rx},${element.y}'
                'Q${element.x + element.width},${element.y}'
                ' ${element.x + element.width},${element.y + ry}'
                'L${element.x + element.width},${element.y + element.height - ry}'
                'Q${element.x + element.width},${element.y + element.height}'
                ' ${element.x + element.width - rx},${element.y + element.height}'
                'L${element.x + rx},${element.y + element.height}'
                'Q${element.x},${element.y + element.height}'
                ' ${element.x},${element.y + element.height - ry}'
                'L${element.x},${element.y + ry}'
                'Q${element.x},${element.y}'
                ' ${element.x + rx},${element.y}Z'
            : 'M${element.x},${element.y}'
                'L${element.x + element.width},${element.y}'
                'L${element.x + element.width},${element.y + element.height}'
                'L${element.x},${element.y + element.height}Z';

    final anim = element.animation;
    final t = _getAnimationValue(anim);
    final opacity = _getOpacityValue(anim, t);
    final strokeWidth = _getStrokeWidthValue(anim, t) ?? _effectiveStrokeWidth;

    Widget child;
    final pathLengthValues = _getPathLengthValues(anim, t);
    if (pathLengthValues != null) {
      child = CustomPaint(
        size: Size(widget.size, widget.size),
        painter: AnimatedPathPainter(
          pathData: pathData,
          progress: pathLengthValues.progress,
          pathOffset: pathLengthValues.offset,
          color: widget.color,
          strokeWidth: strokeWidth,
          scaleFactor: _scaleFactor,
          opacity: opacity,
        ),
      );
    } else {
      child = CustomPaint(
        size: Size(widget.size, widget.size),
        painter: StaticPathPainter(
          pathDataList: [pathData],
          color: widget.color,
          strokeWidth: strokeWidth,
          scaleFactor: _scaleFactor,
          opacity: opacity,
        ),
      );
    }

    return _applyElementTransforms(child: child, animation: anim, t: t);
  }

  Widget _buildLineElement(LineElement element) {
    final pathData =
        'M${element.x1},${element.y1}'
        'L${element.x2},${element.y2}';

    final anim = element.animation;
    final t = _getAnimationValue(anim);
    final opacity = _getOpacityValue(anim, t);
    final strokeWidth = _getStrokeWidthValue(anim, t) ?? _effectiveStrokeWidth;

    Widget child;
    final pathLengthValues = _getPathLengthValues(anim, t);
    if (pathLengthValues != null) {
      child = CustomPaint(
        size: Size(widget.size, widget.size),
        painter: AnimatedPathPainter(
          pathData: pathData,
          progress: pathLengthValues.progress,
          pathOffset: pathLengthValues.offset,
          color: widget.color,
          strokeWidth: strokeWidth,
          scaleFactor: _scaleFactor,
          opacity: opacity,
        ),
      );
    } else {
      child = CustomPaint(
        size: Size(widget.size, widget.size),
        painter: StaticPathPainter(
          pathDataList: [pathData],
          color: widget.color,
          strokeWidth: strokeWidth,
          scaleFactor: _scaleFactor,
          opacity: opacity,
        ),
      );
    }

    return _applyElementTransforms(child: child, animation: anim, t: t);
  }

  Widget _buildPolylineElement(PolylineElement element) {
    // Convert points to path data.
    final points = element.points.trim().split(RegExp(r'\s+'));
    if (points.isEmpty) return const SizedBox.shrink();

    final buffer = StringBuffer('M${points[0]}');
    for (var i = 1; i < points.length; i++) {
      buffer.write('L${points[i]}');
    }
    final pathData = buffer.toString();

    final anim = element.animation;
    final t = _getAnimationValue(anim);
    final opacity = _getOpacityValue(anim, t);
    final strokeWidth = _getStrokeWidthValue(anim, t) ?? _effectiveStrokeWidth;

    Widget child;
    final pathLengthValues = _getPathLengthValues(anim, t);
    if (pathLengthValues != null) {
      child = CustomPaint(
        size: Size(widget.size, widget.size),
        painter: AnimatedPathPainter(
          pathData: pathData,
          progress: pathLengthValues.progress,
          pathOffset: pathLengthValues.offset,
          color: widget.color,
          strokeWidth: strokeWidth,
          scaleFactor: _scaleFactor,
          opacity: opacity,
        ),
      );
    } else {
      child = CustomPaint(
        size: Size(widget.size, widget.size),
        painter: StaticPathPainter(
          pathDataList: [pathData],
          color: widget.color,
          strokeWidth: strokeWidth,
          scaleFactor: _scaleFactor,
          opacity: opacity,
        ),
      );
    }

    return _applyElementTransforms(child: child, animation: anim, t: t);
  }

  // ── Animation helpers ──────────────────────────────────────────

  /// Gets the animation progress value, accounting for delay.
  double _getAnimationValue(ElementAnimation? anim) {
    if (anim == null) return _animationController.value;

    final totalMs = _effectiveDuration.inMicroseconds.toDouble();
    if (totalMs <= 0) return _animationController.value;

    final delayMs = anim.delay.inMicroseconds.toDouble();
    final durationMs = anim.duration.inMicroseconds.toDouble();
    final rawT = _animationController.value;

    // Map the global progress to this element's local progress.
    final elementStart = delayMs / totalMs;
    final elementEnd = (delayMs + durationMs) / totalMs;
    final range = elementEnd - elementStart;

    if (range <= 0) return rawT;

    final localT = ((rawT - elementStart) / range).clamp(0.0, 1.0);
    return localT;
  }

  /// Resolves pathLength/pathOffset values at progress [t].
  ({double progress, double offset})? _getPathLengthValues(
    ElementAnimation? anim,
    double t,
  ) {
    if (anim is PathLengthAnimation) {
      final easedT = anim.curve.transform(t);
      return (
        progress: _lerpValue(anim.from, anim.to, easedT),
        offset: _lerpValue(anim.fromOffset, anim.toOffset, easedT),
      );
    }
    if (anim is PathLengthKeyframeAnimation) {
      return (
        progress:
            anim.keyframes.isNotEmpty
                ? _interpolateKeyframes(anim.keyframes, t, curve: anim.curve)
                : 1,
        offset:
            anim.offsetKeyframes.isNotEmpty
                ? _interpolateKeyframes(
                  anim.offsetKeyframes,
                  t,
                  curve: anim.curve,
                )
                : 0,
      );
    }
    if (anim is CombinedAnimation) {
      if (anim.pathLength != null) {
        final pl = anim.pathLength!;
        final easedT = pl.curve.transform(t);
        return (
          progress: _lerpValue(pl.from, pl.to, easedT),
          offset: _lerpValue(pl.fromOffset, pl.toOffset, easedT),
        );
      }
      if (anim.pathLengthKeyframe != null) {
        final pk = anim.pathLengthKeyframe!;
        return (
          progress:
              pk.keyframes.isNotEmpty
                  ? _interpolateKeyframes(pk.keyframes, t, curve: pk.curve)
                  : 1,
          offset:
              pk.offsetKeyframes.isNotEmpty
                  ? _interpolateKeyframes(
                    pk.offsetKeyframes,
                    t,
                    curve: pk.curve,
                  )
                  : 0,
        );
      }
    }
    return null;
  }

  /// Gets opacity value from the animation at progress [t].
  double _getOpacityValue(ElementAnimation? anim, double t) {
    if (anim == null) return 1;
    if (anim is OpacityAnimation) {
      return _lerpValue(anim.from, anim.to, anim.curve.transform(t));
    }
    if (anim is OpacityKeyframeAnimation) {
      return _interpolateKeyframes(anim.keyframes, t, curve: anim.curve);
    }
    if (anim is CombinedAnimation && anim.opacity != null) {
      final op = anim.opacity!;
      return _lerpValue(op.from, op.to, op.curve.transform(t));
    }
    if (anim is CombinedAnimation && anim.opacityKeyframe != null) {
      final op = anim.opacityKeyframe!;
      return _interpolateKeyframes(op.keyframes, t, curve: op.curve);
    }
    return 1;
  }

  /// Applies transform-based animations (rotate, scale, translate).
  Widget _applyElementTransforms({
    required Widget child,
    required ElementAnimation? animation,
    required double t,
  }) {
    if (animation == null) return child;

    var result = child;

    // Scale (uniform and non-uniform).
    final scaleValues = _getScaleValues(animation, t);
    if (scaleValues != null &&
        (scaleValues.dx != 1.0 || scaleValues.dy != 1.0)) {
      final originX = _getScaleOriginX(animation);
      final originY = _getScaleOriginY(animation);
      result = Transform(
        alignment: Alignment(originX * 2 - 1, originY * 2 - 1),
        transform:
            Matrix4.identity()
              ..scaleByDouble(scaleValues.dx, scaleValues.dy, 1.0, 1.0),
        child: result,
      );
    }

    // Skew X.
    final skewXValue = _getSkewXValue(animation, t);
    if (skewXValue != null && skewXValue != 0.0) {
      final originX = _getSkewOriginX(animation);
      final originY = _getSkewOriginY(animation);
      result = Transform(
        alignment: Alignment(originX * 2 - 1, originY * 2 - 1),
        transform:
            Matrix4.identity()
              ..setEntry(0, 1, math.tan(skewXValue * math.pi / 180)),
        child: result,
      );
    }

    // 3D rotate X/Y.
    final rotateXValue = _getRotateXValue(animation, t) ?? 0;
    final rotateYValue = _getRotateYValue(animation, t) ?? 0;
    if (rotateXValue != 0.0 || rotateYValue != 0.0) {
      final originX = _getRotate3DOriginX(animation);
      final originY = _getRotate3DOriginY(animation);
      result = Transform(
        alignment: Alignment(originX * 2 - 1, originY * 2 - 1),
        transform:
            Matrix4.identity()
              ..setEntry(3, 2, 0.001)
              ..rotateX(rotateXValue * math.pi / 180)
              ..rotateY(rotateYValue * math.pi / 180),
        child: result,
      );
    }

    // Rotate Z.
    final rotateValue = _getRotateValue(animation, t);
    if (rotateValue != null && rotateValue != 0.0) {
      final originX = _getRotateOriginX(animation);
      final originY = _getRotateOriginY(animation);
      result = Transform.rotate(
        angle: rotateValue * math.pi / 180,
        origin: Offset(
          (originX - 0.5) * widget.size,
          (originY - 0.5) * widget.size,
        ),
        child: result,
      );
    }

    // Translate.
    final translateOffset = _getTranslateValue(animation, t);
    if (translateOffset != null && translateOffset != Offset.zero) {
      result = Transform.translate(
        offset: translateOffset * _scaleFactor,
        child: result,
      );
    }

    return result;
  }

  /// Applies icon-level animation transforms.
  Widget _applyIconAnimation({
    required Widget child,
    required ElementAnimation animation,
    required double t,
  }) {
    return _applyElementTransforms(
      child: child,
      animation: animation,
      t: t.clamp(0, 1).toDouble(),
    );
  }

  Offset? _getScaleValues(ElementAnimation anim, double t) {
    if (anim is ScaleAnimation) {
      final value = _lerpValue(anim.from, anim.to, anim.curve.transform(t));
      return Offset(value, value);
    }
    if (anim is ScaleKeyframeAnimation) {
      final value = _interpolateKeyframes(anim.keyframes, t, curve: anim.curve);
      return Offset(value, value);
    }
    if (anim is ScaleXYAnimation) {
      final easedT = anim.curve.transform(t);
      return Offset(
        _lerpValue(anim.fromX, anim.toX, easedT),
        _lerpValue(anim.fromY, anim.toY, easedT),
      );
    }
    if (anim is ScaleXYKeyframeAnimation) {
      return Offset(
        anim.keyframesX.isNotEmpty
            ? _interpolateKeyframes(anim.keyframesX, t, curve: anim.curve)
            : 1,
        anim.keyframesY.isNotEmpty
            ? _interpolateKeyframes(anim.keyframesY, t, curve: anim.curve)
            : 1,
      );
    }
    if (anim is CombinedAnimation) {
      if (anim.scaleXY != null) {
        final scale = anim.scaleXY!;
        final easedT = scale.curve.transform(t);
        return Offset(
          _lerpValue(scale.fromX, scale.toX, easedT),
          _lerpValue(scale.fromY, scale.toY, easedT),
        );
      }
      if (anim.scaleXYKeyframe != null) {
        final sk = anim.scaleXYKeyframe!;
        return Offset(
          sk.keyframesX.isNotEmpty
              ? _interpolateKeyframes(sk.keyframesX, t, curve: sk.curve)
              : 1,
          sk.keyframesY.isNotEmpty
              ? _interpolateKeyframes(sk.keyframesY, t, curve: sk.curve)
              : 1,
        );
      }
      if (anim.scale != null) {
        final scale = anim.scale!;
        final value = _lerpValue(
          scale.from,
          scale.to,
          scale.curve.transform(t),
        );
        return Offset(value, value);
      }
      if (anim.scaleKeyframe != null) {
        final scale = anim.scaleKeyframe!;
        final value = _interpolateKeyframes(
          scale.keyframes,
          t,
          curve: scale.curve,
        );
        return Offset(value, value);
      }
    }
    return null;
  }

  double _getScaleOriginX(ElementAnimation anim) {
    if (anim is ScaleAnimation) return anim.originX;
    if (anim is ScaleKeyframeAnimation) return anim.originX;
    if (anim is ScaleXYAnimation) return anim.originX;
    if (anim is ScaleXYKeyframeAnimation) return anim.originX;
    if (anim is CombinedAnimation) {
      if (anim.scaleXY != null) return anim.scaleXY!.originX;
      if (anim.scaleXYKeyframe != null) return anim.scaleXYKeyframe!.originX;
      if (anim.scale != null) return anim.scale!.originX;
      if (anim.scaleKeyframe != null) return anim.scaleKeyframe!.originX;
    }
    return 0.5;
  }

  double _getScaleOriginY(ElementAnimation anim) {
    if (anim is ScaleAnimation) return anim.originY;
    if (anim is ScaleKeyframeAnimation) return anim.originY;
    if (anim is ScaleXYAnimation) return anim.originY;
    if (anim is ScaleXYKeyframeAnimation) return anim.originY;
    if (anim is CombinedAnimation) {
      if (anim.scaleXY != null) return anim.scaleXY!.originY;
      if (anim.scaleXYKeyframe != null) return anim.scaleXYKeyframe!.originY;
      if (anim.scale != null) return anim.scale!.originY;
      if (anim.scaleKeyframe != null) return anim.scaleKeyframe!.originY;
    }
    return 0.5;
  }

  double? _getStrokeWidthValue(ElementAnimation? anim, double t) {
    if (anim == null) return null;
    if (anim is StrokeWidthAnimation) {
      return _lerpValue(anim.from, anim.to, anim.curve.transform(t));
    }
    if (anim is StrokeWidthKeyframeAnimation) {
      return _interpolateKeyframes(anim.keyframes, t, curve: anim.curve);
    }
    if (anim is CombinedAnimation) {
      if (anim.strokeWidth != null) {
        final sw = anim.strokeWidth!;
        return _lerpValue(sw.from, sw.to, sw.curve.transform(t));
      }
      if (anim.strokeWidthKeyframe != null) {
        final sw = anim.strokeWidthKeyframe!;
        return _interpolateKeyframes(sw.keyframes, t, curve: sw.curve);
      }
    }
    return null;
  }

  double? _getRotateValue(ElementAnimation anim, double t) {
    if (anim is RotateAnimation) {
      return _lerpValue(
        anim.fromDegrees,
        anim.toDegrees,
        anim.curve.transform(t),
      );
    }
    if (anim is RotateKeyframeAnimation) {
      return _interpolateKeyframes(anim.keyframes, t, curve: anim.curve);
    }
    if (anim is CombinedAnimation) {
      if (anim.rotate != null) {
        final rotate = anim.rotate!;
        return _lerpValue(
          rotate.fromDegrees,
          rotate.toDegrees,
          rotate.curve.transform(t),
        );
      }
      if (anim.rotateKeyframe != null) {
        final rotate = anim.rotateKeyframe!;
        return _interpolateKeyframes(rotate.keyframes, t, curve: rotate.curve);
      }
    }
    return null;
  }

  double? _getRotateXValue(ElementAnimation anim, double t) {
    if (anim is RotateXAnimation) {
      return _lerpValue(
        anim.fromDegrees,
        anim.toDegrees,
        anim.curve.transform(t),
      );
    }
    if (anim is RotateXKeyframeAnimation) {
      return _interpolateKeyframes(anim.keyframes, t, curve: anim.curve);
    }
    if (anim is CombinedAnimation) {
      if (anim.rotateX != null) {
        final rotate = anim.rotateX!;
        return _lerpValue(
          rotate.fromDegrees,
          rotate.toDegrees,
          rotate.curve.transform(t),
        );
      }
      if (anim.rotateXKeyframe != null) {
        final rotate = anim.rotateXKeyframe!;
        return _interpolateKeyframes(rotate.keyframes, t, curve: rotate.curve);
      }
    }
    return null;
  }

  double? _getRotateYValue(ElementAnimation anim, double t) {
    if (anim is RotateYAnimation) {
      return _lerpValue(
        anim.fromDegrees,
        anim.toDegrees,
        anim.curve.transform(t),
      );
    }
    if (anim is RotateYKeyframeAnimation) {
      return _interpolateKeyframes(anim.keyframes, t, curve: anim.curve);
    }
    if (anim is CombinedAnimation) {
      if (anim.rotateY != null) {
        final rotate = anim.rotateY!;
        return _lerpValue(
          rotate.fromDegrees,
          rotate.toDegrees,
          rotate.curve.transform(t),
        );
      }
      if (anim.rotateYKeyframe != null) {
        final rotate = anim.rotateYKeyframe!;
        return _interpolateKeyframes(rotate.keyframes, t, curve: rotate.curve);
      }
    }
    return null;
  }

  double _getRotateOriginX(ElementAnimation anim) {
    if (anim is RotateAnimation) return anim.originX;
    if (anim is RotateKeyframeAnimation) return anim.originX;
    if (anim is CombinedAnimation) {
      if (anim.rotate != null) return anim.rotate!.originX;
      if (anim.rotateKeyframe != null) return anim.rotateKeyframe!.originX;
    }
    return 0.5;
  }

  double _getRotateOriginY(ElementAnimation anim) {
    if (anim is RotateAnimation) return anim.originY;
    if (anim is RotateKeyframeAnimation) return anim.originY;
    if (anim is CombinedAnimation) {
      if (anim.rotate != null) return anim.rotate!.originY;
      if (anim.rotateKeyframe != null) return anim.rotateKeyframe!.originY;
    }
    return 0.5;
  }

  double _getRotate3DOriginX(ElementAnimation anim) {
    if (anim is RotateXAnimation) return anim.originX;
    if (anim is RotateXKeyframeAnimation) return anim.originX;
    if (anim is RotateYAnimation) return anim.originX;
    if (anim is RotateYKeyframeAnimation) return anim.originX;
    if (anim is CombinedAnimation) {
      if (anim.rotateX != null) return anim.rotateX!.originX;
      if (anim.rotateXKeyframe != null) return anim.rotateXKeyframe!.originX;
      if (anim.rotateY != null) return anim.rotateY!.originX;
      if (anim.rotateYKeyframe != null) return anim.rotateYKeyframe!.originX;
    }
    return 0.5;
  }

  double _getRotate3DOriginY(ElementAnimation anim) {
    if (anim is RotateXAnimation) return anim.originY;
    if (anim is RotateXKeyframeAnimation) return anim.originY;
    if (anim is RotateYAnimation) return anim.originY;
    if (anim is RotateYKeyframeAnimation) return anim.originY;
    if (anim is CombinedAnimation) {
      if (anim.rotateX != null) return anim.rotateX!.originY;
      if (anim.rotateXKeyframe != null) return anim.rotateXKeyframe!.originY;
      if (anim.rotateY != null) return anim.rotateY!.originY;
      if (anim.rotateYKeyframe != null) return anim.rotateYKeyframe!.originY;
    }
    return 0.5;
  }

  Offset? _getTranslateValue(ElementAnimation anim, double t) {
    if (anim is TranslateAnimation) {
      final easedT = anim.curve.transform(t);
      return Offset(
        _lerpValue(anim.fromX, anim.toX, easedT),
        _lerpValue(anim.fromY, anim.toY, easedT),
      );
    }
    if (anim is TranslateKeyframeAnimation) {
      return Offset(
        anim.keyframesX.isNotEmpty
            ? _interpolateKeyframes(anim.keyframesX, t, curve: anim.curve)
            : 0,
        anim.keyframesY.isNotEmpty
            ? _interpolateKeyframes(anim.keyframesY, t, curve: anim.curve)
            : 0,
      );
    }
    if (anim is CombinedAnimation) {
      if (anim.translate != null) {
        final translate = anim.translate!;
        final easedT = translate.curve.transform(t);
        return Offset(
          _lerpValue(translate.fromX, translate.toX, easedT),
          _lerpValue(translate.fromY, translate.toY, easedT),
        );
      }
      if (anim.translateKeyframe != null) {
        final tk = anim.translateKeyframe!;
        return Offset(
          tk.keyframesX.isNotEmpty
              ? _interpolateKeyframes(tk.keyframesX, t, curve: tk.curve)
              : 0,
          tk.keyframesY.isNotEmpty
              ? _interpolateKeyframes(tk.keyframesY, t, curve: tk.curve)
              : 0,
        );
      }
    }
    return null;
  }

  double? _getSkewXValue(ElementAnimation anim, double t) {
    if (anim is SkewXAnimation) {
      return _lerpValue(
        anim.fromDegrees,
        anim.toDegrees,
        anim.curve.transform(t),
      );
    }
    if (anim is SkewXKeyframeAnimation) {
      return _interpolateKeyframes(anim.keyframes, t, curve: anim.curve);
    }
    if (anim is CombinedAnimation) {
      if (anim.skewX != null) {
        final skew = anim.skewX!;
        return _lerpValue(
          skew.fromDegrees,
          skew.toDegrees,
          skew.curve.transform(t),
        );
      }
      if (anim.skewXKeyframe != null) {
        final skew = anim.skewXKeyframe!;
        return _interpolateKeyframes(skew.keyframes, t, curve: skew.curve);
      }
    }
    return null;
  }

  double _getSkewOriginX(ElementAnimation anim) {
    if (anim is SkewXAnimation) return anim.originX;
    if (anim is SkewXKeyframeAnimation) return anim.originX;
    if (anim is CombinedAnimation) {
      if (anim.skewX != null) return anim.skewX!.originX;
      if (anim.skewXKeyframe != null) return anim.skewXKeyframe!.originX;
    }
    return 0.5;
  }

  double _getSkewOriginY(ElementAnimation anim) {
    if (anim is SkewXAnimation) return anim.originY;
    if (anim is SkewXKeyframeAnimation) return anim.originY;
    if (anim is CombinedAnimation) {
      if (anim.skewX != null) return anim.skewX!.originY;
      if (anim.skewXKeyframe != null) return anim.skewXKeyframe!.originY;
    }
    return 0.5;
  }

  /// Linearly interpolates between [a] and [b] at progress [t].
  double _lerpValue(double a, double b, double t) => a + (b - a) * t;

  /// Interpolates through a list of keyframe values at progress [t].
  ///
  /// The [curve] is applied per segment (Framer Motion style), not once across
  /// the full keyframe sequence.
  double _interpolateKeyframes(
    List<double> keyframes,
    double t, {
    Curve curve = Curves.linear,
  }) {
    if (keyframes.isEmpty) return 0;
    if (keyframes.length == 1) return keyframes[0];

    final segments = keyframes.length - 1;
    final segmentIndex = (t * segments).floor().clamp(0, segments - 1);
    final segmentT = (t * segments) - segmentIndex;
    final easedSegmentT = curve.transform(segmentT.clamp(0.0, 1.0));

    return keyframes[segmentIndex] +
        (keyframes[segmentIndex + 1] - keyframes[segmentIndex]) * easedSegmentT;
  }
}
