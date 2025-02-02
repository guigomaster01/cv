/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"System Development","location":"ETEC Fernando Prestes, Sorocaba, SP, Brazil","url":"https://etecfernandoprestes.cps.sp.gov.br/","institute":"ETEC Fernando Prestes","date":"2023-2024","tags":["Software Development","Database Management","Agile Methodologies","Problem-Solving","Entrepreneurial Mindset"]};
				const file = "C:/Users/rfrodrigues/Downloads/resume/src/pages/studies/studie2.md";
				const url = "/resume/studies/studie2";
				function rawContent() {
					return "";
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
