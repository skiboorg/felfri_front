import PrimeVue from "primevue/config";
import Slider from 'primevue/slider'
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/dropdown';
import Image from 'primevue/image';
import Galleria from 'primevue/galleria';
import ProgressSpinner from 'primevue/progressspinner';
import Dialog from 'primevue/dialog';
import Tooltip from 'primevue/tooltip';
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Paginator from 'primevue/paginator';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Textarea from 'primevue/textarea';
import OverlayPanel from 'primevue/overlaypanel';
import Sidebar from 'primevue/sidebar';
import FileUpload from 'primevue/fileupload';
import Carousel from 'primevue/carousel';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: false});
    nuxtApp.vueApp.component('Slider', Slider)
    nuxtApp.vueApp.component('Checkbox', Checkbox)
    nuxtApp.vueApp.component('Dropdown', Dropdown)
    nuxtApp.vueApp.component('Image', Image)
    nuxtApp.vueApp.component('Galleria', Galleria)
    nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner)
    nuxtApp.vueApp.component('Dialog', Dialog)
    nuxtApp.vueApp.component('InputMask', InputMask)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('TabView', TabView)
    nuxtApp.vueApp.component('TabPanel', TabPanel)
    nuxtApp.vueApp.component('Accordion', Accordion)
    nuxtApp.vueApp.component('AccordionTab', AccordionTab)
    nuxtApp.vueApp.component('Paginator', Paginator)
    nuxtApp.vueApp.component('Textarea', Textarea)
    nuxtApp.vueApp.component('OverlayPanel', OverlayPanel)
    nuxtApp.vueApp.component('Sidebar', Sidebar)
    nuxtApp.vueApp.component('FileUpload', FileUpload)
    nuxtApp.vueApp.component('Carousel', Carousel)


    nuxtApp.vueApp.directive('tooltip', Tooltip)
})