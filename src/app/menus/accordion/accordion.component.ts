import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.less']
})
export class AccordionComponent implements OnInit {

    constructor(
        private renderer: Renderer2
    ) { }

    public ngOnInit(): void {
    }

    public onToggleOpen(event: MouseEvent): void {
        const button: Element = event.toElement;
        const text: Element = this.renderer.nextSibling(button);
        const panel: Element = this.renderer.nextSibling(text);
        if (button.className === 'accordion active') {
            this.renderer.removeClass(button, 'active');
            this.renderer.setStyle(panel, 'max-height', '0');
        } else {
            this.renderer.addClass(button, 'active');
            this.renderer.setStyle(panel, 'max-height', `${panel.scrollHeight}px`);
        }
    }
}
