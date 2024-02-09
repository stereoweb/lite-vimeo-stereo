/**
 *
 * The shadowDom / Intersection Observer version of Paul's concept:
 * https://github.com/paulirish/lite-youtube-embed
 *
 * A lightweight YouTube embed. Still should feel the same to the user, just
 * MUCH faster to initialize and paint.
 *
 * Thx to these as the inspiration
 *   https://storage.googleapis.com/amp-vs-non-amp/youtube-lazy.html
 *   https://autoplay-youtube-player.glitch.me/
 *
 * Once built it, I also found these (👍👍):
 *   https://github.com/ampproject/amphtml/blob/master/extensions/amp-youtube
 *   https://github.com/Daugilas/lazyYT https://github.com/vb/lazyframe
 */
export declare class LiteVimeoEmbed extends HTMLElement {
    shadowRoot: ShadowRoot;
    private iframeLoaded;
    private domRefFrame;
    private domRefImg;
    private domRefPlayButton;
    constructor();
    static get observedAttributes(): string[];
    connectedCallback(): void;
    get videoId(): string;
    set videoId(id: string);
    get customCss(): string;
    set customCss(css: string);
    get videoTitle(): string;
    set videoTitle(title: string);
    get videoPlay(): string;
    set videoPlay(name: string);
    get videoStartAt(): string;
    set videoStartAt(time: string);
    get autoLoad(): boolean;
    set autoLoad(value: boolean);
    get autoPlay(): boolean;
    set autoPlay(value: boolean);
    /**
     * Define our shadowDOM for the component
     */
    private setupDom;
    /**
     * Parse our attributes and fire up some placeholders
     */
    private setupComponent;
    /**
     * Lifecycle method that we use to listen for attribute changes to period
     * @param {*} name
     * @param {*} oldVal
     * @param {*} newVal
     */
    attributeChangedCallback(name: string, oldVal: unknown, newVal: unknown): void;
    /**
     * Inject the iframe into the component body
     */
    private addIframe;
    /**
     * Setup the placeholder image for the component
     */
    private initImagePlaceholder;
    /**
     * Setup the Intersection Observer to load the iframe when scrolled into view
     */
    private initIntersectionObserver;
    private static preconnected;
    /**
     * Add a <link rel={preload | preconnect} ...> to the head
     * @param {*} kind
     * @param {*} url
     * @param {*} as
     */
    private static addPrefetch;
    /**
     * Begin preconnecting to warm up the iframe load Since the embed's netwok
     * requests load within its iframe, preload/prefetch'ing them outside the
     * iframe will only cause double-downloads. So, the best we can do is warm up
     * a few connections to origins that are in the critical path.
     *
     * Maybe `<link rel=preload as=document>` would work, but it's unsupported:
     * http://crbug.com/593267 But TBH, I don't think it'll happen soon with Site
     * Isolation and split caches adding serious complexity.
     */
    private static warmConnections;
}
declare global {
    interface HTMLElementTagNameMap {
        'lite-vimeo': LiteVimeoEmbed;
    }
}
