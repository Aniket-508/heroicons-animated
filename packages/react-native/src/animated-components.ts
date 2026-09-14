import Animated from "react-native-reanimated";
import { Circle, Ellipse, G, Line, Path, Polygon, Polyline, Rect, Svg } from "react-native-svg";

/**
 * Pre-created animated SVG components for use in icon implementations.
 * Using Animated.createAnimatedComponent() wraps react-native-svg
 * components so their props can be driven by shared values.
 */
export const AnimatedSvg = Animated.createAnimatedComponent(Svg);
export const AnimatedPath = Animated.createAnimatedComponent(Path);
export const AnimatedCircle = Animated.createAnimatedComponent(Circle);
export const AnimatedRect = Animated.createAnimatedComponent(Rect);
export const AnimatedG = Animated.createAnimatedComponent(G);
export const AnimatedLine = Animated.createAnimatedComponent(Line);
export const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
export const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);
export const AnimatedPolyline = Animated.createAnimatedComponent(Polyline);
