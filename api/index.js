var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
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
var tailwind_default = "/build/_assets/tailwind-JFNIJA3D.css";

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
var import_remix6 = __toESM(require_remix());

// app/components/Pagination.tsx
init_react();
var import_fa = require("react-icons/fa");
var import_remix3 = __toESM(require_remix());
function Pagination({ page, searchTerm, totalNumberOfPages }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:flex-row py-4 text-2xl space-x-2"
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
var import_remix4 = __toESM(require_remix());
function SearchForm({ searchTerm }) {
  const transition = (0, import_remix4.useTransition)();
  const isLoading = transition.state === "submitting";
  return /* @__PURE__ */ React.createElement(import_remix4.Form, {
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
    disabled: isLoading,
    type: "submit",
    className: "text-xl px-4 py-2 text-white bg-blue-500 rounded-lg font-bold w-full sm:w-auto"
  }, isLoading ? "Loading..." : "Search"));
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
    className: "text-xl space-y-2 md:space-y-0 md:space-x-4 flex flex-col  md:flex-row text-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row space-x-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-bold"
  }, "Followers:"), /* @__PURE__ */ React.createElement("div", null, item.user.followers)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row space-x-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-bold"
  }, "Following:"), /* @__PURE__ */ React.createElement("div", null, item.user.following)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row "
  }, /* @__PURE__ */ React.createElement("a", {
    className: "block",
    target: "_blank",
    href: item.user.html_url,
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(import_fa2.FaGithub, {
    className: "inline-block"
  }), " ", /* @__PURE__ */ React.createElement("span", {
    className: "inline-block"
  }, " GitHub Profile")))))));
}

