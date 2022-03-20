var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
init_react();
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/mw/projects/github-search-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-TDIBKZQK.css";

// route:/home/mw/projects/github-search-remix/app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "Github Search App",
  viewport: "width=device-width,initial-scale=1"
});
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/home/mw/projects/github-search-remix/app/routes/search.tsx
var search_exports = {};
__export(search_exports, {
  default: () => Search,
  loader: () => loader
});
init_react();
var import_remix5 = __toESM(require_remix());

// app/components/Pagination.tsx
init_react();
var import_fa = require("react-icons/fa");
var import_remix3 = __toESM(require_remix());
function Pagination({ page, searchTerm, totalNumberOfPages }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row py-4 text-2xl space-x-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row flex-1"
  }, "Showing pages ", page, " of ", totalNumberOfPages), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row space-x-2"
  }, page > 1 && /* @__PURE__ */ React.createElement(import_remix3.Link, {
    role: "button",
    className: "py-1 px-6 border-2 border-black rounded-md shadow-md block text-2xl font-semibold space-x-2 align-middle",
    to: {
      pathname: "/search?search=" + searchTerm + "&page=" + (page - 1)
    }
  }, /* @__PURE__ */ React.createElement(import_fa.FaChevronCircleLeft, {
    className: "inline-block align-middle"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "inline-block"
  }, "Previous")), page < totalNumberOfPages && /* @__PURE__ */ React.createElement(import_remix3.Link, {
    role: "button",
    className: "py-1 px-6 border-2 border-black rounded-md shadow-md block text-2xl font-semibold space-x-2 align-middle",
    to: {
      pathname: "/search?search=" + searchTerm + "&page=" + (Number(page) + 1)
    }
  }, /* @__PURE__ */ React.createElement("span", {
    className: "inline-block"
  }, "Next"), /* @__PURE__ */ React.createElement(import_fa.FaChevronCircleRight, {
    className: "inline-block"
  })))));
}

// app/components/SearchForm.tsx
init_react();
function SearchForm({ searchTerm }) {
  return /* @__PURE__ */ React.createElement("form", {
    method: "get",
    action: "/search",
    className: "space-y-4"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "font-bold text-2xl",
    htmlFor: "search"
  }, "Search on Github"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "search",
    name: "search",
    required: true,
    className: "bg-gray-200 appearance-none border-2 border-gray-600 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-blue-300 text-xl",
    placeholder: "Search",
    defaultValue: searchTerm
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "text-xl px-4 py-2 text-white bg-blue-500 rounded-lg font-bold"
  }, "Search"));
}

// app/components/UserProfile.tsx
init_react();
var import_fa2 = require("react-icons/fa");
function UserProfile({ item }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row space-x-2 px-4 py-6 rounded-md shadow-lg bg-white"
  }, /* @__PURE__ */ React.createElement("img", {
    src: item.user.avatar_url,
    alt: item.user.name,
    className: "inline object-cover w-20 h-20 mr-2 rounded-full"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-2"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "text-2xl font-semibold"
  }, /* @__PURE__ */ React.createElement("a", {
    href: item.user.html_url
  }, item.user.name, " ", /* @__PURE__ */ React.createElement("span", {
    className: "text-md text-gray-600"
  }, "@", item.login))), item.user.bio && /* @__PURE__ */ React.createElement("div", {
    className: "text-xl"
  }, item.user.bio), item.user.location && /* @__PURE__ */ React.createElement("div", {
    className: "text-lg font-semibold text-gray-500"
  }, item.user.location), /* @__PURE__ */ React.createElement("div", {
    className: "text-xl space-x-4 flex flex-row text-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row space-x-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-bold"
  }, "Followers:"), /* @__PURE__ */ React.createElement("div", null, item.user.followers)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row space-x-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-bold"
  }, "Following:"), /* @__PURE__ */ React.createElement("div", null, item.user.following)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row px-4 py-1"
  }, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: item.user.html_url,
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(import_fa2.FaGithub, null)))))));
}

// app/components/utils/searchUsers.ts
init_react();
var import_remix4 = __toESM(require_remix());
var API_ENDPOINT = `https://api.github.com`;
function isError(obj) {
  return obj && typeof obj === "object" && "message" in obj && "documentation_url" in obj;
}
async function searchUsers(query, page = 1) {
  const searchUrl = `${API_ENDPOINT}/search/users?q=${query}&page=${page}&per_page=10`;
  const res = await fetch(searchUrl);
  const body = await res.json();
  const searchResultsWithUser = await Promise.all(body.items.map(async (item) => {
    const res2 = await fetch(`https://api.github.com/users/${item.login}`);
    const getUserResponse = await res2.json();
    if (isError(getUserResponse)) {
      const error = getUserResponse;
      throw (0, import_remix4.json)(error.message, { status: 503 });
    }
    return {
      user: {
        avatar_url: getUserResponse.avatar_url,
        bio: getUserResponse.bio,
        followers: getUserResponse.followers,
        following: getUserResponse.following,
        html_url: getUserResponse.html_url,
        id: getUserResponse.id,
        login: getUserResponse.login,
        location: getUserResponse.location,
        name: getUserResponse.name,
        type: getUserResponse.type
      },
      html_url: item.html_url,
      id: item.id,
      login: item.login,
      type: item.type
    };
  }));
  return {
    total_count: body.total_count,
    incomplete_results: body.incomplete_results,
    items: searchResultsWithUser
  };
}

// route:/home/mw/projects/github-search-remix/app/routes/search.tsx
var loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search");
  const page = url.searchParams.get("page") ?? 1;
  if (!searchTerm) {
    throw (0, import_remix5.json)("No search term provided", { status: 400 });
  }
  const results = await searchUsers(searchTerm, Number(page));
  return {
    page,
    searchTerm,
    results
  };
};
function Search() {
  const { results, page, searchTerm } = (0, import_remix5.useLoaderData)();
  const totalNumberOfPagesPages = Math.ceil(results.total_count / 10);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col h-screen w-screen bg-gray-300 p-5 overflow-y-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-2/3 mx-auto space-y-4 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col py-4"
  }, /* @__PURE__ */ React.createElement(SearchForm, {
    searchTerm
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row py-4 text-2xl space-x-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold"
  }, "Total results:"), " ", /* @__PURE__ */ React.createElement("span", null, results.total_count)), results.items.map((item) => /* @__PURE__ */ React.createElement(UserProfile, {
    item,
    key: item.id
  })), /* @__PURE__ */ React.createElement(Pagination, {
    page,
    totalNumberOfPages: totalNumberOfPagesPages,
    searchTerm
  }))));
}

// route:/home/mw/projects/github-search-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center items-center h-screen w-screen bg-gray-300"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-4"
  }, /* @__PURE__ */ React.createElement(SearchForm, null)));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "b46e89ba", "entry": { "module": "/build/entry.client-Q7BHJBWH.js", "imports": ["/build/_shared/chunk-OBHLVBN7.js", "/build/_shared/chunk-TOAMQMCD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-DMTUS5ZS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-2H5CWH26.js", "imports": ["/build/_shared/chunk-TWCWBI4L.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/search": { "id": "routes/search", "parentId": "root", "path": "search", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/search-EYPT4GD6.js", "imports": ["/build/_shared/chunk-TWCWBI4L.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-B46E89BA.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/search": {
    id: "routes/search",
    parentId: "root",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/**
 * @remix-run/node v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
