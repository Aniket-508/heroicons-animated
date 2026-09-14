import 'package:heroicons_animated/src/models/animation.dart';

/// Base class for SVG elements that make up an icon.
sealed class IconElement {
  const IconElement({this.animation});

  /// Optional animation for this specific element.
  final ElementAnimation? animation;
}

/// An SVG `<path>` element.
class PathElement extends IconElement {
  const PathElement({required this.d, this.fill = false, super.animation});

  /// The SVG path data string (the `d` attribute).
  final String d;

  /// Whether this path should be filled instead of stroked.
  final bool? fill;
}

/// An SVG `<circle>` element.
class CircleElement extends IconElement {
  const CircleElement({
    required this.cx,
    required this.cy,
    required this.r,
    super.animation,
  });

  final double cx;
  final double cy;
  final double r;
}

/// An SVG `<rect>` element.
class RectElement extends IconElement {
  const RectElement({
    required this.x,
    required this.y,
    required this.width,
    required this.height,
    this.rx = 0,
    this.ry = 0,
    super.animation,
  });

  final double x;
  final double y;
  final double width;
  final double height;
  final double rx;
  final double ry;
}

/// An SVG `<line>` element.
class LineElement extends IconElement {
  const LineElement({
    required this.x1,
    required this.y1,
    required this.x2,
    required this.y2,
    super.animation,
  });

  final double x1;
  final double y1;
  final double x2;
  final double y2;
}

/// An SVG `<polyline>` element.
class PolylineElement extends IconElement {
  const PolylineElement({required this.points, super.animation});

  /// Space-separated list of points (e.g. "0,0 10,10 20,0").
  final String points;
}