// app/components/utils/searchUsers.ts
init_react();
var import_remix5 = __toESM(require_remix());
var API_ENDPOINT = `https://api.github.com`;
function isError(obj) {
  return obj && typeof obj === "object" && "message" in obj && "documentation_url" in obj;
}
async function searchUsers(query, page = 1) {
  const searchUrl = `${API_ENDPOINT}/search/users?q=${query}&page=${page}&per_page=10`;
  const res = await fetch(searchUrl, __spreadValues({}, process.env.GITHUB_PAT && {
    headers: {
      Authorization: "Basic " + process.env.GITHUB_PAT
    }
  }));
  const body = await res.json();
  const searchResultsWithUser = await Promise.all(body.items.map(async (item) => {
    const res2 = await fetch(`https://api.github.com/users/${item.login}`, __spreadValues({}, process.env.GITHUB_PAT && {
      headers: {
        Authorization: "Basic " + process.env.GITHUB_PAT
      }
    }));
    const getUserResponse = await res2.json();
    if (isError(getUserResponse)) {
      const error = getUserResponse;
      throw (0, import_remix5.json)(error.message, { status: 503 });
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
    throw (0, import_remix6.json)("No search term provided", { status: 400 });
  }
  const results = await searchUsers(searchTerm, Number(page));
  return {
    page,
    searchTerm,
    results
  };
};
function Search() {
  const { results, page, searchTerm } = (0, import_remix6.useLoaderData)();
  const totalNumberOfPagesPages = Math.ceil(results.total_count / 10);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col h-screen w-screen bg-gray-300 p-5 overflow-y-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col max-w-full w-[50rem] mx-auto space-y-4 "
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
    className: "flex flex-col max-w-full p-4 space-y-4"
  }, /* @__PURE__ */ React.createElement(SearchForm, null)));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "bc89947f", "entry": { "module": "/build/entry.client-3MYGPHHB.js", "imports": ["/build/_shared/chunk-IQGC554W.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ABDSOLG4.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-6OWDGOEC.js", "imports": ["/build/_shared/chunk-7C4GXSYE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/search": { "id": "routes/search", "parentId": "root", "path": "search", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/search-ISQLRVVK.js", "imports": ["/build/_shared/chunk-7C4GXSYE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-BC89947F.js" };

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
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9ob21lL213L3Byb2plY3RzL2dpdGh1Yi1zZWFyY2gtcmVtaXgvYXBwL3Jvb3QudHN4IiwgInJvdXRlOi9ob21lL213L3Byb2plY3RzL2dpdGh1Yi1zZWFyY2gtcmVtaXgvYXBwL3JvdXRlcy9zZWFyY2gudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlYXJjaEZvcm0udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1VzZXJQcm9maWxlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91dGlscy9zZWFyY2hVc2Vycy50cyIsICJyb3V0ZTovaG9tZS9tdy9wcm9qZWN0cy9naXRodWItc2VhcmNoLXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvbXcvcHJvamVjdHMvZ2l0aHViLXNlYXJjaC1yZW1peC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9tdy9wcm9qZWN0cy9naXRodWItc2VhcmNoLXJlbWl4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9tdy9wcm9qZWN0cy9naXRodWItc2VhcmNoLXJlbWl4L2FwcC9yb3V0ZXMvc2VhcmNoLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9tdy9wcm9qZWN0cy9naXRodWItc2VhcmNoLXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9zZWFyY2hcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NlYXJjaFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzZWFyY2hcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFpbHdpbmQuY3NzJztcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6ICd1dGYtOCcsXG4gIHRpdGxlOiAnR2l0aHViIFNlYXJjaCBBcHAnLFxuICB2aWV3cG9ydDogJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICd+L2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICd+L2NvbXBvbmVudHMvU2VhcmNoRm9ybSc7XG5pbXBvcnQgeyBHaXRIdWJTZWFyY2hSZXN1bHQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cyc7XG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnfi9jb21wb25lbnRzL1VzZXJQcm9maWxlJztcbmltcG9ydCBzZWFyY2hVc2VycyBmcm9tICd+L2NvbXBvbmVudHMvdXRpbHMvc2VhcmNoVXNlcnMnO1xuXG4vLyBsb2FkZXIgZm9yIGZldGNoaW5nIHRoZSByZXN1bHRzIG9uIHRoZSBiYWNrZW5kXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgLy8gZ2V0IHNlYXJjaCB0ZXJtIGZyb20gdXJsIGFuZCBwYWdlXG4gIGNvbnN0IHNlYXJjaFRlcm0gPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnc2VhcmNoJyk7XG4gIGNvbnN0IHBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncGFnZScpID8/IDE7IC8vIGRlZmF1bHQgdG8gcGFnZSAxXG4gIGlmICghc2VhcmNoVGVybSkge1xuICAgIHRocm93IGpzb24oJ05vIHNlYXJjaCB0ZXJtIHByb3ZpZGVkJywgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuICBjb25zdCByZXN1bHRzID0gYXdhaXQgc2VhcmNoVXNlcnMoc2VhcmNoVGVybSwgTnVtYmVyKHBhZ2UpKTtcblxuICByZXR1cm4ge1xuICAgIHBhZ2U6IHBhZ2UsXG4gICAgc2VhcmNoVGVybSxcbiAgICByZXN1bHRzLFxuICB9O1xufTtcblxudHlwZSBMb2FkZXJEYXRhVHlwZSA9IHtcbiAgcGFnZTogbnVtYmVyO1xuICBzZWFyY2hUZXJtOiBzdHJpbmc7XG4gIHJlc3VsdHM6IEdpdEh1YlNlYXJjaFJlc3VsdDtcbn07XG5cbi8qKlxuICpcbiAqIFBhZ2UgZm9yIHNlYXJjaGluZyBhbmQgZGlzcGxheWluZyBzZWFyY2ggcmVzdWx0cyBvZiBHaXRIdWIgdXNlcnNcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgY29uc3QgeyByZXN1bHRzLCBwYWdlLCBzZWFyY2hUZXJtIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGFUeXBlPigpO1xuXG4gIC8vIGNhbGN1bGF0ZSB0aGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gIGNvbnN0IHRvdGFsTnVtYmVyT2ZQYWdlc1BhZ2VzID0gTWF0aC5jZWlsKHJlc3VsdHMudG90YWxfY291bnQgLyAxMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaC1zY3JlZW4gdy1zY3JlZW4gYmctZ3JheS0zMDAgcC01IG92ZXJmbG93LXktYXV0byc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG1heC13LWZ1bGwgdy1bNTByZW1dIG14LWF1dG8gc3BhY2UteS00ICc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcHktNCc+XG4gICAgICAgICAgICA8U2VhcmNoRm9ybSBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHB5LTQgdGV4dC0yeGwgc3BhY2UteC0yJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+VG90YWwgcmVzdWx0czo8L3NwYW4+IDxzcGFuPntyZXN1bHRzLnRvdGFsX2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cmVzdWx0cy5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxVc2VyUHJvZmlsZSBpdGVtPXtpdGVtfSBrZXk9e2l0ZW0uaWR9IC8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICA8UGFnaW5hdGlvbiBwYWdlPXtwYWdlfSB0b3RhbE51bWJlck9mUGFnZXM9e3RvdGFsTnVtYmVyT2ZQYWdlc1BhZ2VzfSBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEZhQ2hldnJvbkNpcmNsZUxlZnQsIEZhQ2hldnJvbkNpcmNsZVJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGFnZTogbnVtYmVyO1xuICBzZWFyY2hUZXJtOiBzdHJpbmc7XG4gIHRvdGFsTnVtYmVyT2ZQYWdlczogbnVtYmVyO1xufTtcblxuLyoqXG4gKlxuICogU2hvdyBwYWdlcyBmb3IgR2l0aHViIHNlYXJjaCByZXN1bHRzXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyBwYWdlLCBzZWFyY2hUZXJtLCB0b3RhbE51bWJlck9mUGFnZXMgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgcHktNCB0ZXh0LTJ4bCBzcGFjZS14LTInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBmbGV4LTEnPlxuICAgICAgICAgIFNob3dpbmcgcGFnZXMge3BhZ2V9IG9mIHt0b3RhbE51bWJlck9mUGFnZXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBzcGFjZS14LTInPlxuICAgICAgICAgIHtwYWdlID4gMSAmJiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICByb2xlPXsnYnV0dG9uJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweS0xIHB4LTYgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgc2hhZG93LW1kIGJsb2NrIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgc3BhY2UteC0yIGFsaWduLW1pZGRsZSdcbiAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9zZWFyY2g/c2VhcmNoPScgKyBzZWFyY2hUZXJtICsgJyZwYWdlPScgKyAocGFnZSAtIDEpLFxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPEZhQ2hldnJvbkNpcmNsZUxlZnQgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlJyAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cGFnZSA8IHRvdGFsTnVtYmVyT2ZQYWdlcyAmJiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICByb2xlPXsnYnV0dG9uJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweS0xIHB4LTYgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgc2hhZG93LW1kIGJsb2NrIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgc3BhY2UteC0yIGFsaWduLW1pZGRsZSdcbiAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9zZWFyY2g/c2VhcmNoPScgKyBzZWFyY2hUZXJtICsgJyZwYWdlPScgKyAoTnVtYmVyKHBhZ2UpICsgMSksXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgPEZhQ2hldnJvbkNpcmNsZVJpZ2h0IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgRm9ybSwgdXNlVHJhbnNpdGlvbiB9IGZyb20gJ3JlbWl4JztcblxudHlwZSBQcm9wcyA9IHtcbiAgc2VhcmNoVGVybT86IHN0cmluZztcbn07XG5cbi8qKlxuICpcbiAqIEZvcm0gZm9yIHNlYXJjaGluZyBHaXRIdWIgdXNlcnNcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZvcm0oeyBzZWFyY2hUZXJtIH06IFByb3BzKSB7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG5cbiAgY29uc3QgaXNMb2FkaW5nID0gdHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gbWV0aG9kPSdnZXQnIGFjdGlvbj0nL3NlYXJjaCcgY2xhc3NOYW1lPSdzcGFjZS15LTQnPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtMnhsJyBodG1sRm9yPSdzZWFyY2gnPlxuICAgICAgICBTZWFyY2ggb24gR2l0aHViXG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgIGlkPSdzZWFyY2gnXG4gICAgICAgIG5hbWU9J3NlYXJjaCdcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTIwMCBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktNjAwIHJvdW5kZWQtbWQgdy1mdWxsIHB5LTIgcHgtNCB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWJsdWUtMzAwIHRleHQteGwnXG4gICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2gnXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17c2VhcmNoVGVybX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXhsIHB4LTQgcHktMiB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbGcgZm9udC1ib2xkIHctZnVsbCBzbTp3LWF1dG8nPlxuICAgICAgICB7aXNMb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ1NlYXJjaCd9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgR2l0SHViU2VhcmNoUmVzdWx0SXRlbSB9IGZyb20gJy4vU2VhcmNoUmVzdWx0cyc7XG5pbXBvcnQgeyBGYUdpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxudHlwZSBQcm9wcyA9IHtcbiAgaXRlbTogR2l0SHViU2VhcmNoUmVzdWx0SXRlbTtcbn07XG5cbi8qKlxuICpcbiAqIEEgY29tcG9uZW50IGZvciBkaXNwbGF5aW5nIGEgc2luZ2xlIHVzZXIgcHJvZmlsZSBmcm9tIEdpdGh1YiBTZWFyY2ggUmVzdWx0c1xuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclByb2ZpbGUoeyBpdGVtIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHNwYWNlLXgtMiBweC00IHB5LTYgcm91bmRlZC1tZCBzaGFkb3ctbGcgYmctd2hpdGUnPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtpdGVtLnVzZXIuYXZhdGFyX3VybH1cbiAgICAgICAgICBhbHQ9e2l0ZW0udXNlci5uYW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lIG9iamVjdC1jb3ZlciB3LTIwIGgtMjAgbXItMiByb3VuZGVkLWZ1bGwnXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHNwYWNlLXktMic+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1zZW1pYm9sZCc+XG4gICAgICAgICAgICA8YSBocmVmPXtpdGVtLnVzZXIuaHRtbF91cmx9PlxuICAgICAgICAgICAgICB7aXRlbS51c2VyLm5hbWV9IDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1tZCB0ZXh0LWdyYXktNjAwJz5Ae2l0ZW0ubG9naW59PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAge2l0ZW0udXNlci5iaW8gJiYgPGRpdiBjbGFzc05hbWU9J3RleHQteGwnPntpdGVtLnVzZXIuYmlvfTwvZGl2Pn1cbiAgICAgICAgICB7aXRlbS51c2VyLmxvY2F0aW9uICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTUwMCc+e2l0ZW0udXNlci5sb2NhdGlvbn08L2Rpdj59XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQteGwgc3BhY2UteS0yIG1kOnNwYWNlLXktMCBtZDpzcGFjZS14LTQgZmxleCBmbGV4LWNvbCAgbWQ6ZmxleC1yb3cgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgc3BhY2UteC0yJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+Rm9sbG93ZXJzOjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PntpdGVtLnVzZXIuZm9sbG93ZXJzfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBzcGFjZS14LTInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udC1ib2xkJz5Gb2xsb3dpbmc6PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+e2l0ZW0udXNlci5mb2xsb3dpbmd9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93ICc+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nYmxvY2snIHRhcmdldD0nX2JsYW5rJyBocmVmPXtpdGVtLnVzZXIuaHRtbF91cmx9IHJlbD0nbm9yZWZlcnJlcic+XG4gICAgICAgICAgICAgICAgPEZhR2l0aHViIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPiA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+IEdpdEh1YiBQcm9maWxlPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBqc29uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgR2l0SHViU2VhcmNoUmVzdWx0LCBHaXRIdWJTZWFyY2hSZXN1bHRJdGVtLCBHaXRIdWJVc2VyIH0gZnJvbSAnLi4vU2VhcmNoUmVzdWx0cyc7XG5cbmV4cG9ydCBjb25zdCBBUElfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbWA7XG5cbnR5cGUgRXJyb3IgPSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgZG9jdW1lbnRhdGlvbl91cmw6IHN0cmluZztcbn07XG5cbi8qKlxuICpcbiAqIEEgY3VzdG9tIHR5cGUgZ3VhcmQgdG8gY2hlY2sgaWYgdGhlIHJldHVybmVkIG9iamVjdCBpcyBhbiBlcnJvclxuICpcbiAqL1xuZnVuY3Rpb24gaXNFcnJvcihvYmo6IGFueSk6IG9iaiBpcyBFcnJvciB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgJ21lc3NhZ2UnIGluIG9iaiAmJiAnZG9jdW1lbnRhdGlvbl91cmwnIGluIG9iajtcbn1cblxuLyoqXG4gKlxuICogU2VhcmNoIHVzZXJzIGFuZCBmZXRjaCB0aGVpciB1c2VyIHByb2ZpbGVzIGZyb20gR2l0aHViLCByZXR1cm4gYSBsaW1pdGVkXG4gKiBudW1iZXIgb2YgdXNlcnMgZGV0YWlscy5cbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFVzZXJzKHF1ZXJ5OiBzdHJpbmcsIHBhZ2UgPSAxKSB7XG4gIGNvbnN0IHNlYXJjaFVybCA9IGAke0FQSV9FTkRQT0lOVH0vc2VhcmNoL3VzZXJzP3E9JHtxdWVyeX0mcGFnZT0ke3BhZ2V9JnBlcl9wYWdlPTEwYDtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goc2VhcmNoVXJsLCB7XG4gICAgLi4uKHByb2Nlc3MuZW52LkdJVEhVQl9QQVQgJiYge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiAnQmFzaWMgJyArIHByb2Nlc3MuZW52LkdJVEhVQl9QQVQsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KTtcbiAgY29uc3QgYm9keSA9IChhd2FpdCByZXMuanNvbigpKSBhcyBHaXRIdWJTZWFyY2hSZXN1bHQ7XG4gIGNvbnN0IHNlYXJjaFJlc3VsdHNXaXRoVXNlciA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGJvZHkuaXRlbXMubWFwKGFzeW5jIChpdGVtKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke2l0ZW0ubG9naW59YCwge1xuICAgICAgICAuLi4ocHJvY2Vzcy5lbnYuR0lUSFVCX1BBVCAmJiB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0Jhc2ljICcgKyBwcm9jZXNzLmVudi5HSVRIVUJfUEFULFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBnZXRVc2VyUmVzcG9uc2UgPSAoYXdhaXQgcmVzLmpzb24oKSkgYXMgR2l0SHViVXNlciB8IEVycm9yO1xuICAgICAgaWYgKGlzRXJyb3IoZ2V0VXNlclJlc3BvbnNlKSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IGdldFVzZXJSZXNwb25zZSBhcyBFcnJvcjtcbiAgICAgICAgdGhyb3cganNvbihlcnJvci5tZXNzYWdlLCB7IHN0YXR1czogNTAzIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIGF2YXRhcl91cmw6IGdldFVzZXJSZXNwb25zZS5hdmF0YXJfdXJsLFxuICAgICAgICAgIGJpbzogZ2V0VXNlclJlc3BvbnNlLmJpbyxcbiAgICAgICAgICBmb2xsb3dlcnM6IGdldFVzZXJSZXNwb25zZS5mb2xsb3dlcnMsXG4gICAgICAgICAgZm9sbG93aW5nOiBnZXRVc2VyUmVzcG9uc2UuZm9sbG93aW5nLFxuICAgICAgICAgIGh0bWxfdXJsOiBnZXRVc2VyUmVzcG9uc2UuaHRtbF91cmwsXG4gICAgICAgICAgaWQ6IGdldFVzZXJSZXNwb25zZS5pZCxcbiAgICAgICAgICBsb2dpbjogZ2V0VXNlclJlc3BvbnNlLmxvZ2luLFxuICAgICAgICAgIGxvY2F0aW9uOiBnZXRVc2VyUmVzcG9uc2UubG9jYXRpb24sXG4gICAgICAgICAgbmFtZTogZ2V0VXNlclJlc3BvbnNlLm5hbWUsXG4gICAgICAgICAgdHlwZTogZ2V0VXNlclJlc3BvbnNlLnR5cGUsXG4gICAgICAgIH0sXG4gICAgICAgIGh0bWxfdXJsOiBpdGVtLmh0bWxfdXJsLFxuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgbG9naW46IGl0ZW0ubG9naW4sXG4gICAgICAgIHR5cGU6IGl0ZW0udHlwZSxcbiAgICAgIH0gYXMgR2l0SHViU2VhcmNoUmVzdWx0SXRlbTtcbiAgICB9KSxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHRvdGFsX2NvdW50OiBib2R5LnRvdGFsX2NvdW50LFxuICAgIGluY29tcGxldGVfcmVzdWx0czogYm9keS5pbmNvbXBsZXRlX3Jlc3VsdHMsXG4gICAgaXRlbXM6IHNlYXJjaFJlc3VsdHNXaXRoVXNlcixcbiAgfTtcbn1cbiIsICJpbXBvcnQgU2VhcmNoRm9ybSBmcm9tICd+L2NvbXBvbmVudHMvU2VhcmNoRm9ybSc7XG5cbi8qKlxuICpcbiAqIFRoZSBIb21lcGFnZSBvZiB0aGUgV2ViIEFwcCwgc2hvdyBzZWFyY2ggZm9ybVxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuIGJnLWdyYXktMzAwJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG1heC13LWZ1bGwgcC00IHNwYWNlLXktNCc+XG4gICAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidiYzg5OTQ3ZicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtM01ZR1BISEIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUlRR0M1NTRXLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1BQkRTT0xHNC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LTZPV0RHT0VDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03QzRHWFNZRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2VhcmNoJzp7J2lkJzoncm91dGVzL3NlYXJjaCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZWFyY2gnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2VhcmNoLUlTUUxSVlZLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03QzRHWFNZRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtQkM4OTk0N0YuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEs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
