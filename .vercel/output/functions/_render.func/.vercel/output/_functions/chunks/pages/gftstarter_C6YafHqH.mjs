/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Loremipsum</p>";

				const frontmatter = {"title":"GFT Starter - Lógica de programação","org":"Dio.me","tags":["GFT","Lógica","Programação","Developement"],"url":"http://akazedu.edu/seaghi","date":2025};
				const file = "C:/Users/rfrodrigues/Downloads/resume/src/pages/certificates/gftstarter.md";
				const url = "/resume/certificates/gftstarter";
				function rawContent() {
					return "\r\nLoremipsum\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
