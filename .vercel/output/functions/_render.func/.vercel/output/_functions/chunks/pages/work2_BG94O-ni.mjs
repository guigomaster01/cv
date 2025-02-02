/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Assist in the development and maintenance of ticketing systems to support transportation logistics.</li>\n<li>Support the implementation of technological solutions for inventory control and merchandise management.</li>\n<li>Contribute to the integration of online systems to improve transactions and management operations.</li>\n<li>Help analyze data to identify potential efficiency improvements in operations.</li>\n<li>Provide technical assistance to users, troubleshooting basic system issues and ensuring smooth operation.</li>\n</ul>";

				const frontmatter = {"title":"Jr. System Analyst","date":"2023 - 2024","url":"http://grupobelarmino.com.br","location":"Sorocaba, São Paulo","org":"IT Departament","tags":["Technology","Developement","User Support","Case Management"]};
				const file = "C:/Users/rfrodrigues/Downloads/resume/src/pages/works/work2.md";
				const url = "/resume/works/work2";
				function rawContent() {
					return "\r\n- Assist in the development and maintenance of ticketing systems to support transportation logistics.\r\n- Support the implementation of technological solutions for inventory control and merchandise management.\r\n- Contribute to the integration of online systems to improve transactions and management operations.\r\n- Help analyze data to identify potential efficiency improvements in operations.\r\n- Provide technical assistance to users, troubleshooting basic system issues and ensuring smooth operation.\r\n";
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
