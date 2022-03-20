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
var tailwind_default = "/build/_assets/tailwind-ZOUKBBYJ.css";

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
var import_remix4 = __toESM(require_remix());
function SearchForm({ searchTerm }) {
  const transition = (0, import_remix4.useTransition)();
  const isBusy = transition.state === "submitting";
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
    disabled: isBusy,
    type: "submit",
    className: "text-xl px-4 py-2 text-white bg-blue-500 rounded-lg font-bold"
  }, isBusy ? "Loading..." : "Search"));
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
var import_remix5 = __toESM(require_remix());
var API_ENDPOINT = `https://api.github.com`;
function isError(obj) {
  return obj && typeof obj === "object" && "message" in obj && "documentation_url" in obj;
}
async function searchUsers(query, page = 1) {
  const searchUrl = `${API_ENDPOINT}/search/users?q=${query}&page=${page}&per_page=10`;
  const res = await fetch(searchUrl, {
    headers: {
      Authorization: "Basic mainawycliffe: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"
    }
  });
  const body = await res.json();
  const searchResultsWithUser = await Promise.all(body.items.map(async (item) => {
    const res2 = await fetch(`https://api.github.com/users/${item.login}`, {
      headers: {
        Authorization: "Basic mainawycliffe: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"
      }
    });
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
var assets_manifest_default = { "version": "982da03e", "entry": { "module": "/build/entry.client-3MYGPHHB.js", "imports": ["/build/_shared/chunk-IQGC554W.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-4TDLHHEA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-YD4JPUIG.js", "imports": ["/build/_shared/chunk-NZDPD3PL.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/search": { "id": "routes/search", "parentId": "root", "path": "search", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/search-6NRZLGLT.js", "imports": ["/build/_shared/chunk-NZDPD3PL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-982DA03E.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9ob21lL213L3Byb2plY3RzL2dpdGh1Yi1zZWFyY2gtcmVtaXgvYXBwL3Jvb3QudHN4IiwgInJvdXRlOi9ob21lL213L3Byb2plY3RzL2dpdGh1Yi1zZWFyY2gtcmVtaXgvYXBwL3JvdXRlcy9zZWFyY2gudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlYXJjaEZvcm0udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1VzZXJQcm9maWxlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91dGlscy9zZWFyY2hVc2Vycy50cyIsICJyb3V0ZTovaG9tZS9tdy9wcm9qZWN0cy9naXRodWItc2VhcmNoLXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvbXcvcHJvamVjdHMvZ2l0aHViLXNlYXJjaC1yZW1peC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9tdy9wcm9qZWN0cy9naXRodWItc2VhcmNoLXJlbWl4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9tdy9wcm9qZWN0cy9naXRodWItc2VhcmNoLXJlbWl4L2FwcC9yb3V0ZXMvc2VhcmNoLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9tdy9wcm9qZWN0cy9naXRodWItc2VhcmNoLXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9zZWFyY2hcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NlYXJjaFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzZWFyY2hcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFpbHdpbmQuY3NzJztcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6ICd1dGYtOCcsXG4gIHRpdGxlOiAnR2l0aHViIFNlYXJjaCBBcHAnLFxuICB2aWV3cG9ydDogJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICd+L2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICd+L2NvbXBvbmVudHMvU2VhcmNoRm9ybSc7XG5pbXBvcnQgeyBHaXRIdWJTZWFyY2hSZXN1bHQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cyc7XG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnfi9jb21wb25lbnRzL1VzZXJQcm9maWxlJztcbmltcG9ydCBzZWFyY2hVc2VycyBmcm9tICd+L2NvbXBvbmVudHMvdXRpbHMvc2VhcmNoVXNlcnMnO1xuXG4vLyBsb2FkZXIgZm9yIGZldGNoaW5nIHRoZSByZXN1bHRzIG9uIHRoZSBiYWNrZW5kXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgLy8gZ2V0IHNlYXJjaCB0ZXJtIGZyb20gdXJsIGFuZCBwYWdlXG4gIGNvbnN0IHNlYXJjaFRlcm0gPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnc2VhcmNoJyk7XG4gIGNvbnN0IHBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncGFnZScpID8/IDE7IC8vIGRlZmF1bHQgdG8gcGFnZSAxXG4gIGlmICghc2VhcmNoVGVybSkge1xuICAgIHRocm93IGpzb24oJ05vIHNlYXJjaCB0ZXJtIHByb3ZpZGVkJywgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuICBjb25zdCByZXN1bHRzID0gYXdhaXQgc2VhcmNoVXNlcnMoc2VhcmNoVGVybSwgTnVtYmVyKHBhZ2UpKTtcblxuICByZXR1cm4ge1xuICAgIHBhZ2U6IHBhZ2UsXG4gICAgc2VhcmNoVGVybSxcbiAgICByZXN1bHRzLFxuICB9O1xufTtcblxudHlwZSBMb2FkZXJEYXRhVHlwZSA9IHtcbiAgcGFnZTogbnVtYmVyO1xuICBzZWFyY2hUZXJtOiBzdHJpbmc7XG4gIHJlc3VsdHM6IEdpdEh1YlNlYXJjaFJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgY29uc3QgeyByZXN1bHRzLCBwYWdlLCBzZWFyY2hUZXJtIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGFUeXBlPigpO1xuXG4gIC8vIGNhbGN1bGF0ZSB0aGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gIGNvbnN0IHRvdGFsTnVtYmVyT2ZQYWdlc1BhZ2VzID0gTWF0aC5jZWlsKHJlc3VsdHMudG90YWxfY291bnQgLyAxMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaC1zY3JlZW4gdy1zY3JlZW4gYmctZ3JheS0zMDAgcC01IG92ZXJmbG93LXktYXV0byc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctWzUwcmVtXSBteC1hdXRvIHNwYWNlLXktNCAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHB5LTQnPlxuICAgICAgICAgICAgPFNlYXJjaEZvcm0gc2VhcmNoVGVybT17c2VhcmNoVGVybX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBweS00IHRleHQtMnhsIHNwYWNlLXgtMic+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPlRvdGFsIHJlc3VsdHM6PC9zcGFuPiA8c3Bhbj57cmVzdWx0cy50b3RhbF9jb3VudH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Jlc3VsdHMuaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8VXNlclByb2ZpbGUgaXRlbT17aXRlbX0ga2V5PXtpdGVtLmlkfSAvPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgICAgPFBhZ2luYXRpb24gcGFnZT17cGFnZX0gdG90YWxOdW1iZXJPZlBhZ2VzPXt0b3RhbE51bWJlck9mUGFnZXNQYWdlc30gc2VhcmNoVGVybT17c2VhcmNoVGVybX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBGYUNoZXZyb25DaXJjbGVMZWZ0LCBGYUNoZXZyb25DaXJjbGVSaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgc2VhcmNoVGVybTogc3RyaW5nO1xuICB0b3RhbE51bWJlck9mUGFnZXM6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyBwYWdlLCBzZWFyY2hUZXJtLCB0b3RhbE51bWJlck9mUGFnZXMgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgcHktNCB0ZXh0LTJ4bCBzcGFjZS14LTInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBmbGV4LTEnPlxuICAgICAgICAgIFNob3dpbmcgcGFnZXMge3BhZ2V9IG9mIHt0b3RhbE51bWJlck9mUGFnZXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBzcGFjZS14LTInPlxuICAgICAgICAgIHtwYWdlID4gMSAmJiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICByb2xlPXsnYnV0dG9uJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweS0xIHB4LTYgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgc2hhZG93LW1kIGJsb2NrIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgc3BhY2UteC0yIGFsaWduLW1pZGRsZSdcbiAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9zZWFyY2g/c2VhcmNoPScgKyBzZWFyY2hUZXJtICsgJyZwYWdlPScgKyAocGFnZSAtIDEpLFxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPEZhQ2hldnJvbkNpcmNsZUxlZnQgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlJyAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cGFnZSA8IHRvdGFsTnVtYmVyT2ZQYWdlcyAmJiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICByb2xlPXsnYnV0dG9uJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweS0xIHB4LTYgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgc2hhZG93LW1kIGJsb2NrIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgc3BhY2UteC0yIGFsaWduLW1pZGRsZSdcbiAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9zZWFyY2g/c2VhcmNoPScgKyBzZWFyY2hUZXJtICsgJyZwYWdlPScgKyAoTnVtYmVyKHBhZ2UpICsgMSksXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayc+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgPEZhQ2hldnJvbkNpcmNsZVJpZ2h0IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgRm9ybSwgdXNlVHJhbnNpdGlvbiB9IGZyb20gJ3JlbWl4JztcblxudHlwZSBQcm9wcyA9IHtcbiAgc2VhcmNoVGVybT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZvcm0oeyBzZWFyY2hUZXJtIH06IFByb3BzKSB7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG5cbiAgY29uc3QgaXNCdXN5ID0gdHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gbWV0aG9kPSdnZXQnIGFjdGlvbj0nL3NlYXJjaCcgY2xhc3NOYW1lPSdzcGFjZS15LTQnPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtMnhsJyBodG1sRm9yPSdzZWFyY2gnPlxuICAgICAgICBTZWFyY2ggb24gR2l0aHViXG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgIGlkPSdzZWFyY2gnXG4gICAgICAgIG5hbWU9J3NlYXJjaCdcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTIwMCBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktNjAwIHJvdW5kZWQtbWQgdy1mdWxsIHB5LTIgcHgtNCB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWJsdWUtMzAwIHRleHQteGwnXG4gICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2gnXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17c2VhcmNoVGVybX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXtpc0J1c3l9IHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSd0ZXh0LXhsIHB4LTQgcHktMiB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbGcgZm9udC1ib2xkJz5cbiAgICAgICAge2lzQnVzeSA/ICdMb2FkaW5nLi4uJyA6ICdTZWFyY2gnfVxuICAgICAgPC9idXR0b24+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuIiwgImltcG9ydCB7IEdpdEh1YlNlYXJjaFJlc3VsdEl0ZW0gfSBmcm9tICcuL1NlYXJjaFJlc3VsdHMnO1xuaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGl0ZW06IEdpdEh1YlNlYXJjaFJlc3VsdEl0ZW07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUHJvZmlsZSh7IGl0ZW0gfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgc3BhY2UteC0yIHB4LTQgcHktNiByb3VuZGVkLW1kIHNoYWRvdy1sZyBiZy13aGl0ZSc+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2l0ZW0udXNlci5hdmF0YXJfdXJsfVxuICAgICAgICAgIGFsdD17aXRlbS51c2VyLm5hbWV9XG4gICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUgb2JqZWN0LWNvdmVyIHctMjAgaC0yMCBtci0yIHJvdW5kZWQtZnVsbCdcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS0yJz5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LXNlbWlib2xkJz5cbiAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0udXNlci5odG1sX3VybH0+XG4gICAgICAgICAgICAgIHtpdGVtLnVzZXIubmFtZX0gPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LW1kIHRleHQtZ3JheS02MDAnPkB7aXRlbS5sb2dpbn08L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICB7aXRlbS51c2VyLmJpbyAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC14bCc+e2l0ZW0udXNlci5iaW99PC9kaXY+fVxuICAgICAgICAgIHtpdGVtLnVzZXIubG9jYXRpb24gJiYgPGRpdiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNTAwJz57aXRlbS51c2VyLmxvY2F0aW9ufTwvZGl2Pn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC14bCBzcGFjZS14LTQgZmxleCBmbGV4LXJvdyB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBzcGFjZS14LTInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udC1ib2xkJz5Gb2xsb3dlcnM6PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+e2l0ZW0udXNlci5mb2xsb3dlcnN9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHNwYWNlLXgtMic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LWJvbGQnPkZvbGxvd2luZzo8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj57aXRlbS51c2VyLmZvbGxvd2luZ308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgcHgtNCBweS0xJz5cbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9e2l0ZW0udXNlci5odG1sX3VybH0gcmVsPSdub3JlZmVycmVyJz5cbiAgICAgICAgICAgICAgICA8RmFHaXRodWIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsganNvbiB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IEdpdEh1YlNlYXJjaFJlc3VsdCwgR2l0SHViU2VhcmNoUmVzdWx0SXRlbSwgR2l0SHViVXNlciB9IGZyb20gJy4uL1NlYXJjaFJlc3VsdHMnO1xuXG5leHBvcnQgY29uc3QgQVBJX0VORFBPSU5UID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb21gO1xuXG50eXBlIEVycm9yID0ge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGRvY3VtZW50YXRpb25fdXJsOiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBpc0Vycm9yKG9iajogYW55KTogb2JqIGlzIEVycm9yIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAnbWVzc2FnZScgaW4gb2JqICYmICdkb2N1bWVudGF0aW9uX3VybCcgaW4gb2JqO1xufVxuXG4vKipcbiAqXG4gKiBTZWFyY2ggdXNlcnMgYW5kIGZldGNoIHRoZWlyIHVzZXIgcHJvZmlsZXMgZnJvbSBHaXRodWIsIHJldHVybiBhIGxpbWl0ZWRcbiAqIG51bWJlciBvZiB1c2VycyBkZXRhaWxzLlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoVXNlcnMocXVlcnk6IHN0cmluZywgcGFnZSA9IDEpIHtcbiAgY29uc3Qgc2VhcmNoVXJsID0gYCR7QVBJX0VORFBPSU5UfS9zZWFyY2gvdXNlcnM/cT0ke3F1ZXJ5fSZwYWdlPSR7cGFnZX0mcGVyX3BhZ2U9MTBgO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChzZWFyY2hVcmwsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiAnQmFzaWMgbWFpbmF3eWNsaWZmZTpnaHBfWndTMGo2c290b1MxRmVpZ2NxeW5TTkdvSHF6Z1FQNFI1blI0JyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgYm9keSA9IChhd2FpdCByZXMuanNvbigpKSBhcyBHaXRIdWJTZWFyY2hSZXN1bHQ7XG4gIGNvbnN0IHNlYXJjaFJlc3VsdHNXaXRoVXNlciA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGJvZHkuaXRlbXMubWFwKGFzeW5jIChpdGVtKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke2l0ZW0ubG9naW59YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0Jhc2ljIG1haW5hd3ljbGlmZmU6Z2hwX1p3UzBqNnNvdG9TMUZlaWdjcXluU05Hb0hxemdRUDRSNW5SNCcsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGdldFVzZXJSZXNwb25zZSA9IChhd2FpdCByZXMuanNvbigpKSBhcyBHaXRIdWJVc2VyIHwgRXJyb3I7XG4gICAgICBpZiAoaXNFcnJvcihnZXRVc2VyUmVzcG9uc2UpKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gZ2V0VXNlclJlc3BvbnNlIGFzIEVycm9yO1xuICAgICAgICB0aHJvdyBqc29uKGVycm9yLm1lc3NhZ2UsIHsgc3RhdHVzOiA1MDMgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgYXZhdGFyX3VybDogZ2V0VXNlclJlc3BvbnNlLmF2YXRhcl91cmwsXG4gICAgICAgICAgYmlvOiBnZXRVc2VyUmVzcG9uc2UuYmlvLFxuICAgICAgICAgIGZvbGxvd2VyczogZ2V0VXNlclJlc3BvbnNlLmZvbGxvd2VycyxcbiAgICAgICAgICBmb2xsb3dpbmc6IGdldFVzZXJSZXNwb25zZS5mb2xsb3dpbmcsXG4gICAgICAgICAgaHRtbF91cmw6IGdldFVzZXJSZXNwb25zZS5odG1sX3VybCxcbiAgICAgICAgICBpZDogZ2V0VXNlclJlc3BvbnNlLmlkLFxuICAgICAgICAgIGxvZ2luOiBnZXRVc2VyUmVzcG9uc2UubG9naW4sXG4gICAgICAgICAgbG9jYXRpb246IGdldFVzZXJSZXNwb25zZS5sb2NhdGlvbixcbiAgICAgICAgICBuYW1lOiBnZXRVc2VyUmVzcG9uc2UubmFtZSxcbiAgICAgICAgICB0eXBlOiBnZXRVc2VyUmVzcG9uc2UudHlwZSxcbiAgICAgICAgfSxcbiAgICAgICAgaHRtbF91cmw6IGl0ZW0uaHRtbF91cmwsXG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICBsb2dpbjogaXRlbS5sb2dpbixcbiAgICAgICAgdHlwZTogaXRlbS50eXBlLFxuICAgICAgfSBhcyBHaXRIdWJTZWFyY2hSZXN1bHRJdGVtO1xuICAgIH0pLFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgdG90YWxfY291bnQ6IGJvZHkudG90YWxfY291bnQsXG4gICAgaW5jb21wbGV0ZV9yZXN1bHRzOiBib2R5LmluY29tcGxldGVfcmVzdWx0cyxcbiAgICBpdGVtczogc2VhcmNoUmVzdWx0c1dpdGhVc2VyLFxuICB9O1xufVxuIiwgImltcG9ydCBTZWFyY2hGb3JtIGZyb20gJ34vY29tcG9uZW50cy9TZWFyY2hGb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuIGJnLWdyYXktMzAwJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHNwYWNlLXktNCc+XG4gICAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic5ODJkYTAzZScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtM01ZR1BISEIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUlRR0M1NTRXLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC00VERMSEhFQS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVlENEpQVUlHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1OWkRQRDNQTC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2VhcmNoJzp7J2lkJzoncm91dGVzL3NlYXJjaCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZWFyY2gnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2VhcmNoLTZOUlpMR0xULmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1OWkRQRDNQTC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtOTgyREEwM0UuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFB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
