(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{409:function(e,t,a){"use strict";a.r(t);var o=a(56),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Dynamic Forms for Laravel is available via composer.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("You will need the following:")]),e._v(" "),a("ul",[a("li",[e._v("PHP 8.0+")]),e._v(" "),a("li",[e._v("Laravel 8+")]),e._v(" "),a("li",[e._v("Bootstrap 4")]),e._v(" "),a("li",[e._v("FontAwesome 5")]),e._v(" "),a("li",[e._v("(optional) An Amazon S3 bucket & access token, if you are going to handle file uploads via S3 for your dynamic forms")])]),e._v(" "),a("p",[e._v("Dynamic Forms assumes that you are using "),a("a",{attrs:{href:"https://laravel.com/docs/8.x/mix",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Mix"),a("OutboundLink")],1),e._v(" to prepare your JS/CSS assets. If you are not, you will need to transpile/minify the JavaScript that is installed into your "),a("code",[e._v("resources/js")]),e._v(" folder using your own build system.")]),e._v(" "),a("p",[e._v("There is no Tailwind version at this time. This is driven by Formiojs' support for different CSS frameworks. Bootstrap 4, Bootstrap 3, and Semantic UI are the available options.")]),e._v(" "),a("h2",{attrs:{id:"installation-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-2"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Install the package, run the installation command, and build your frontend assets:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" require northwestern-sysdev/dynamic-forms\nphp artisan dynamic-forms:install\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" run prod\n")])])]),a("p",[e._v("If you are going to use S3 for file uploads, you will want to ensure you have configured your Laravel app with a bucket name and credentials. If you are deploying to Laravel Vapor, no additional config is needed for file uploads.")]),e._v(" "),a("h2",{attrs:{id:"post-installation-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-installation-tasks"}},[e._v("#")]),e._v(" Post-Installation Tasks")]),e._v(" "),a("h3",{attrs:{id:"storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[e._v("#")]),e._v(" Storage")]),e._v(" "),a("p",[e._v("The installation command creates "),a("code",[e._v("App\\Http\\Controllers\\DynamicFormsStorageController")]),e._v(". This controller is responsible for interactions from the form to backend storage providers such as Amazon S3 to upload & download files.")]),e._v(" "),a("p",[e._v("Out of the box, this controller will deny all requests. You need to implement the "),a("code",[e._v("authorizeFileAction")]),e._v(" method to check a gate or perform some other authorization check.")]),e._v(" "),a("p",[e._v("Depending on who will be uploading, you may also want to add the "),a("code",[e._v("auth")]),e._v(" middleware to verify a user is logged in.")]),e._v(" "),a("p",[e._v("For file uploads, S3 and direct server uploads are both options available in the builder. You can set the env variable "),a("code",[e._v("MIX_STORAGE_DEFAULT_VALUE")]),e._v(" to "),a("code",[e._v("s3")]),e._v(" or "),a("code",[e._v("url")]),e._v(" if you do not need to give people a choice.")]),e._v(" "),a("h3",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("p",[e._v("The installation command creates "),a("code",[e._v("App\\Http\\Controllers\\DynamicFormsResourceController")]),e._v(". This controller is responsible for handling Resource Requests for Select components that utilize the Resource Source.")]),e._v(" "),a("p",[e._v("This controller presents Resources for any php files in "),a("code",[e._v("App\\Http\\Controllers\\Resources")]),e._v(" that implements ResourceInterface.")])])}),[],!1,null,null,null);t.default=s.exports}}]);