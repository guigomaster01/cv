/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Develop and maintain ticketing systems to optimize transportation logistics.</li>\n<li>Implement technological solutions to enhance inventory control and merchandise management.</li>\n<li>Collaborate on the integration of online systems to facilitate transactions and management operations.</li>\n<li>Perform data analysis to identify opportunities for improving operational efficiency.</li>\n<li>Provide technical support to users, troubleshooting issues and ensuring the proper functioning of systems.</li>\n</ul>";

				const frontmatter = {"title":"System Analyst","date":"2024 - Present","url":"http://grupobelarmino.com.br","location":"Sorocaba, São Paulo","org":"I.T Departament","tags":["Technology","Developement","User Support","Case Management"]};
				const file = "C:/Users/rfrodrigues/Downloads/resume/src/pages/works/work1.md";
				const url = "/resume/works/work1";
				function rawContent() {
					return "\r\n- Develop and maintain ticketing systems to optimize transportation logistics.\r\n- Implement technological solutions to enhance inventory control and merchandise management.\r\n- Collaborate on the integration of online systems to facilitate transactions and management operations.\r\n- Perform data analysis to identify opportunities for improving operational efficiency.\r\n- Provide technical support to users, troubleshooting issues and ensuring the proper functioning of systems.";
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
