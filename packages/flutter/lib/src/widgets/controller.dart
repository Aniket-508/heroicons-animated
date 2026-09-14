import 'package:flutter/foundation.dart';

/// Controls an animated Heroicon.
///
/// Use with [AnimationTrigger.manual] to programmatically
/// control icon animations.
///
/// ```dart
/// final controller = HeroiconAnimatedIconController();
///
/// HeroiconAnimatedIcon(
///   icon: heart,
///   trigger: AnimationTrigger.manual,
///   controller: controller,
/// );
///
/// controller.animate();
/// ```
class HeroiconAnimatedIconController extends ChangeNotifier {
  bool _isAnimating = false;
  bool _shouldAnimate = false;
  bool _shouldReverse = false;
  bool _shouldReset = false;
  bool _reverseOnToggle = false;

  /// Whether the animation is currently running.
  bool get isAnimating => _isAnimating;

  /// Whether an animate request is pending.
  bool get shouldAnimate => _shouldAnimate;

  /// Whether a reverse request is pending.
  bool get shouldReverse => _shouldReverse;

  /// Whether a reset request is pending.
  bool get shouldReset => _shouldReset;

  /// Plays the animation forward.
  void animate() {
    _shouldAnimate = true;
    _shouldReverse = false;
    _shouldReset = false;
    _reverseOnToggle = true;
    notifyListeners();
  }

  /// Plays the animation in reverse.
  void reverse() {
    _shouldReverse = true;
    _shouldAnimate = false;
    _shouldReset = false;
    _reverseOnToggle = false;
    notifyListeners();
  }

  /// Resets the animation to its initial state.
  void reset() {
    _shouldReset = true;
    _shouldAnimate = false;
    _shouldReverse = false;
    _reverseOnToggle = false;
    notifyListeners();
  }

  /// Toggles between animate and reverse.
  void toggle() {
    if (_reverseOnToggle) {
      reverse();
    } else {
      animate();
    }
  }

  /// Called by the widget to mark that pending requests have been consumed.
  void consumeRequests() {
    _shouldAnimate = false;
    _shouldReverse = false;
    _shouldReset = false;
  }

  /// Allows the widget to update and publish the running state.
  set isAnimating(bool value) {
    if (_isAnimating == value) return;
    _isAnimating = value;
    notifyListeners();
  }
}

/// How the animation is triggered.
enum AnimationTrigger {
  /// Animate when tapped (default).
  onTap,

  /// Animate on mouse enter (useful for web/desktop).
  onHover,

  /// Continuously loop the animation.
  loop,

  /// Controlled programmatically via [HeroiconAnimatedIconController].
  manual,
}
