import SimpleGreeting from './lit/simple-greeting';
import ComposingTemplates from './lit/composing-templates';
import ToggleElement from './lit/toggle-element';
import StylesClasses from './lit/styles-classes';
import CounterElement from './lit/counter-element';
import { MyDispatcher, MyListener } from './lit/dispatcher-listener';
import MediatorElement from './lit/mediator-element';
import LoggingMixin from './lit/logging-mixin';

window.customElements.define('simple-greeting', SimpleGreeting);
window.customElements.define('composing-templates', ComposingTemplates);
window.customElements.define('toggle-element', ToggleElement);
window.customElements.define('styles-classes', StylesClasses);
window.customElements.define('counter-element', CounterElement);
window.customElements.define('my-dispatcher', MyDispatcher);
window.customElements.define('my-listener', MyListener);
window.customElements.define('mediator-element', MediatorElement);
window.customElements.define('mediator-element-logging', LoggingMixin(MediatorElement));
