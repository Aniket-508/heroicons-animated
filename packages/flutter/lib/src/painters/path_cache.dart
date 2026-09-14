import 'dart:ui';

import 'package:path_parsing/path_parsing.dart';
import 'package:vector_math/vector_math_64.dart';

/// Caches parsed SVG paths and their metrics for performance.
///
/// Avoids re-parsing path strings on every frame by maintaining
/// a global cache keyed by path data string and scale factor.
class PathCache {
  PathCache._();

  static final Map<String, Path> _pathCache = {};
  static final Map<String, Path> _scaledPathCache = {};
  static final Map<String, List<PathMetric>> _metricsCache = {};

  /// Parses an SVG path data string into a Flutter [Path].
  ///
  /// Results are cached globally for subsequent calls with the same data.
  static Path parsePath(String pathData) {
    return _pathCache.putIfAbsent(pathData, () {
      final path = Path();
      writeSvgPathDataToPath(pathData, _FlutterPathProxy(path));
      return path;
    });
  }

  /// Returns a scaled copy of the parsed path.
  ///
  /// The path is scaled by [scaleFactor] to fit the target size.
  static Path getScaledPath(String pathData, double scaleFactor) {
    final key = '$pathData@$scaleFactor';
    return _scaledPathCache.putIfAbsent(key, () {
      final original = parsePath(pathData);
      final matrix = Matrix4.diagonal3Values(scaleFactor, scaleFactor, 1);
      return original.transform(matrix.storage);
    });
  }

  /// Returns path metrics for the scaled path.
  ///
  /// Used for pathLength animation to extract partial paths.
  static List<PathMetric> getMetrics(String pathData, double scaleFactor) {
    final key = '$pathData@$scaleFactor';
    return _metricsCache.putIfAbsent(key, () {
      final path = getScaledPath(pathData, scaleFactor);
      return path.computeMetrics().toList();
    });
  }

  /// Clears all cached paths and metrics.
  static void clearCache() {
    _pathCache.clear();
    _scaledPathCache.clear();
    _metricsCache.clear();
  }
}

/// Adapter bridging [PathProxy] interface to Flutter's [Path].
class _FlutterPathProxy implements PathProxy {
  _FlutterPathProxy(this.path);

  final Path path;

  @override
  void close() => path.close();

  @override
  void cubicTo(
    double x1,
    double y1,
    double x2,
    double y2,
    double x3,
    double y3,
  ) => path.cubicTo(x1, y1, x2, y2, x3, y3);

  @override
  void lineTo(double x, double y) => path.lineTo(x, y);

  @override
  void moveTo(double x, double y) => path.moveTo(x, y);
}
