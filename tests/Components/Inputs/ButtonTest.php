<?php

namespace Northwestern\SysDev\DynamicForms\Tests\Components\Inputs;

use Northwestern\SysDev\DynamicForms\Components\Inputs\Button;
use Northwestern\SysDev\DynamicForms\Tests\Components\TestCases\BaseComponentTestCase;

/**
 * @coversDefaultClass \Northwestern\SysDev\DynamicForms\Components\Inputs\Button
 */
class ButtonTest extends BaseComponentTestCase
{
    protected string $componentClass = Button::class;

    /**
     * @covers ::action
     *
     * @dataProvider actionProvider
     */
    public function testAction(array $additional, string $expectedAction): void
    {
        /** @var Button $component */
        $component = $this->getComponent(additional: $additional);

        $this->assertEquals($expectedAction, $component->action());
    }

    public function actionProvider(): array
    {
        return [
            'key not present' => [[], Button::ACTION_SUBMIT],
            'submit' => [['action' => Button::ACTION_SUBMIT], Button::ACTION_SUBMIT],
            'save' => [['action' => Button::ACTION_SAVE_STATE], Button::ACTION_SAVE_STATE],
        ];
    }
}
