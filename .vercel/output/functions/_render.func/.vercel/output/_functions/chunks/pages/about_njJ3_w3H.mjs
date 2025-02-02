/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Skilled and experienced professional with over one decade of service in various specialized units on technology and development. Adept at conducting complex aplications, coordinating, and providing leadership in high-pressure situations. Known for exceptional problem-solving abilities, strategic thinking, and dedication to upholding. Seeking opportunities to leverage expertise in a challenging environment where I can continue to make a meaningful impact.</p>";

				const frontmatter = {"title":"about","name":"Rodrigo Ferreira Rodrigues","designation":"Developer","location":"Sorocaba, SP, Brazil","pronouns":"he/him","website":"http://rodrigorodrigues.com.br"};
				const file = "C:/Users/rfrodrigues/Downloads/resume/src/pages/about/about.md";
				const url = "/resume/about/about";
				function rawContent() {
					return "\r\nSkilled and experienced professional with over one decade of service in various specialized units on technology and development. Adept at conducting complex aplications, coordinating, and providing leadership in high-pressure situations. Known for exceptional problem-solving abilities, strategic thinking, and dedication to upholding. Seeking opportunities to leverage expertise in a challenging environment where I can continue to make a meaningful impact.\r\n";
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
