import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:heroicons_animated/heroicons_animated.dart';

void main() {
  testWidgets('All heroicons render without error', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: SingleChildScrollView(
            child: Wrap(
              spacing: 8,
              runSpacing: 8,
              children: [
                for (final icon in allHeroicons)
                  SizedBox(
                    width: 48,
                    height: 48,
                    child: HeroiconAnimatedIcon(
                      icon: icon,
                      size: 32,
                      color: Colors.black,
                      trigger: AnimationTrigger.manual,
                    ),
                  ),
              ],
            ),
          ),
        ),
      ),
    );

    expect(allHeroicons, hasLength(316));
  });

  test('manual controller toggles between forward and reverse', () {
    final controller = HeroiconAnimatedIconController()..toggle();
    expect(controller.shouldAnimate, isTrue);

    controller
      ..consumeRequests()
      ..toggle();
    expect(controller.shouldReverse, isTrue);

    controller
      ..reset()
      ..consumeRequests()
      ..toggle();
    expect(controller.shouldAnimate, isTrue);
  });
}
