import 'package:heroicons_animated/src/models/animation.dart';
import 'package:heroicons_animated/src/models/element.dart';

/// Data describing an animated Heroicon.
///
/// Contains SVG element definitions and animation configurations.
class HeroiconAnimatedIconData {
  const HeroiconAnimatedIconData({
    required this.name,
    required this.elements,
    this.viewBoxWidth = 24,
    this.viewBoxHeight = 24,
    this.strokeWidth = 1.5,
    this.animation,
  });

  /// Human-readable name of the icon (e.g. "heart", "bolt").
  final String name;

  /// Width of the SVG viewBox.
  final double viewBoxWidth;

  /// Height of the SVG viewBox.
  final double viewBoxHeight;

  /// Default stroke width for all paths. Heroicons default is 1.5.
  final double strokeWidth;

  /// The SVG elements that make up this icon.
  final List<IconElement> elements;

  /// Optional icon-level animation applied to the entire icon.
  final ElementAnimation? animation;
}
