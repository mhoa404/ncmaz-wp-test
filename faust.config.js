import { setConfig } from "@faustwp/core";
import templates from "./src/wp-templates";
import possibleTypes from "./possibleTypes.json";

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  templates,
  possibleTypes,
  usePersistedQueries: true,

  // ❗ Thêm 2 dòng QUAN TRỌNG này:
  wpUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL,
  graphqlEndpoint: process.env.NEXT_PUBLIC_WORDPRESS_URL + "/graphql",

  apiBasePath: "/api/faust",
});
