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
var tailwind_default = "/build/_assets/tailwind-JEHZFEBX.css";

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
    className: "flex flex-col w-[50rem] mx-auto space-y-4 "
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
var assets_manifest_default = { "version": "127bc30c", "entry": { "module": "/build/entry.client-I6NMO43N.js", "imports": ["/build/_shared/chunk-VJQZICAO.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-26MF6YAC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LXTI6UXX.js", "imports": ["/build/_shared/chunk-HHOLXRES.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/search": { "id": "routes/search", "parentId": "root", "path": "search", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/search-IODZHA2Y.js", "imports": ["/build/_shared/chunk-HHOLXRES.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-127BC30C.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9ob21lL213L3Byb2plY3RzL2dpdGh1Yi1zZWFyY2gtcmVtaXgvYXBwL3Jvb3QudHN4IiwgInJvdXRlOi9ob21lL213L3Byb2plY3RzL2dpdGh1Yi1zZWFyY2gtcmVtaXgvYXBwL3JvdXRlcy9zZWFyY2gudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlYXJjaEZvcm0udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1VzZXJQcm9maWxlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91dGlscy9zZWFyY2hVc2Vycy50cyIsICJyb3V0ZTovaG9tZS9tdy9wcm9qZWN0cy9naXRodWItc2VhcmNoLXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvbXcvcHJvamVjdHMvZ2l0aHViLXNlYXJjaC1yZW1peC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9tdy9wcm9qZWN0cy9naXRodWItc2VhcmNoLXJlbWl4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9tdy9wcm9qZWN0cy9naXRodWItc2VhcmNoLXJlbWl4L2FwcC9yb3V0ZXMvc2VhcmNoLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9tdy9wcm9qZWN0cy9naXRodWItc2VhcmNoLXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9zZWFyY2hcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NlYXJjaFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzZWFyY2hcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFpbHdpbmQuY3NzJztcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6ICd1dGYtOCcsXG4gIHRpdGxlOiAnR2l0aHViIFNlYXJjaCBBcHAnLFxuICB2aWV3cG9ydDogJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICd+L2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICd+L2NvbXBvbmVudHMvU2VhcmNoRm9ybSc7XG5pbXBvcnQgeyBHaXRIdWJTZWFyY2hSZXN1bHQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cyc7XG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnfi9jb21wb25lbnRzL1VzZXJQcm9maWxlJztcbmltcG9ydCBzZWFyY2hVc2VycyBmcm9tICd+L2NvbXBvbmVudHMvdXRpbHMvc2VhcmNoVXNlcnMnO1xuXG4vLyBsb2FkZXIgZm9yIGZldGNoaW5nIHRoZSByZXN1bHRzIG9uIHRoZSBiYWNrZW5kXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgLy8gZ2V0IHNlYXJjaCB0ZXJtIGZyb20gdXJsIGFuZCBwYWdlXG4gIGNvbnN0IHNlYXJjaFRlcm0gPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnc2VhcmNoJyk7XG4gIGNvbnN0IHBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncGFnZScpID8/IDE7IC8vIGRlZmF1bHQgdG8gcGFnZSAxXG4gIGlmICghc2VhcmNoVGVybSkge1xuICAgIHRocm93IGpzb24oJ05vIHNlYXJjaCB0ZXJtIHByb3ZpZGVkJywgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuICBjb25zdCByZXN1bHRzID0gYXdhaXQgc2VhcmNoVXNlcnMoc2VhcmNoVGVybSwgTnVtYmVyKHBhZ2UpKTtcblxuICByZXR1cm4ge1xuICAgIHBhZ2U6IHBhZ2UsXG4gICAgc2VhcmNoVGVybSxcbiAgICByZXN1bHRzLFxuICB9O1xufTtcblxudHlwZSBMb2FkZXJEYXRhVHlwZSA9IHtcbiAgcGFnZTogbnVtYmVyO1xuICBzZWFyY2hUZXJtOiBzdHJpbmc7XG4gIHJlc3VsdHM6IEdpdEh1YlNlYXJjaFJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgY29uc3QgeyByZXN1bHRzLCBwYWdlLCBzZWFyY2hUZXJtIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGFUeXBlPigpO1xuXG4gIC8vIGNhbGN1bGF0ZSB0aGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gIGNvbnN0IHRvdGFsTnVtYmVyT2ZQYWdlc1BhZ2VzID0gTWF0aC5jZWlsKHJlc3VsdHMudG90YWxfY291bnQgLyAxMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaC1zY3JlZW4gdy1zY3JlZW4gYmctZ3JheS0zMDAgcC01IG92ZXJmbG93LXktYXV0byc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctWzUwcmVtXSBteC1hdXRvIHNwYWNlLXktNCAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHB5LTQnPlxuICAgICAgICAgICAgPFNlYXJjaEZvcm0gc2VhcmNoVGVybT17c2VhcmNoVGVybX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBweS00IHRleHQtMnhsIHNwYWNlLXgtMic+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPlRvdGFsIHJlc3VsdHM6PC9zcGFuPiA8c3Bhbj57cmVzdWx0cy50b3RhbF9jb3VudH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Jlc3VsdHMuaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8VXNlclByb2ZpbGUgaXRlbT17aXRlbX0ga2V5PXtpdGVtLmlkfSAvPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgICAgPFBhZ2luYXRpb24gcGFnZT17cGFnZX0gdG90YWxOdW1iZXJPZlBhZ2VzPXt0b3RhbE51bWJlck9mUGFnZXNQYWdlc30gc2VhcmNoVGVybT17c2VhcmNoVGVybX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBGYUNoZXZyb25DaXJjbGVMZWZ0LCBGYUNoZXZyb25DaXJjbGVSaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgc2VhcmNoVGVybTogc3RyaW5nO1xuICB0b3RhbE51bWJlck9mUGFnZXM6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyBwYWdlLCBzZWFyY2hUZXJtLCB0b3RhbE51bWJlck9mUGFnZXMgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgcHktNCB0ZXh0LTJ4bCBzcGFjZS14LTInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBmbGV4LTEnPlxuICAgICAgICAgIFNob3dpbmcgcGFnZXMge3BhZ2V9IG9mIHt0b3RhbE51bWJlck9mUGFnZXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBzcGFjZS14LTInPlxuICAgICAgICAgIHtwYWdlID4gMSAmJiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICByb2xlPXsnYnV0dG9uJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweS0xIHB4LTYgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgc2hhZG93LW1kIGJsb2NrIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgc3BhY2UteC0yIGFsaWduLW1pZGRsZSdcbiAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9zZWFyY2g/c2VhcmNoPScgKyBzZWFyY2hUZXJtICsgJyZwYWdlPScgKyAocGFnZSAtIDEpLFxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPEZhQ2hldnJvbkNpcmNsZUxlZnQgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlJyAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cGFnZSA8IHRvdGFsTnVtYmVyT2ZQYWdlcyAmJiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICByb2xlPXsnYnV0dG9uJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweS0xIHB4LTYgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgc2hhZG93LW1kIGJsb2NrIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgc3BhY2UteC0yIGFsaWduLW1pZGRsZSdcbiAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9zZWFyY2g/c2VhcmNoPScgKyBzZWFyY2hUZXJtICsgJyZwYWdlPScgKyAoTnVtYmVyKHBhZ2UpICsgMSksXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgPEZhQ2hldnJvbkNpcmNsZVJpZ2h0IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAidHlwZSBQcm9wcyA9IHtcbiAgc2VhcmNoVGVybT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZvcm0oeyBzZWFyY2hUZXJtIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gbWV0aG9kPSdnZXQnIGFjdGlvbj0nL3NlYXJjaCcgY2xhc3NOYW1lPSdzcGFjZS15LTQnPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtMnhsJyBodG1sRm9yPSdzZWFyY2gnPlxuICAgICAgICBTZWFyY2ggb24gR2l0aHViXG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgIGlkPSdzZWFyY2gnXG4gICAgICAgIG5hbWU9J3NlYXJjaCdcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTIwMCBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktNjAwIHJvdW5kZWQtbWQgdy1mdWxsIHB5LTIgcHgtNCB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWJsdWUtMzAwIHRleHQteGwnXG4gICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2gnXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17c2VhcmNoVGVybX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSd0ZXh0LXhsIHB4LTQgcHktMiB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbGcgZm9udC1ib2xkJz5cbiAgICAgICAgU2VhcmNoXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgR2l0SHViU2VhcmNoUmVzdWx0SXRlbSB9IGZyb20gJy4vU2VhcmNoUmVzdWx0cyc7XG5pbXBvcnQgeyBGYUdpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxudHlwZSBQcm9wcyA9IHtcbiAgaXRlbTogR2l0SHViU2VhcmNoUmVzdWx0SXRlbTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQcm9maWxlKHsgaXRlbSB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBzcGFjZS14LTIgcHgtNCBweS02IHJvdW5kZWQtbWQgc2hhZG93LWxnIGJnLXdoaXRlJz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17aXRlbS51c2VyLmF2YXRhcl91cmx9XG4gICAgICAgICAgYWx0PXtpdGVtLnVzZXIubmFtZX1cbiAgICAgICAgICBjbGFzc05hbWU9J2lubGluZSBvYmplY3QtY292ZXIgdy0yMCBoLTIwIG1yLTIgcm91bmRlZC1mdWxsJ1xuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBzcGFjZS15LTInPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtc2VtaWJvbGQnPlxuICAgICAgICAgICAgPGEgaHJlZj17aXRlbS51c2VyLmh0bWxfdXJsfT5cbiAgICAgICAgICAgICAge2l0ZW0udXNlci5uYW1lfSA8c3BhbiBjbGFzc05hbWU9J3RleHQtbWQgdGV4dC1ncmF5LTYwMCc+QHtpdGVtLmxvZ2lufTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIHtpdGVtLnVzZXIuYmlvICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXhsJz57aXRlbS51c2VyLmJpb308L2Rpdj59XG4gICAgICAgICAge2l0ZW0udXNlci5sb2NhdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS01MDAnPntpdGVtLnVzZXIubG9jYXRpb259PC9kaXY+fVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXhsIHNwYWNlLXgtNCBmbGV4IGZsZXgtcm93IHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHNwYWNlLXgtMic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LWJvbGQnPkZvbGxvd2Vyczo8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj57aXRlbS51c2VyLmZvbGxvd2Vyc308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgc3BhY2UteC0yJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+Rm9sbG93aW5nOjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PntpdGVtLnVzZXIuZm9sbG93aW5nfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBweC00IHB5LTEnPlxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj17aXRlbS51c2VyLmh0bWxfdXJsfSByZWw9J25vcmVmZXJyZXInPlxuICAgICAgICAgICAgICAgIDxGYUdpdGh1YiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBqc29uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgR2l0SHViU2VhcmNoUmVzdWx0LCBHaXRIdWJTZWFyY2hSZXN1bHRJdGVtLCBHaXRIdWJVc2VyIH0gZnJvbSAnLi4vU2VhcmNoUmVzdWx0cyc7XG5cbmV4cG9ydCBjb25zdCBBUElfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbWA7XG5cbnR5cGUgRXJyb3IgPSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgZG9jdW1lbnRhdGlvbl91cmw6IHN0cmluZztcbn07XG5cbmZ1bmN0aW9uIGlzRXJyb3Iob2JqOiBhbnkpOiBvYmogaXMgRXJyb3Ige1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICdtZXNzYWdlJyBpbiBvYmogJiYgJ2RvY3VtZW50YXRpb25fdXJsJyBpbiBvYmo7XG59XG5cbi8qKlxuICpcbiAqIFNlYXJjaCB1c2VycyBhbmQgZmV0Y2ggdGhlaXIgdXNlciBwcm9maWxlcyBmcm9tIEdpdGh1YiwgcmV0dXJuIGEgbGltaXRlZFxuICogbnVtYmVyIG9mIHVzZXJzIGRldGFpbHMuXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWFyY2hVc2VycyhxdWVyeTogc3RyaW5nLCBwYWdlID0gMSkge1xuICBjb25zdCBzZWFyY2hVcmwgPSBgJHtBUElfRU5EUE9JTlR9L3NlYXJjaC91c2Vycz9xPSR7cXVlcnl9JnBhZ2U9JHtwYWdlfSZwZXJfcGFnZT0xMGA7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHNlYXJjaFVybCk7XG4gIGNvbnN0IGJvZHkgPSAoYXdhaXQgcmVzLmpzb24oKSkgYXMgR2l0SHViU2VhcmNoUmVzdWx0O1xuICBjb25zdCBzZWFyY2hSZXN1bHRzV2l0aFVzZXIgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBib2R5Lml0ZW1zLm1hcChhc3luYyAoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtpdGVtLmxvZ2lufWApO1xuICAgICAgY29uc3QgZ2V0VXNlclJlc3BvbnNlID0gKGF3YWl0IHJlcy5qc29uKCkpIGFzIEdpdEh1YlVzZXIgfCBFcnJvcjtcbiAgICAgIGlmIChpc0Vycm9yKGdldFVzZXJSZXNwb25zZSkpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBnZXRVc2VyUmVzcG9uc2UgYXMgRXJyb3I7XG4gICAgICAgIHRocm93IGpzb24oZXJyb3IubWVzc2FnZSwgeyBzdGF0dXM6IDUwMyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBhdmF0YXJfdXJsOiBnZXRVc2VyUmVzcG9uc2UuYXZhdGFyX3VybCxcbiAgICAgICAgICBiaW86IGdldFVzZXJSZXNwb25zZS5iaW8sXG4gICAgICAgICAgZm9sbG93ZXJzOiBnZXRVc2VyUmVzcG9uc2UuZm9sbG93ZXJzLFxuICAgICAgICAgIGZvbGxvd2luZzogZ2V0VXNlclJlc3BvbnNlLmZvbGxvd2luZyxcbiAgICAgICAgICBodG1sX3VybDogZ2V0VXNlclJlc3BvbnNlLmh0bWxfdXJsLFxuICAgICAgICAgIGlkOiBnZXRVc2VyUmVzcG9uc2UuaWQsXG4gICAgICAgICAgbG9naW46IGdldFVzZXJSZXNwb25zZS5sb2dpbixcbiAgICAgICAgICBsb2NhdGlvbjogZ2V0VXNlclJlc3BvbnNlLmxvY2F0aW9uLFxuICAgICAgICAgIG5hbWU6IGdldFVzZXJSZXNwb25zZS5uYW1lLFxuICAgICAgICAgIHR5cGU6IGdldFVzZXJSZXNwb25zZS50eXBlLFxuICAgICAgICB9LFxuICAgICAgICBodG1sX3VybDogaXRlbS5odG1sX3VybCxcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIGxvZ2luOiBpdGVtLmxvZ2luLFxuICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXG4gICAgICB9IGFzIEdpdEh1YlNlYXJjaFJlc3VsdEl0ZW07XG4gICAgfSksXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICB0b3RhbF9jb3VudDogYm9keS50b3RhbF9jb3VudCxcbiAgICBpbmNvbXBsZXRlX3Jlc3VsdHM6IGJvZHkuaW5jb21wbGV0ZV9yZXN1bHRzLFxuICAgIGl0ZW1zOiBzZWFyY2hSZXN1bHRzV2l0aFVzZXIsXG4gIH07XG59XG4iLCAiaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnfi9jb21wb25lbnRzL1NlYXJjaEZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdy1zY3JlZW4gYmctZ3JheS0zMDAnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS00Jz5cbiAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzEyN2JjMzBjJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1JNk5NTzQzTi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVkpRWklDQU8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QMkZUR1BPWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtMjZNRjZZQUMuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1MWFRJNlVYWC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSEhPTFhSRVMuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NlYXJjaCc6eydpZCc6J3JvdXRlcy9zZWFyY2gnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2VhcmNoJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NlYXJjaC1JT0RaSEEyWS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSEhPTFhSRVMuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTEyN0JDMzBDLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztB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
