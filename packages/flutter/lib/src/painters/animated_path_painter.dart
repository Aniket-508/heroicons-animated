import 'dart:math' as math;

import 'package:flutter/rendering.dart';
import 'package:heroicons_animated/src/painters/path_cache.dart';

/// Paints an SVG path with animated stroke drawing (pathLength effect).
///
/// [progress] controls how much of the path is visible (0.0 to 1.0).
/// [pathOffset] shifts the starting point of the path drawing.
class AnimatedPathPainter extends CustomPainter {
  AnimatedPathPainter({
    required this.pathData,
    required this.progress,
    required this.color,
    required this.strokeWidth,
    required this.scaleFactor,
    this.pathOffset = 0,
    this.opacity = 1,
  });

  final String pathData;
  final double progress;
  final Color color;
  final double strokeWidth;
  final double scaleFactor;
  final double pathOffset;
  final double opacity;

  @override
  void paint(Canvas canvas, Size size) {
    if (progress <= 0 && opacity <= 0) return;

    final paint =
        Paint()
          ..color = color.withValues(alpha: opacity)
          ..style = PaintingStyle.stroke
          ..strokeWidth = strokeWidth * scaleFactor
          ..strokeCap = StrokeCap.round
          ..strokeJoin = StrokeJoin.round;

    final metrics = PathCache.getMetrics(pathData, scaleFactor);

    for (final metric in metrics) {
      final totalLength = metric.length;
      final drawLength = totalLength * progress.clamp(0, 1);
      final offsetLength = totalLength * pathOffset.clamp(0, 1);

      if (drawLength <= 0) continue;

      final start = offsetLength;
      final end = (start + drawLength).clamp(0, totalLength);

      if (end > start) {
        final extractedPath = metric.extractPath(start, end.toDouble());
        canvas.drawPath(extractedPath, paint);
      }
    }
  }

  @override
  bool shouldRepaint(covariant AnimatedPathPainter oldDelegate) {
    return oldDelegate.progress != progress ||
        oldDelegate.pathOffset != pathOffset ||
        oldDelegate.opacity != opacity ||
        oldDelegate.color != color ||
        oldDelegate.strokeWidth != strokeWidth ||
        oldDelegate.pathData != pathData;
  }
}

/// Paints one or more SVG paths without pathLength animation.
///
/// Used for static paths or paths that only have transform-based
/// animations (rotate, scale, translate).
class StaticPathPainter extends CustomPainter {
  StaticPathPainter({
    required this.pathDataList,
    required this.color,
    required this.strokeWidth,
    required this.scaleFactor,
    this.opacity = 1,
  });

  final List<String> pathDataList;
  final Color color;
  final double strokeWidth;
  final double scaleFactor;
  final double opacity;

  @override
  void paint(Canvas canvas, Size size) {
    if (opacity <= 0) return;

    final paint =
        Paint()
          ..color = color.withValues(alpha: opacity)
          ..style = PaintingStyle.stroke
          ..strokeWidth = strokeWidth * scaleFactor
          ..strokeCap = StrokeCap.round
          ..strokeJoin = StrokeJoin.round;

    for (final pathData in pathDataList) {
      final path = PathCache.getScaledPath(pathData, scaleFactor);
      canvas.drawPath(path, paint);
    }
  }

  @override
  bool shouldRepaint(covariant StaticPathPainter oldDelegate) {
    return oldDelegate.opacity != opacity ||
        oldDelegate.color != color ||
        oldDelegate.strokeWidth != strokeWidth;
  }
}

/// Paints an SVG path with fill style.
class FilledPathPainter extends CustomPainter {
  FilledPathPainter({
    required this.pathData,
    required this.color,
    required this.scaleFactor,
    this.opacity = 1,
  });

  final String pathData;
  final Color color;
  final double scaleFactor;
  final double opacity;

  @override
  void paint(Canvas canvas, Size size) {
    if (opacity <= 0) return;

    final paint =
        Paint()
          ..color = color.withValues(alpha: opacity)
          ..style = PaintingStyle.fill;

    final path = PathCache.getScaledPath(pathData, scaleFactor);
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant FilledPathPainter oldDelegate) {
    return oldDelegate.pathData != pathData ||
        oldDelegate.opacity != opacity ||
        oldDelegate.color != color ||
        oldDelegate.scaleFactor != scaleFactor;
  }
}

/// Paints an SVG circle element.
class CirclePainter extends CustomPainter {
  CirclePainter({
    required this.cx,
    required this.cy,
    required this.r,
    required this.color,
    required this.strokeWidth,
    required this.scaleFactor,
    this.opacity = 1,
  });

  final double cx;
  final double cy;
  final double r;
  final Color color;
  final double strokeWidth;
  final double scaleFactor;
  final double opacity;

  @override
  void paint(Canvas canvas, Size size) {
    if (opacity <= 0) return;

    final paint =
        Paint()
          ..color = color.withValues(alpha: opacity)
          ..style = PaintingStyle.stroke
          ..strokeWidth = strokeWidth * scaleFactor
          ..strokeCap = StrokeCap.round
          ..strokeJoin = StrokeJoin.round;

    canvas.drawCircle(
      Offset(cx * scaleFactor, cy * scaleFactor),
      r * scaleFactor,
      paint,
    );
  }

  @override
  bool shouldRepaint(covariant CirclePainter oldDelegate) {
    return oldDelegate.opacity != opacity || oldDelegate.color != color;
  }
}

/// Paints an SVG circle with animated stroke drawing.
class AnimatedCirclePainter extends CustomPainter {
  AnimatedCirclePainter({
    required this.cx,
    required this.cy,
    required this.r,
    required this.progress,
    required this.color,
    required this.strokeWidth,
    required this.scaleFactor,
    this.opacity = 1,
  });

  final double cx;
  final double cy;
  final double r;
  final double progress;
  final Color color;
  final double strokeWidth;
  final double scaleFactor;
  final double opacity;

  @override
  void paint(Canvas canvas, Size size) {
    if (progress <= 0 && opacity <= 0) return;

    final paint =
        Paint()
          ..color = color.withValues(alpha: opacity)
          ..style = PaintingStyle.stroke
          ..strokeWidth = strokeWidth * scaleFactor
          ..strokeCap = StrokeCap.round
          ..strokeJoin = StrokeJoin.round;

    final sweepAngle = 2 * math.pi * progress.clamp(0, 1);
    final rect = Rect.fromCircle(
      center: Offset(cx * scaleFactor, cy * scaleFactor),
      radius: r * scaleFactor,
    );

    canvas.drawArc(rect, -math.pi / 2, sweepAngle, false, paint);
  }

  @override
  bool shouldRepaint(covariant AnimatedCirclePainter oldDelegate) {
    return oldDelegate.progress != progress ||
        oldDelegate.opacity != opacity ||
        oldDelegate.color != color;
  }
}
