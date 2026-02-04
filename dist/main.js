var $8qw4J$swchelperscjs_async_to_generatorcjs = require("@swc/helpers/cjs/_async_to_generator.cjs");
var $8qw4J$swchelperscjs_ts_generatorcjs = require("@swc/helpers/cjs/_ts_generator.cjs");
var $8qw4J$atompackagedeps = require("atom-package-deps");
var $8qw4J$etch = require("etch");
var $8qw4J$swchelperscjs_class_call_checkcjs = require("@swc/helpers/cjs/_class_call_check.cjs");
var $8qw4J$swchelperscjs_create_classcjs = require("@swc/helpers/cjs/_create_class.cjs");
var $8qw4J$swchelperscjs_object_spreadcjs = require("@swc/helpers/cjs/_object_spread.cjs");
var $8qw4J$atom = require("atom");
var $8qw4J$lodash = require("lodash");
var $8qw4J$lodashdebounce = require("lodash/debounce");
var $8qw4J$swchelperscjs_sliced_to_arraycjs = require("@swc/helpers/cjs/_sliced_to_array.cjs");
var $8qw4J$swchelperscjs_to_consumable_arraycjs = require("@swc/helpers/cjs/_to_consumable_array.cjs");
var $8qw4J$path = require("path");
var $8qw4J$typescript = require("typescript");
var $8qw4J$swchelperscjs_ts_valuescjs = require("@swc/helpers/cjs/_ts_values.cjs");
var $8qw4J$swchelperscjs_call_supercjs = require("@swc/helpers/cjs/_call_super.cjs");
var $8qw4J$swchelperscjs_inheritscjs = require("@swc/helpers/cjs/_inherits.cjs");
var $8qw4J$byline = require("byline");
var $8qw4J$stream = require("stream");
var $8qw4J$swchelperscjs_type_ofcjs = require("@swc/helpers/cjs/_type_of.cjs");
var $8qw4J$fs = require("fs");
var $8qw4J$jsoncparser = require("jsonc-parser");
var $8qw4J$resolve = require("resolve");
var $8qw4J$swchelperscjs_object_spread_propscjs = require("@swc/helpers/cjs/_object_spread_props.cjs");
var $8qw4J$fuzzaldrin = require("fuzzaldrin");
var $8qw4J$atomselectlist = require("atom-select-list");
var $8qw4J$fsplus = require("fs-plus");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "activate", function () { return $64e7645780377c6f$export$234c45b355edd85b; });
$parcel$export(module.exports, "deactivate", function () { return $64e7645780377c6f$export$e96c1edfdaf2d1db; });
$parcel$export(module.exports, "serialize", function () { return $64e7645780377c6f$export$dfdc1655ccc5b9cb; });
$parcel$export(module.exports, "deserializeSemanticView", function () { return $64e7645780377c6f$export$a44ae7a0ffe32de; });
$parcel$export(module.exports, "consumeLinter", function () { return $64e7645780377c6f$export$7513da91a6067379; });
$parcel$export(module.exports, "consumeStatusBar", function () { return $64e7645780377c6f$export$a51a2902ac3affa7; });
$parcel$export(module.exports, "consumeDatatipService", function () { return $64e7645780377c6f$export$ca7950270ff61d66; });
$parcel$export(module.exports, "consumeSignatureHelp", function () { return $64e7645780377c6f$export$3ceee8b9bf304299; });
$parcel$export(module.exports, "consumeBusySignal", function () { return $64e7645780377c6f$export$29fa66c1419daddc; });
$parcel$export(module.exports, "provideAutocomplete", function () { return $64e7645780377c6f$export$71db97b929e8341b; });
$parcel$export(module.exports, "provideIntentions", function () { return $64e7645780377c6f$export$3781320452d1dce8; });
$parcel$export(module.exports, "provideIntentionsHighlight", function () { return $64e7645780377c6f$export$6f2bf0ac3e405d7b; });
$parcel$export(module.exports, "provideCodeActions", function () { return $64e7645780377c6f$export$7990dc4c350e7387; });
$parcel$export(module.exports, "provideHyperclick", function () { return $64e7645780377c6f$export$1c7ef754fc81a243; });
$parcel$export(module.exports, "provideReferences", function () { return $64e7645780377c6f$export$e32ae1c830f39f16; });
$parcel$export(module.exports, "provideOutlines", function () { return $64e7645780377c6f$export$cec97b3152a9a2a4; });
$parcel$export(module.exports, "provideDefinitions", function () { return $64e7645780377c6f$export$60b479b2c6dcce92; });
$parcel$export(module.exports, "provideCodeHighlight", function () { return $64e7645780377c6f$export$67b00a253126c08e; });




function $2893351583386024$export$8080b7556d9d6445(promise) {
    if (promise === undefined) return;
    if (typeof promise["catch"] !== "function") {
        atom.notifications.addFatalError("Atom-Typescript: non-promise passed to handlePromise. Please report this.", {
            stack: new Error().stack,
            dismissable: true
        });
        return;
    }
    promise["catch"](function(err) {
        atom.notifications.addFatalError("Atom-Typescript error: ".concat(err.message), {
            detail: err.toString(),
            stack: err.stack,
            dismissable: true
        });
    });
}

























var $ee93806a41573bb4$export$70bfa4f5700cfeae = (0, ($parcel$interopDefault($8qw4J$typescript))).DiagnosticCategory;
function $ee93806a41573bb4$export$9978d8c48293dc72(point) {
    return {
        line: point.row + 1,
        offset: point.column + 1
    };
}
function $ee93806a41573bb4$export$2b9d56ac2fba440c(loc) {
    return new $8qw4J$atom.Point(loc.line - 1, loc.offset - 1);
}
function $ee93806a41573bb4$export$477d491a08b070ec(span) {
    return $ee93806a41573bb4$export$19d00dfc4e734f8b(span.start, span.end);
}
function $ee93806a41573bb4$export$19d00dfc4e734f8b(start, end) {
    return new $8qw4J$atom.Range($ee93806a41573bb4$export$2b9d56ac2fba440c(start), $ee93806a41573bb4$export$2b9d56ac2fba440c(end));
}
function $ee93806a41573bb4$export$430a7b9c6c8900f6(range) {
    return {
        line: range.start.row + 1,
        offset: range.start.column + 1,
        endLine: range.end.row + 1,
        endOffset: range.end.column + 1
    };
}
function $ee93806a41573bb4$export$bad43d745a81bbd5(configFile) {
    var config = $ee93806a41573bb4$var$loadConfig(configFile);
    var options = config.formatCodeOptions;
    return {
        formatCodeOptions: (0, $8qw4J$swchelperscjs_object_spreadcjs._)({
            indentSize: atom.config.get("editor.tabLength"),
            tabSize: atom.config.get("editor.tabLength")
        }, options),
        compileOnSave: !!config.compileOnSave,
        preferences: config.preferences ? config.preferences : {}
    };
}
function $ee93806a41573bb4$var$loadConfig(configFile) {
    if ($8qw4J$path.extname(configFile) !== ".json") configFile = "".concat(configFile, ".json");
    var config = (0, ($parcel$interopDefault($8qw4J$typescript))).readConfigFile(configFile, function(file) {
        return (0, ($parcel$interopDefault($8qw4J$typescript))).sys.readFile(file);
    }).config;
    if (config === undefined) return {};
    if (typeof config["extends"] === "string") {
        var extendsPath = $8qw4J$path.join($8qw4J$path.dirname(configFile), config["extends"]);
        var extendsConfig = $ee93806a41573bb4$var$loadConfig(extendsPath);
        config = Object.assign({}, extendsConfig, config);
    }
    return config;
}
function $ee93806a41573bb4$export$9db02c2ec8f703d4(i) {
    return {
        label: $ee93806a41573bb4$export$c2a999eb584410f0(i.prefixDisplayParts) + i.parameters.map(function(x) {
            return $ee93806a41573bb4$export$c2a999eb584410f0(x.displayParts);
        }).join($ee93806a41573bb4$export$c2a999eb584410f0(i.separatorDisplayParts)) + $ee93806a41573bb4$export$c2a999eb584410f0(i.suffixDisplayParts),
        documentation: $ee93806a41573bb4$export$c2a999eb584410f0(i.documentation),
        parameters: i.parameters.map($ee93806a41573bb4$export$f7eb6a32d312d66a)
    };
}
function $ee93806a41573bb4$export$f7eb6a32d312d66a(p) {
    return {
        label: $ee93806a41573bb4$export$c2a999eb584410f0(p.displayParts),
        documentation: $ee93806a41573bb4$export$c2a999eb584410f0(p.documentation)
    };
}
function $ee93806a41573bb4$export$c2a999eb584410f0(x) {
    return x.map(function(i) {
        return i.text;
    }).join("");
}
var $ee93806a41573bb4$export$8b10423be8ce987b = function() {
    var codeToCategory;
    return function(code, category) {
        if (code === undefined) return true;
        if (codeToCategory === undefined) codeToCategory = new Map(Object.values((0, ($parcel$interopDefault($8qw4J$typescript))).Diagnostics).map(function(x) {
            return [
                x.code,
                x.category
            ];
        }));
        var cat = codeToCategory.get(code);
        if (cat === undefined) return true;
        return cat === category;
    };
}();






function $cf8cb216522ae432$var$eventLoopYielder(delayMs, maxTimeMs) {
    var started = performance.now();
    var lastYield = started;
    return function() {
        return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
            var now;
            return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        now = performance.now();
                        if (!(now - lastYield > delayMs)) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            new Promise(setImmediate)
                        ];
                    case 1:
                        _state.sent();
                        lastYield = now;
                        _state.label = 2;
                    case 2:
                        return [
                            2,
                            now - started <= maxTimeMs
                        ];
                }
            });
        })();
    };
}
/** Throws maximum time reached error */ function $cf8cb216522ae432$var$maxTimeError(name, timeS) {
    var err = new Error("Max time reached");
    atom.notifications.addError("".concat(name, " took more than ").concat(timeS, " seconds to complete"), {
        dismissable: true,
        description: "".concat(name, " took too long to complete and was terminated."),
        stack: err.stack
    });
    return err;
}
function $cf8cb216522ae432$export$e4043f67d36cbb26(sourceCode, scopeName) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var yielder, buf, grammar, lm, end, iter, pos, res, _res, nextPos;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    yielder = $cf8cb216522ae432$var$eventLoopYielder(100, 5000);
                    buf = new (0, $8qw4J$atom.TextBuffer)();
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        ,
                        8,
                        9
                    ]);
                    grammar = atom.grammars.grammarForId(scopeName);
                    lm = atom.grammars.languageModeForGrammarAndBuffer(grammar, buf);
                    buf.setLanguageMode(lm);
                    buf.setText(sourceCode);
                    end = buf.getEndPosition();
                    if (lm.startTokenizing) lm.startTokenizing();
                    return [
                        4,
                        $cf8cb216522ae432$var$tokenized(lm)
                    ];
                case 2:
                    _state.sent();
                    iter = lm.buildHighlightIterator();
                    if (!(iter.getOpenScopeIds && iter.getCloseScopeIds)) return [
                        3,
                        6
                    ];
                    pos = {
                        row: 0,
                        column: 0
                    };
                    iter.seek(pos);
                    res = [];
                    _state.label = 3;
                case 3:
                    if (!(pos.row < end.row || pos.row === end.row && pos.column <= end.column)) return [
                        3,
                        5
                    ];
                    (_res = res).push.apply(_res, (0, $8qw4J$swchelperscjs_to_consumable_arraycjs._)(iter.getCloseScopeIds().map(function() {
                        return "</span>";
                    })).concat((0, $8qw4J$swchelperscjs_to_consumable_arraycjs._)(iter.getOpenScopeIds().map(function(x) {
                        return '<span class="'.concat(lm.classNameForScopeId(x), '">');
                    }))));
                    iter.moveToSuccessor();
                    nextPos = iter.getPosition();
                    res.push($cf8cb216522ae432$var$escapeHTML(buf.getTextInRange([
                        pos,
                        nextPos
                    ])));
                    return [
                        4,
                        yielder()
                    ];
                case 4:
                    if (!_state.sent()) {
                        console.error($cf8cb216522ae432$var$maxTimeError("Atom-TypeScript: Highlighter", 5));
                        return [
                            3,
                            5
                        ];
                    }
                    pos = nextPos;
                    return [
                        3,
                        3
                    ];
                case 5:
                    return [
                        2,
                        res.join("")
                    ];
                case 6:
                    return [
                        2,
                        sourceCode
                    ];
                case 7:
                    return [
                        3,
                        9
                    ];
                case 8:
                    buf.destroy();
                    return [
                        7
                    ];
                case 9:
                    return [
                        2
                    ];
            }
        });
    })();
}
function $cf8cb216522ae432$var$tokenized(lm) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            return [
                2,
                new Promise(function(resolve) {
                    if (lm.fullyTokenized || lm.tree) resolve(undefined);
                    else if (lm.onDidTokenize) {
                        var disp = lm.onDidTokenize(function() {
                            disp.dispose();
                            resolve(undefined);
                        });
                    } else resolve(undefined); // null language mode
                })
            ];
        });
    })();
}
function $cf8cb216522ae432$var$escapeHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}


// Return line/offset position in the editor using 1-indexed coordinates
function $7580a2909a181bf5$var$getEditorPosition(editor) {
    var pos = editor.getCursorBufferPosition();
    return {
        line: pos.row + 1,
        offset: pos.column + 1
    };
}
function $7580a2909a181bf5$export$225e59ca209a506(filePath) {
    if (filePath === undefined) return false;
    return $7580a2909a181bf5$var$isAllowedExtension($8qw4J$path.extname(filePath));
}
function $7580a2909a181bf5$export$d9994fe0923974a5() {
    var config = atom.config.get("atom-typescript-updated");
    var tsScopes = (0, $8qw4J$swchelperscjs_to_consumable_arraycjs._)(config.tsSyntaxScopes).concat((0, $8qw4J$swchelperscjs_to_consumable_arraycjs._)(config.jsSyntaxScopes));
    return tsScopes;
}
function $7580a2909a181bf5$export$3aecee58e23ede2c(editor) {
    return $7580a2909a181bf5$export$225e59ca209a506(editor.getPath()) && $7580a2909a181bf5$export$bde40b56025b92b9(editor);
}
function $7580a2909a181bf5$export$bde40b56025b92b9(editor) {
    var _editor_getRootScopeDescriptor_getScopesArray = (0, $8qw4J$swchelperscjs_sliced_to_arraycjs._)(editor.getRootScopeDescriptor().getScopesArray(), 1), scopeName = _editor_getRootScopeDescriptor_getScopesArray[0];
    return $7580a2909a181bf5$export$d9994fe0923974a5().includes(scopeName);
}
function $7580a2909a181bf5$var$notNullary(x) {
    return x != null;
}
function $7580a2909a181bf5$var$memoizeThrottle(func, wait) {
    var mem = (0, $8qw4J$lodash.memoize)(function(_param) {
        return (0, $8qw4J$lodash.throttle)(func, wait, {
            leading: true
        });
    });
    return function(param) {
        return mem(param)(param);
    }; // NOTE: leading MUST be true for this ! to hold
}
var $7580a2909a181bf5$var$isAllowedExtension = $7580a2909a181bf5$var$memoizeThrottle(function(ext) {
    var _a;
    var config = atom.config.get("atom-typescript-updated");
    var tsExts = (0, $8qw4J$swchelperscjs_to_consumable_arraycjs._)(config.tsFileExtensions).concat((0, $8qw4J$swchelperscjs_to_consumable_arraycjs._)(config.jsFileExtensions));
    if (config.extensionsFromGrammars) {
        var _instance, _tsExts;
        var custom = (_a = atom.config.get("core.customFileTypes")) !== null && _a !== void 0 ? _a : {};
        var scopes = $7580a2909a181bf5$export$d9994fe0923974a5();
        (_tsExts = tsExts).push.apply(_tsExts, (0, $8qw4J$swchelperscjs_to_consumable_arraycjs._)((_instance = []).concat.apply(_instance, (0, $8qw4J$swchelperscjs_to_consumable_arraycjs._)(scopes.map(function(scope) {
            var _a;
            return (_a = atom.grammars.grammarForScopeName(scope)) === null || _a === void 0 ? void 0 : _a.fileTypes;
        })).concat((0, $8qw4J$swchelperscjs_to_consumable_arraycjs._)(scopes.map(function(scope) {
            return custom[scope];
        })))).filter($7580a2909a181bf5$var$notNullary).map(function(s) {
            return ".".concat(s);
        })));
    }
    return tsExts.includes(ext);
}, 5000);
function $7580a2909a181bf5$export$f25e34a2b31a939c(editor, position) {
    var file = editor.getPath();
    if (file !== undefined) {
        var location = position ? (0, $ee93806a41573bb4$export$9978d8c48293dc72)(position) : $7580a2909a181bf5$var$getEditorPosition(editor);
        return (0, $8qw4J$swchelperscjs_object_spreadcjs._)({
            file: file
        }, location);
    }
}
function $7580a2909a181bf5$export$d121654372a91687() {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, ed, err;
    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
        switch(_state.label){
            case 0:
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                _state.label = 1;
            case 1:
                _state.trys.push([
                    1,
                    6,
                    7,
                    8
                ]);
                _iterator = atom.workspace.getTextEditors()[Symbol.iterator]();
                _state.label = 2;
            case 2:
                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                    3,
                    5
                ];
                ed = _step.value;
                if (!$7580a2909a181bf5$export$3aecee58e23ede2c(ed)) return [
                    3,
                    4
                ];
                return [
                    4,
                    ed.getPath()
                ];
            case 3:
                _state.sent();
                _state.label = 4;
            case 4:
                _iteratorNormalCompletion = true;
                return [
                    3,
                    2
                ];
            case 5:
                return [
                    3,
                    8
                ];
            case 6:
                err = _state.sent();
                _didIteratorError = true;
                _iteratorError = err;
                return [
                    3,
                    8
                ];
            case 7:
                try {
                    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                        _iterator["return"]();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
                return [
                    7
                ];
            case 8:
                return [
                    2
                ];
        }
    });
}













function $495e5651dd8d899e$var$getElStartLine(elem) {
    var v = elem.dataset["startLine"];
    return v !== undefined ? parseInt(v, 10) - 1 : 0;
}
function $495e5651dd8d899e$var$getElEndLine(elem) {
    var v = elem.dataset["endLine"];
    return v !== undefined ? parseInt(v, 10) - 1 : 0;
}
function $495e5651dd8d899e$export$a4ea95adf60c92fc(startLine, endLine, node) {
    var children = node.querySelectorAll(":scope > ol > li.node");
    if (children.length === 0) return undefined;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Array.from(children)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var elem = _step.value;
            var start = $495e5651dd8d899e$var$getElStartLine(elem);
            var end = $495e5651dd8d899e$var$getElEndLine(elem);
            if (isFinite(start) && isFinite(end)) {
                if (startLine >= start && endLine <= end) {
                    var selected = $495e5651dd8d899e$export$a4ea95adf60c92fc(startLine, endLine, elem);
                    if (selected) return selected;
                    else return elem;
                } else if (isFinite(end) && endLine < end) break;
            }
            var selectedChild = $495e5651dd8d899e$export$a4ea95adf60c92fc(startLine, endLine, elem);
            if (selectedChild) return selectedChild;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var nstart = $495e5651dd8d899e$var$getElStartLine(node);
    var nend = $495e5651dd8d899e$var$getElEndLine(node);
    if (isFinite(nstart) && isFinite(nend) && startLine >= nstart && endLine <= nend) return node;
    return undefined;
}
function $495e5651dd8d899e$export$1d9ba002f33dc82b(node) {
    return node.spans.length > 0 ? node.spans[0].start.line - 1 : 0;
}
function $495e5651dd8d899e$export$53f1c18187345410(node) {
    return node.spans.length > 0 ? node.spans[0].start.offset - 1 : 0;
}
function $495e5651dd8d899e$export$f2907b76aa85709(node) {
    var s = node.spans;
    return s.length > 0 ? s[s.length - 1].end.line - 1 : 0;
}
function $495e5651dd8d899e$export$8d37f6070173ccdc(newTree, oldTree) {
    if (!newTree || !oldTree) return newTree === oldTree;
    // a bit of guess work here:
    // there may have been additions/deletions in the children
    // (in comparision to the previous navTree), so the tranfere of
    // the collapsed state really is a heuristical process.
    //
    // For now, we assume, if the name (i.e. node.text) is the same
    // then it refers to the same entity (i.e. it should get the same
    // collapsed state); which is not true in case a variable/function/etc
    // was renamed.
    // But we do not want the get too elaborate and do expensive modification-
    // detection here, so in case of renaming, we just reset the collapsed
    // state to the default (i.e. expanded).
    // Same for reordering etc. of children: for complex changes we just
    // revert to the default state.
    if (newTree.text === oldTree.text) {
        if (oldTree.collapsed) newTree.collapsed = true;
        if (newTree.childItems && oldTree.childItems) {
            var newChild;
            var oldChild;
            for(var i = 0, size = newTree.childItems.length; i < size; ++i){
                newChild = newTree.childItems[i];
                oldChild = oldTree.childItems[i];
                // allow for one addition / deletion in the children
                // (i.e. check if there's a match in the previous/next position)
                if (!$495e5651dd8d899e$export$8d37f6070173ccdc(newChild, oldChild)) {
                    // try, if a child was removed
                    oldChild = oldTree.childItems[i + 1];
                    if (!$495e5651dd8d899e$export$8d37f6070173ccdc(newChild, oldChild)) {
                        // try, if a child was added
                        oldChild = oldTree.childItems[i - 1];
                        $495e5651dd8d899e$export$8d37f6070173ccdc(newChild, oldChild);
                    }
                }
            }
        }
        return true;
    }
    return false;
}
function $495e5651dd8d899e$export$c2b0a16388cba90f(navTree) {
    if (navTree === null) return;
    if (navTree.childItems) {
        if (navTree.childItems.length < 1) {
            // normalize: remove empty lists
            navTree.childItems = undefined;
            return;
        }
        // TODO should there be a different sort-order?
        //     for now: sort ascending by line-number
        navTree.childItems.sort(function(a, b) {
            return $495e5651dd8d899e$export$1d9ba002f33dc82b(a) - $495e5651dd8d899e$export$1d9ba002f33dc82b(b);
        });
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = navTree.childItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var child = _step.value;
                $495e5651dd8d899e$export$c2b0a16388cba90f(child);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
}
function $495e5651dd8d899e$export$e4d153b3e021fb47(node, pos) {
    var start = $495e5651dd8d899e$var$getElStartLine(node);
    var end = $495e5651dd8d899e$var$getElEndLine(node);
    if (start <= pos && end >= pos) {
        if ($495e5651dd8d899e$export$a4ea95adf60c92fc(start, end, node)) // -> there is a node "further down" that should get selected
        return false;
        return true;
    }
    return false;
}
function $495e5651dd8d899e$export$8cdf83cd3204bbcd(n1, n2) {
    return n1.text === n2.text && (0, $8qw4J$lodash.isEqual)(n1.spans, n2.spans);
}
function $495e5651dd8d899e$export$47553c2643784b50(node, event) {
    return !!node.childItems && event.target === event.currentTarget;
}


var $3c84f55e2ff649f2$export$814b29caa594376c = /*#__PURE__*/ function() {
    "use strict";
    function NavigationNodeComponent(props) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, NavigationNodeComponent);
        this.props = props;
        $8qw4J$etch.initialize(this);
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(NavigationNodeComponent, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.props = (0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, this.props, props);
                                return [
                                    4,
                                    $8qw4J$etch.update(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $8qw4J$etch.destroy(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                var _a, _b, _c, _d;
                var node = this.props.navTree;
                var ctrl = this.props.ctrl;
                var classes = (node.childItems ? "nested-" : "") + "item" + (node.collapsed ? " collapsed" : " expanded");
                var styleClasses = this.getStyles();
                return $8qw4J$etch.dom("li", {
                    className: "node entry exanded list-" + classes,
                    dataset: {
                        startLine: (_b = (_a = this.props.navTree.spans[0]) === null || _a === void 0 ? void 0 : _a.start) === null || _b === void 0 ? void 0 : _b.line,
                        endLine: (_d = (_c = this.props.navTree.spans[0]) === null || _c === void 0 ? void 0 : _c.end) === null || _d === void 0 ? void 0 : _d.line
                    }
                }, $8qw4J$etch.dom("div", {
                    className: "header list-item",
                    on: {
                        click: function(event) {
                            return _this.entryClicked(event, node);
                        }
                    }
                }, $8qw4J$etch.dom("span", {
                    className: styleClasses
                }, node.text)), $8qw4J$etch.dom("ol", {
                    className: "entries list-tree"
                }, node.childItems ? node.childItems.map(function(sn, i) {
                    return $8qw4J$etch.dom(NavigationNodeComponent, {
                        key: i,
                        navTree: sn,
                        ctrl: ctrl
                    });
                }) : null));
            }
        },
        {
            key: "getStyles",
            value: function getStyles() {
                var kind = this.props.navTree.kind;
                var styles = "icon icon-".concat(kind);
                var kindModifiers = this.props.navTree.kindModifiers;
                if (kindModifiers) styles += " " + kindModifiers.split(/[, ]/).map(function(modifier) {
                    return "modifier-".concat(modifier.trim());
                }).join(" ");
                return styles;
            }
        },
        {
            key: "entryClicked",
            value: function entryClicked(event, node) {
                event.stopPropagation();
                var isToggle = (0, $495e5651dd8d899e$export$47553c2643784b50)(node, event);
                if (!isToggle) this.props.ctrl.gotoNode(node);
                else {
                    node.collapsed = !node.collapsed;
                    (0, $2893351583386024$export$8080b7556d9d6445)($8qw4J$etch.update(this));
                }
            }
        }
    ]);
    return NavigationNodeComponent;
}();



var $cd15631f259ad2e9$export$1beacdeb2d370927 = /*#__PURE__*/ function() {
    "use strict";
    function NavigationTreeComponent(props) {
        var _this = this;
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, NavigationTreeComponent);
        this.props = props;
        this.subscriptions = new (0, $8qw4J$atom.CompositeDisposable)();
        this.longLineLength = 4000;
        this.largeFileLineCount = 500;
        this.loadNavTree = function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var filePath, client, navtreeResult, navTree, err;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!this.editor) return [
                                2
                            ];
                            if (!this.getClient) return [
                                2
                            ];
                            filePath = this.editor.getPath();
                            if (filePath === undefined) return [
                                2
                            ];
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                6,
                                ,
                                7
                            ]);
                            return [
                                4,
                                this.getClient(filePath)
                            ];
                        case 2:
                            client = _state.sent();
                            return [
                                4,
                                client.execute("navtree", {
                                    file: filePath
                                })
                            ];
                        case 3:
                            navtreeResult = _state.sent();
                            navTree = navtreeResult.body;
                            if (!navTree) return [
                                3,
                                5
                            ];
                            this.setNavTree(navTree);
                            return [
                                4,
                                $8qw4J$etch.update(this)
                            ];
                        case 4:
                            _state.sent();
                            _state.label = 5;
                        case 5:
                            return [
                                3,
                                7
                            ];
                        case 6:
                            err = _state.sent();
                            console.error(err, filePath);
                            return [
                                3,
                                7
                            ];
                        case 7:
                            return [
                                2
                            ];
                    }
                });
            }).call(_this);
        };
        /**
         * HELPER select the node's HTML represenation which corresponds to the
         *        current cursor position
         */ this.selectAtCursorLine = function(param) {
            var newBufferPosition = param.newBufferPosition;
            var _a, _b;
            var firstNodeElem = _this.firstNode();
            if (!firstNodeElem) return;
            var cursorLine = newBufferPosition.row;
            var selectedChild = (_b = (_a = (0, $495e5651dd8d899e$export$a4ea95adf60c92fc)(cursorLine, cursorLine, firstNodeElem)) === null || _a === void 0 ? void 0 : _a.querySelector(".header")) !== null && _b !== void 0 ? _b : undefined;
            var currentSelection = _this.getSelectedNode();
            if (selectedChild !== currentSelection) {
                if (currentSelection) currentSelection.classList.remove("selected");
                if (selectedChild) selectedChild.classList.add("selected");
            }
        };
        this.subscribeToEditor = function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var lineCount;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (this.editorScrolling) this.editorScrolling.dispose();
                            if (this.editorChanging) this.editorChanging.dispose();
                            if (!editor || !$7580a2909a181bf5$export$3aecee58e23ede2c(editor)) return [
                                2,
                                this.update({
                                    navTree: null
                                })
                            ];
                            // else
                            this.editor = editor;
                            // set navTree
                            return [
                                4,
                                this.loadNavTree()
                            ];
                        case 1:
                            _state.sent();
                            lineCount = this.lineCountIfLarge(editor);
                            if (!atom.config.get("atom-typescript-updated.largeFileNoFollowCursor") || lineCount === 0) this.editorScrolling = editor.onDidChangeCursorPosition(this.selectAtCursorLine);
                            this.editorChanging = editor.onDidStopChanging(lineCount === 0 ? this.loadNavTree : (0, ($parcel$interopDefault($8qw4J$lodashdebounce)))(this.loadNavTree, Math.max(lineCount / 5, 300)));
                            return [
                                2
                            ];
                    }
                });
            }).call(_this);
        };
        (0, $495e5651dd8d899e$export$c2b0a16388cba90f)(props.navTree);
        $8qw4J$etch.initialize(this);
        this.subscriptions.add(atom.workspace.observeActiveTextEditor(this.subscribeToEditor), atom.commands.add("atom-text-editor.typescript-editor", {
            "typescript:reveal-in-semantic-view": {
                description: "Reveal the symbol under the text cursor in semantic view",
                didDispatch: function(event) {
                    var editor = event.currentTarget.getModel();
                    _this.selectAtCursorLine({
                        newBufferPosition: editor.getCursorBufferPosition()
                    });
                }
            }
        }), atom.config.observe("atom-typescript-updated.longLineLength", function(value) {
            if (value > 0) _this.longLineLength = value;
        }), atom.config.observe("atom-typescript-updated.largeFileLineCount", function(value) {
            if (value > 0) _this.largeFileLineCount = value;
        }), atom.config.observe("linter-ui-default.longLineLength", function(value) {
            if (atom.config.get("atom-typescript-updated.longLineLength") > 0) return;
            if (typeof value === "number") _this.longLineLength = value;
        }), atom.config.observe("linter-ui-default.largeFileLineCount", function(value) {
            if (atom.config.get("atom-typescript-updated.largeFileLineCount") > 0) return;
            if (typeof value === "number") _this.largeFileLineCount = value / 6;
        }));
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(NavigationTreeComponent, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (props.navTree !== undefined) this.setNavTree(props.navTree);
                                this.props = (0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, this.props, props);
                                return [
                                    4,
                                    $8qw4J$etch.update(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (this.editorScrolling) this.editorScrolling.dispose();
                                if (this.editorChanging) this.editorChanging.dispose();
                                this.editorScrolling = undefined;
                                this.editorChanging = undefined;
                                this.subscriptions.dispose();
                                return [
                                    4,
                                    $8qw4J$etch.destroy(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "setGetClient",
            value: function setGetClient(getClient) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.getClient = getClient;
                                return [
                                    4,
                                    this.loadNavTree()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "getSelectedNode",
            value: function getSelectedNode() {
                var _a;
                return (_a = this.element.querySelector(".header.selected")) !== null && _a !== void 0 ? _a : undefined;
            }
        },
        {
            key: "clearSelection",
            value: function clearSelection() {
                var elems = this.element.querySelectorAll(".header.selected");
                for(var i = 0; i < elems.length; i += 1)elems.item(i).classList.remove("selected");
            }
        },
        {
            key: "markSelection",
            value: function markSelection(node) {
                this.clearSelection();
                if (!node) return;
                var h = node.querySelector(".header");
                if (h) h.classList.add("selected");
            }
        },
        {
            key: "firstNode",
            value: function firstNode() {
                var _a;
                return (_a = this.element.querySelector("li.node")) !== null && _a !== void 0 ? _a : undefined;
            }
        },
        {
            key: "render",
            value: function render() {
                var maybeNavNodeComp = this.props.navTree ? $8qw4J$etch.dom((0, $3c84f55e2ff649f2$export$814b29caa594376c), {
                    navTree: this.props.navTree,
                    ctrl: this
                }) : null;
                return $8qw4J$etch.dom("div", {
                    className: "atomts atomts-semantic-view native-key-bindings"
                }, $8qw4J$etch.dom("ol", {
                    className: "list-tree has-collapsable-children focusable-panel"
                }, maybeNavNodeComp));
            }
        },
        {
            key: "readAfterUpdate",
            value: function readAfterUpdate() {
                // scroll to selected node:
                var selectedElement = this.element.querySelector(".selected");
                if (selectedElement) this.scrollTo(selectedElement);
            }
        },
        {
            /**
     * HELPER scroll the current editor so that the node's representation becomes
     *        visible
     *        (i.e. scroll the text/typescript editor)
     * @param  {NavigationTree} node
     *              the node which's element should be made visible in the editor
     */ key: "gotoNode",
            value: function gotoNode(node) {
                if (!this.editor) return;
                var gotoLine = (0, $495e5651dd8d899e$export$1d9ba002f33dc82b)(node);
                var gotoOffset = (0, $495e5651dd8d899e$export$53f1c18187345410)(node);
                this.editor.setCursorBufferPosition([
                    gotoLine,
                    gotoOffset
                ]);
            }
        },
        {
            key: "getCursorLine",
            value: function getCursorLine() {
                if (this.editor) return this.editor.getLastCursor().getBufferRow();
                else return undefined;
            }
        },
        {
            key: "setNavTree",
            value: function setNavTree(navTree) {
                (0, $495e5651dd8d899e$export$c2b0a16388cba90f)(navTree);
                if ((0, $8qw4J$lodash.isEqual)(navTree, this.props.navTree)) return;
                (0, $495e5651dd8d899e$export$8d37f6070173ccdc)(navTree, this.props.navTree);
                this.props.navTree = navTree;
                var node = this.firstNode();
                if (node) {
                    var cursorLine = this.getCursorLine();
                    if (cursorLine !== undefined) this.markSelection((0, $495e5651dd8d899e$export$a4ea95adf60c92fc)(cursorLine, cursorLine, node));
                }
            }
        },
        {
            /**
     * HELPER scroll the node's HTML representation (i.e. domNode) into view
     *        (i.e. scroll the semantic-view's tree representation)
     * @param  {Element} domNode the HTMLElement that should be made visisble
     */ key: "scrollTo",
            value: function scrollTo(domNode) {
                var elem = domNode;
                if (typeof elem.scrollIntoViewIfNeeded === "function") elem.scrollIntoViewIfNeeded();
                else elem.scrollIntoView();
            }
        },
        {
            key: "lineCountIfLarge",
            value: function lineCountIfLarge(editor) {
                var lineCount = editor.getLineCount();
                if (lineCount >= this.largeFileLineCount) // large file detection
                return lineCount;
                else {
                    // long line detection
                    var buffer = editor.getBuffer();
                    for(var i = 0, len = lineCount; i < len; i++){
                        if (buffer.lineLengthForRow(i) > this.longLineLength) return this.longLineLength / 100;
                    }
                    return 0; // small file
                }
            }
        }
    ]);
    return NavigationTreeComponent;
}();


var $4759e62349e0b646$export$c5c441a5719d665b = "atom-typescript://semantic-view";
var $4759e62349e0b646$export$a3a95952d8506109 = /*#__PURE__*/ function() {
    "use strict";
    function SemanticView(config) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, SemanticView);
        this.comp = new (0, $cd15631f259ad2e9$export$1beacdeb2d370927)({
            navTree: config.navTree
        });
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(SemanticView, [
        {
            key: "element",
            get: function get() {
                return this.comp.element;
            }
        },
        {
            key: "setGetClient",
            value: function setGetClient(gc) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.comp.setGetClient(gc)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    this.comp.update({})
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "getTitle",
            value: function getTitle() {
                return "TypeScript";
            }
        },
        {
            key: "getURI",
            value: function getURI() {
                return $4759e62349e0b646$export$c5c441a5719d665b;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                SemanticView.instance = null;
                                return [
                                    4,
                                    this.comp.destroy()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "getDefaultLocation",
            value: function getDefaultLocation() {
                return "right";
            }
        },
        {
            key: "getAllowedLocations",
            value: function getAllowedLocations() {
                // The locations into which the item can be moved.
                return [
                    "left",
                    "right"
                ];
            }
        },
        {
            key: "serialize",
            value: function serialize() {
                return {
                    deserializer: "atomts-semantic-view/SemanticView",
                    data: {
                        navTree: this.comp.props.navTree
                    }
                };
            }
        }
    ], [
        {
            key: "create",
            value: function create(config) {
                if (!SemanticView.instance) SemanticView.instance = new SemanticView(config);
                return SemanticView.instance;
            }
        }
    ]);
    return SemanticView;
}();
$4759e62349e0b646$export$a3a95952d8506109.instance = null;



























// Callbacks keeps track of all the outstanding requests




var $c6112536605178e1$export$2b3937e1c5d995d8 = /*#__PURE__*/ function() {
    "use strict";
    function Callbacks(reportBusyWhile) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, Callbacks);
        this.reportBusyWhile = reportBusyWhile;
        this.callbacks = new Map();
        this.interval = 0;
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(Callbacks, [
        {
            key: "add",
            value: function add(seq, command) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var _this, promise;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    ,
                                    3,
                                    4
                                ]);
                                promise = new Promise(function(resolve, reject) {
                                    _this.callbacks.set(seq, {
                                        command: command,
                                        resolve: resolve,
                                        reject: reject,
                                        started: Date.now()
                                    });
                                });
                                if (this.interval === 0) this.interval = window.setInterval(function() {
                                    process.activateUvLoop();
                                }, 100);
                                return [
                                    4,
                                    this.reportBusyWhile(command, function() {
                                        return promise;
                                    })
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 3:
                                this.callbacks["delete"](seq);
                                if (this.interval !== 0 && this.callbacks.size === 0) {
                                    clearInterval(this.interval);
                                    this.interval = 0;
                                }
                                return [
                                    7
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "rejectAll",
            value: function rejectAll(error) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.callbacks.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var reject = _step.value.reject;
                        reject(error);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                            _iterator["return"]();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                this.callbacks.clear();
            }
        },
        {
            key: "resolve",
            value: function resolve(res) {
                var req = this.callbacks.get(res.request_seq);
                if (req) {
                    if (window.atom_typescript_debug) console.log("received response for", res.command, "in", Date.now() - req.started, "ms", "with data", res.body);
                    if (res.success) req.resolve(res);
                    else req.reject(new Error(res.message));
                } else console.warn("unexpected response:", res);
            }
        },
        {
            key: "resolveMS",
            value: function resolveMS(body) {
                var req = this.callbacks.get(body.request_seq);
                if (req) {
                    if (window.atom_typescript_debug) console.log("received requestCompleted event for multistep command ".concat(req.command, " in ").concat(Date.now() - req.started, " ms"));
                    req.resolve(undefined);
                } else console.warn("unexpected requestCompleted event:", body);
            }
        },
        {
            key: "error",
            value: function error(seq, err) {
                var req = this.callbacks.get(seq);
                if (req) req.reject(err);
                else console.error(err);
            }
        }
    ]);
    return Callbacks;
}();


// Set this to true to start tsserver with node --inspect
var $15c8165b6fc0c3c1$var$INSPECT_TSSERVER = false;
var $15c8165b6fc0c3c1$var$commandWithResponseMap = {
    compileOnSaveAffectedFileList: true,
    compileOnSaveEmitFile: true,
    completionEntryDetails: true,
    completions: true,
    completionInfo: true,
    configure: true,
    definition: true,
    format: true,
    getCodeFixes: true,
    getSupportedCodeFixes: true,
    documentHighlights: true,
    projectInfo: true,
    quickinfo: true,
    references: true,
    reload: true,
    rename: true,
    navtree: true,
    navto: true,
    getApplicableRefactors: true,
    getEditsForRefactor: true,
    organizeImports: true,
    signatureHelp: true,
    getEditsForFileRename: true,
    applyCodeActionCommand: true
};
var $15c8165b6fc0c3c1$var$commandsWithMultistepMap = {
    geterr: true,
    geterrForProject: true
};
var $15c8165b6fc0c3c1$var$eventTypesMap = {
    configFileDiag: true,
    semanticDiag: true,
    suggestionDiag: true,
    syntaxDiag: true
};
var $15c8165b6fc0c3c1$var$commandWithResponse = new Set(Object.keys($15c8165b6fc0c3c1$var$commandWithResponseMap));
var $15c8165b6fc0c3c1$var$commandWithMultistep = new Set(Object.keys($15c8165b6fc0c3c1$var$commandsWithMultistepMap));
var $15c8165b6fc0c3c1$var$eventTypes = new Set(Object.keys($15c8165b6fc0c3c1$var$eventTypesMap));
function $15c8165b6fc0c3c1$var$isCommandWithResponse(command) {
    return $15c8165b6fc0c3c1$var$commandWithResponse.has(command);
}
function $15c8165b6fc0c3c1$var$isCommandWithMultistep(command) {
    return $15c8165b6fc0c3c1$var$commandWithMultistep.has(command);
}
function $15c8165b6fc0c3c1$var$isKnownDiagEventType(event) {
    return $15c8165b6fc0c3c1$var$eventTypes.has(event);
}
var $15c8165b6fc0c3c1$export$21f68d6aa461e875 = /*#__PURE__*/ function() {
    "use strict";
    function TypescriptServiceClient(tsServerPath, version, reportBusyWhile) {
        var _this = this;
        var _this1 = this;
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, TypescriptServiceClient);
        this.tsServerPath = tsServerPath;
        this.version = version;
        this.reportBusyWhile = reportBusyWhile;
        this.emitter = new (0, $8qw4J$atom.Emitter)();
        this.seq = 0;
        this.lastStderrOutput = "";
        this.on = this.emitter.on.bind(this.emitter);
        this.exitHandler = function(err) {
            var report = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            _this1.callbacks.rejectAll(err);
            if (report) console.error("tsserver: ", err);
            _this1.server = undefined;
            _this1.emitter.emit("terminated");
            if (report) {
                var detail = err.message;
                if (_this1.lastStderrOutput) detail = "Last output from tsserver:\n".concat(_this1.lastStderrOutput, "\n\n").concat(detail);
                atom.notifications.addError("TypeScript server quit unexpectedly", {
                    detail: detail,
                    stack: err.stack,
                    dismissable: true
                });
            }
        };
        this.onMessage = function(res) {
            if (res.type === "response") _this.callbacks.resolve(res);
            else _this.onEvent(res);
        };
        // multistep completion event is supported as of TS version 2.2
        var _version_split_slice_map = (0, $8qw4J$swchelperscjs_sliced_to_arraycjs._)(version.split(".").slice(0, 2).map(function(x) {
            return parseInt(x, 10);
        }), 2), major = _version_split_slice_map[0], minor = _version_split_slice_map[1];
        this.multistepSupported = major > 2 || major === 2 && minor >= 2;
        this.callbacks = new (0, $c6112536605178e1$export$2b3937e1c5d995d8)(this.reportBusyWhile);
        this.server = this.startServer();
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(TypescriptServiceClient, [
        {
            key: "execute",
            value: function execute(command) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var req, result;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        if (!this.server) {
                            this.server = this.startServer();
                            this.emitter.emit("restarted");
                        }
                        req = {
                            seq: this.seq++,
                            command: command,
                            arguments: args[0]
                        };
                        if (window.atom_typescript_debug) console.log("sending request", req);
                        result = undefined;
                        if ($15c8165b6fc0c3c1$var$isCommandWithResponse(command) || this.multistepSupported && $15c8165b6fc0c3c1$var$isCommandWithMultistep(command)) result = this.callbacks.add(req.seq, command);
                        try {
                            if (!this.server.stdin) throw new Error("Server stdin is missing");
                            this.server.stdin.write(JSON.stringify(req) + "\n");
                        } catch (error) {
                            this.callbacks.error(req.seq, error);
                        }
                        return [
                            2,
                            result
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "restartServer",
            value: function restartServer() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.stopServer()
                                ];
                            case 1:
                                _state.sent();
                                // can't guarantee this.server value after await
                                if (!this.server) {
                                    this.server = this.startServer();
                                    this.emitter.emit("restarted");
                                }
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var _this, terminated;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        _this = this;
                        terminated = new Promise(function(resolve) {
                            var disp = _this.emitter.once("terminated", function() {
                                _this.emitter.dispose();
                                disp.dispose();
                                resolve();
                            });
                        });
                        return [
                            2,
                            Promise.all([
                                terminated,
                                this.stopServer()
                            ])
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "stopServer",
            value: function stopServer() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var _this, server, graceTimer;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                if (!this.server) return [
                                    3,
                                    2
                                ];
                                server = this.server;
                                graceTimer = setTimeout(function() {
                                    return server.kill();
                                }, 10000);
                                return [
                                    4,
                                    Promise.all([
                                        this.execute("exit"),
                                        new Promise(function(resolve) {
                                            var disp = _this.emitter.once("terminated", function() {
                                                disp.dispose();
                                                resolve();
                                            });
                                        })
                                    ])
                                ];
                            case 1:
                                _state.sent();
                                clearTimeout(graceTimer);
                                _state.label = 2;
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "startServer",
            value: function startServer1() {
                var _this = this;
                if (window.atom_typescript_debug) console.log("starting", this.tsServerPath);
                var cp = $15c8165b6fc0c3c1$var$startServer(this.tsServerPath);
                if (!cp) throw new Error("ChildProcess failed to start");
                var h = this.exitHandler;
                cp.once("error", h);
                cp.once("exit", function(code, signal) {
                    if (code === 0) h(new Error("Server stopped normally"), false);
                    else if (code !== null) h(new Error("exited with code: ".concat(code)));
                    else if (signal !== null) h(new Error("terminated on signal: ".concat(signal)));
                });
                // Pipe both stdout and stderr appropriately
                if (!cp.stdout) throw new Error("ChildProcess stdout missing");
                if (!cp.stderr) throw new Error("ChildProcess stderr missing");
                $15c8165b6fc0c3c1$var$messageStream(cp.stdout).on("data", this.onMessage);
                cp.stderr.on("data", function(data) {
                    console.warn("tsserver stderr:", _this.lastStderrOutput = data.toString());
                });
                return cp;
            }
        },
        {
            key: "onEvent",
            value: function onEvent(res) {
                if (window.atom_typescript_debug) console.log("received event", res);
                if (res.body) {
                    if ($15c8165b6fc0c3c1$var$isKnownDiagEventType(res.event)) this.emitter.emit(res.event, res.body);
                    else if (res.event === "requestCompleted") this.callbacks.resolveMS(res.body);
                }
            }
        }
    ]);
    return TypescriptServiceClient;
}();
function $15c8165b6fc0c3c1$var$startServer(tsServerPath) {
    var locale = atom.config.get("atom-typescript-updated").locale;
    var tsServerArgs = locale ? [
        "--locale",
        locale
    ] : [];
    if ($15c8165b6fc0c3c1$var$INSPECT_TSSERVER) return new (0, $8qw4J$atom.BufferedProcess)({
        command: "node",
        args: [
            "--inspect",
            tsServerPath
        ].concat(tsServerArgs)
    }).process;
    else return new (0, $8qw4J$atom.BufferedNodeProcess)({
        command: tsServerPath,
        args: tsServerArgs
    }).process;
}
function $15c8165b6fc0c3c1$var$messageStream(input) {
    return input.pipe((0, ($parcel$interopDefault($8qw4J$byline)))()).pipe(new $15c8165b6fc0c3c1$var$MessageStream());
}
/** Helper to parse the tsserver output stream to a message stream  */ var $15c8165b6fc0c3c1$var$MessageStream = /*#__PURE__*/ function(Transform) {
    "use strict";
    (0, $8qw4J$swchelperscjs_inheritscjs._)(MessageStream, Transform);
    function MessageStream() {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, MessageStream);
        return (0, $8qw4J$swchelperscjs_call_supercjs._)(this, MessageStream, [
            {
                objectMode: true
            }
        ]);
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(MessageStream, [
        {
            key: "_transform",
            value: function _transform(buf, _encoding, callback) {
                var line = buf.toString();
                try {
                    if (line.startsWith("{")) this.push(JSON.parse(line));
                    else if (!line.startsWith("Content-Length:")) console.warn(line);
                } catch (_) {
                    console.error("client: failed to parse: ", line);
                } finally{
                    callback(undefined);
                }
            }
        }
    ]);
    return MessageStream;
}((0, $8qw4J$stream.Transform));










function $c628f355f099b93a$export$369fb36245591db0(sourcePath, binBaseName) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var NODE_PATH, binName, resolvedPath, packagePath, version;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    NODE_PATH = process.env.NODE_PATH;
                    binName = "".concat(binBaseName, ".js");
                    return [
                        4,
                        $c628f355f099b93a$var$resolveModule("typescript/lib/".concat(binName), {
                            basedir: $8qw4J$path.dirname(sourcePath),
                            paths: NODE_PATH !== undefined ? NODE_PATH.split($8qw4J$path.delimiter) : undefined
                        })["catch"](function() {
                            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                                var auxTsdkPath, binPath, exists, tsdkPath, binPath1, exists1, defaultPath;
                                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                $c628f355f099b93a$var$getSDKPath($8qw4J$path.dirname(sourcePath))
                                            ];
                                        case 1:
                                            auxTsdkPath = _state.sent();
                                            if (!(auxTsdkPath !== undefined)) return [
                                                3,
                                                3
                                            ];
                                            binPath = $8qw4J$path.join(auxTsdkPath, "lib", binName);
                                            return [
                                                4,
                                                $c628f355f099b93a$var$fsExists(binPath)
                                            ];
                                        case 2:
                                            exists = _state.sent();
                                            if (exists) return [
                                                2,
                                                binPath
                                            ];
                                            _state.label = 3;
                                        case 3:
                                            // try to get typescript from configured tsdkPath
                                            tsdkPath = atom.config.get("atom-typescript-updated.tsdkPath");
                                            if (!tsdkPath) return [
                                                3,
                                                5
                                            ];
                                            binPath1 = $8qw4J$path.join(tsdkPath, "lib", binName);
                                            return [
                                                4,
                                                $c628f355f099b93a$var$fsExists(binPath1)
                                            ];
                                        case 4:
                                            exists1 = _state.sent();
                                            if (exists1) return [
                                                2,
                                                binPath1
                                            ];
                                            _state.label = 5;
                                        case 5:
                                            // use bundled version
                                            defaultPath = (0, ($parcel$interopDefault($8qw4J$resolve))).sync("typescript/lib/".concat(binName));
                                            return [
                                                2,
                                                defaultPath
                                            ];
                                    }
                                });
                            })();
                        })
                    ];
                case 1:
                    resolvedPath = _state.sent();
                    packagePath = $8qw4J$path.resolve(resolvedPath, "../../package.json");
                    version = require(packagePath).version;
                    return [
                        2,
                        {
                            version: version,
                            pathToBin: resolvedPath
                        }
                    ];
            }
        });
    })();
}
// Promisify the async resolve function
function $c628f355f099b93a$var$resolveModule(id, opts) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            return [
                2,
                new Promise(function(resolve, reject) {
                    return (0, ($parcel$interopDefault($8qw4J$resolve)))(id, opts, function(err, result) {
                        if (err) reject(err);
                        else if (result === undefined) reject(new Error("Module path is undefined"));
                        else resolve(result);
                    });
                })
            ];
        });
    })();
}
function $c628f355f099b93a$var$fsExists(p) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            return [
                2,
                new Promise(function(resolve) {
                    return $8qw4J$fs.access(p, $8qw4J$fs.constants.F_OK, function(err) {
                        if (err) resolve(false);
                        else resolve(true);
                    });
                })
            ];
        });
    })();
}
function $c628f355f099b93a$var$fsReadFile(p) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            return [
                2,
                new Promise(function(resolve, reject) {
                    return $8qw4J$fs.readFile(p, function(error, data) {
                        if (error) reject(error);
                        else resolve(data.toString("utf-8"));
                    });
                })
            ];
        });
    })();
}
function $c628f355f099b93a$var$tryConfigFiles(basedir, relpaths) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, relpath, _path, configFile, err;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = relpaths[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    relpath = _step.value;
                    configFile = (_path = $8qw4J$path).join.apply(_path, [
                        basedir
                    ].concat((0, $8qw4J$swchelperscjs_to_consumable_arraycjs._)(relpath)));
                    return [
                        4,
                        $c628f355f099b93a$var$fsExists(configFile)
                    ];
                case 3:
                    if (_state.sent()) return [
                        2,
                        configFile
                    ];
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                            _iterator["return"]();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    return [
                        2
                    ];
            }
        });
    })();
}
function $c628f355f099b93a$var$resolveConfigFile(initialBaseDir) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var basedir, parent, configFile;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    basedir = initialBaseDir;
                    parent = $8qw4J$path.dirname(basedir);
                    _state.label = 1;
                case 1:
                    if (!(basedir !== parent)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        $c628f355f099b93a$var$tryConfigFiles(basedir, [
                            [
                                ".atom-typescript.json"
                            ],
                            [
                                ".atom",
                                "atom-typescript.json"
                            ],
                            [
                                ".vscode",
                                "settings.json"
                            ]
                        ])
                    ];
                case 2:
                    configFile = _state.sent();
                    if (configFile !== undefined) return [
                        2,
                        {
                            basedir: basedir,
                            configFile: configFile
                        }
                    ];
                    basedir = parent;
                    parent = $8qw4J$path.dirname(basedir);
                    return [
                        3,
                        1
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    })();
}
function $c628f355f099b93a$var$isConfigObject(x) {
    return (typeof x === "undefined" ? "undefined" : (0, $8qw4J$swchelperscjs_type_ofcjs._)(x)) === "object" && x !== null && typeof x.tsdkPath === "string";
}
function $c628f355f099b93a$var$isVSCodeConfigObject(x) {
    return (typeof x === "undefined" ? "undefined" : (0, $8qw4J$swchelperscjs_type_ofcjs._)(x)) === "object" && x !== null && typeof x["typescript.tsdk"] === "string";
}
function $c628f355f099b93a$var$getSDKPath(dirname) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var configFile, configFileContents, _, tsdkPath, e;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        $c628f355f099b93a$var$resolveConfigFile(dirname)
                    ];
                case 1:
                    configFile = _state.sent();
                    if (!configFile) return [
                        3,
                        5
                    ];
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        4,
                        ,
                        5
                    ]);
                    _ = $8qw4J$jsoncparser.parse;
                    return [
                        4,
                        $c628f355f099b93a$var$fsReadFile(configFile.configFile)
                    ];
                case 3:
                    configFileContents = _.apply($8qw4J$jsoncparser, [
                        _state.sent()
                    ]);
                    if ($c628f355f099b93a$var$isConfigObject(configFileContents)) tsdkPath = configFileContents.tsdkPath;
                    else if ($c628f355f099b93a$var$isVSCodeConfigObject(configFileContents)) // NOTE: VSCode asks for path to "typescript/lib", while
                    // we only want path to "typescript". Hence the dirname here
                    tsdkPath = $8qw4J$path.dirname(configFileContents["typescript.tsdk"]);
                    else return [
                        2,
                        undefined
                    ];
                    return [
                        2,
                        $8qw4J$path.isAbsolute(tsdkPath) ? tsdkPath : $8qw4J$path.join(configFile.basedir, tsdkPath)
                    ];
                case 4:
                    e = _state.sent();
                    console.warn(e);
                    return [
                        3,
                        5
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    })();
}


var $656dc62ff40b3cc7$export$dceb19333e080e82 = /*#__PURE__*/ function() {
    "use strict";
    function ClientResolver(reportBusyWhile) {
        var _this = this;
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, ClientResolver);
        this.reportBusyWhile = reportBusyWhile;
        this.clients = new Map();
        this.memoizedClients = new Map();
        this.emitter = new (0, $8qw4J$atom.Emitter)();
        this.subscriptions = new (0, $8qw4J$atom.CompositeDisposable)();
        this.tsserverInstancePerTsconfig = atom.config.get("atom-typescript-updated").tsserverInstancePerTsconfig;
        // This is just here so TypeScript can infer the types of the callbacks when using "on" method
        this.on = this.emitter.on.bind(this.emitter);
        this.diagnosticHandler = function(serverPath, type) {
            return function(result) {
                var filePath = $656dc62ff40b3cc7$var$isConfDiagBody(result) ? result.configFile : result.file;
                if (filePath) _this.emitter.emit("diagnostics", {
                    type: type,
                    serverPath: serverPath,
                    filePath: filePath,
                    diagnostics: result.diagnostics
                });
            };
        };
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(ClientResolver, [
        {
            key: "restartAllServers",
            value: function restartAllServers() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var _this;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                return [
                                    4,
                                    this.reportBusyWhile("Restarting servers", function() {
                                        return Promise.all(Array.from(_this.getAllClients()).map(function(client) {
                                            return client.restartServer();
                                        }));
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "get",
            value: function get(pFilePath) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var memo, client, e;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                memo = this.memoizedClients.get(pFilePath);
                                if (memo) return [
                                    2,
                                    memo
                                ];
                                client = this._get(pFilePath);
                                this.memoizedClients.set(pFilePath, client);
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    client
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 3:
                                e = _state.sent();
                                this.memoizedClients["delete"](pFilePath);
                                throw e;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                this.emitter.dispose();
                this.subscriptions.dispose();
                this.memoizedClients.clear();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator = this.clients.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                        var tsconfigMap = _step.value;
                        try {
                            for(var _iterator1 = tsconfigMap.values()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                                var client = _step1.value;
                                (0, $2893351583386024$export$8080b7556d9d6445)(client.destroy());
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator1["return"] != null) {
                                    _iterator1["return"]();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator["return"] != null) {
                            _iterator["return"]();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                this.clients.clear();
            }
        },
        {
            key: "_get",
            value: function _get(pFilePath) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var _ref, pathToBin, version, tsconfigPath, tsconfigMap, client, newClient;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (0, $c628f355f099b93a$export$369fb36245591db0)(pFilePath, "tsserver")
                                ];
                            case 1:
                                _ref = _state.sent(), pathToBin = _ref.pathToBin, version = _ref.version;
                                tsconfigPath = this.tsserverInstancePerTsconfig ? (0, ($parcel$interopDefault($8qw4J$typescript))).findConfigFile(pFilePath, function(f) {
                                    return (0, ($parcel$interopDefault($8qw4J$typescript))).sys.fileExists(f);
                                }) : undefined;
                                tsconfigMap = this.clients.get(pathToBin);
                                if (!tsconfigMap) {
                                    tsconfigMap = new Map();
                                    this.clients.set(pathToBin, tsconfigMap);
                                }
                                client = tsconfigMap.get(tsconfigPath);
                                if (client) return [
                                    2,
                                    client
                                ];
                                newClient = new (0, $15c8165b6fc0c3c1$export$21f68d6aa461e875)(pathToBin, version, this.reportBusyWhile);
                                tsconfigMap.set(tsconfigPath, newClient);
                                this.subscriptions.add(newClient.on("configFileDiag", this.diagnosticHandler(pathToBin, "configFileDiag")), newClient.on("semanticDiag", this.diagnosticHandler(pathToBin, "semanticDiag")), newClient.on("syntaxDiag", this.diagnosticHandler(pathToBin, "syntaxDiag")), newClient.on("suggestionDiag", this.diagnosticHandler(pathToBin, "suggestionDiag")));
                                return [
                                    2,
                                    newClient
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "getAllClients",
            value: function getAllClients() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, tsconfigMap, err;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                6,
                                7,
                                8
                            ]);
                            _iterator = this.clients.values()[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                5
                            ];
                            tsconfigMap = _step.value;
                            return [
                                5,
                                (0, $8qw4J$swchelperscjs_ts_valuescjs._)(tsconfigMap.values())
                            ];
                        case 3:
                            _state.sent();
                            _state.label = 4;
                        case 4:
                            _iteratorNormalCompletion = true;
                            return [
                                3,
                                2
                            ];
                        case 5:
                            return [
                                3,
                                8
                            ];
                        case 6:
                            err = _state.sent();
                            _didIteratorError = true;
                            _iteratorError = err;
                            return [
                                3,
                                8
                            ];
                        case 7:
                            try {
                                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                                    _iterator["return"]();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                            return [
                                7
                            ];
                        case 8:
                            return [
                                2
                            ];
                    }
                });
            }
        }
    ]);
    return ClientResolver;
}();
function $656dc62ff40b3cc7$var$isConfDiagBody(body) {
    return body && body.triggerFile && body.configFile;
}










function $824935c6fe894b0b$export$d21c11139c8fe8ee(codefixProvider) {
    return {
        grammarScopes: (0, $7580a2909a181bf5$export$d9994fe0923974a5)(),
        priority: 0,
        getCodeActions: function(textEditor, range) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                codefixProvider.runCodeFix(textEditor, range.start)
                            ];
                        case 1:
                            return [
                                2,
                                _state.sent().map(function(fix) {
                                    return {
                                        getTitle: function() {
                                            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                                                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                                                    return [
                                                        2,
                                                        "description" in fix ? fix.description : fix.actionDescription
                                                    ];
                                                });
                                            })();
                                        },
                                        dispose: function() {},
                                        apply: function() {
                                            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                                                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            return [
                                                                4,
                                                                codefixProvider.applyFix(fix)
                                                            ];
                                                        case 1:
                                                            _state.sent();
                                                            return [
                                                                2
                                                            ];
                                                    }
                                                });
                                            })();
                                        }
                                    };
                                })
                            ];
                    }
                });
            })();
        }
    };
}








function $593b916ea2f68ad2$export$6413bc8b6e281ffa(getClient) {
    return {
        grammarScopes: (0, $7580a2909a181bf5$export$d9994fe0923974a5)(),
        priority: 100,
        highlight: function(editor, position) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var location, client, result;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!(0, $7580a2909a181bf5$export$3aecee58e23ede2c)(editor)) return [
                                2
                            ];
                            location = (0, $7580a2909a181bf5$export$f25e34a2b31a939c)(editor, position);
                            if (!location) return [
                                2
                            ];
                            return [
                                4,
                                getClient(location.file)
                            ];
                        case 1:
                            client = _state.sent();
                            return [
                                4,
                                client.execute("documentHighlights", (0, $8qw4J$swchelperscjs_object_spread_propscjs._)((0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, location), {
                                    filesToSearch: [
                                        location.file
                                    ]
                                }))
                            ];
                        case 2:
                            result = _state.sent();
                            if (!result.body) return [
                                2
                            ];
                            return [
                                2,
                                Array.from($593b916ea2f68ad2$var$getSpans(location.file, result.body))
                            ];
                    }
                });
            })();
        }
    };
}
function $593b916ea2f68ad2$var$getSpans(file, data) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, fileInfo, err;
    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
        switch(_state.label){
            case 0:
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                _state.label = 1;
            case 1:
                _state.trys.push([
                    1,
                    6,
                    7,
                    8
                ]);
                _iterator = data[Symbol.iterator]();
                _state.label = 2;
            case 2:
                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                    3,
                    5
                ];
                fileInfo = _step.value;
                if (fileInfo.file !== file) return [
                    3,
                    4
                ];
                return [
                    5,
                    (0, $8qw4J$swchelperscjs_ts_valuescjs._)(fileInfo.highlightSpans.map((0, $ee93806a41573bb4$export$477d491a08b070ec)))
                ];
            case 3:
                _state.sent();
                _state.label = 4;
            case 4:
                _iteratorNormalCompletion = true;
                return [
                    3,
                    2
                ];
            case 5:
                return [
                    3,
                    8
                ];
            case 6:
                err = _state.sent();
                _didIteratorError = true;
                _iteratorError = err;
                return [
                    3,
                    8
                ];
            case 7:
                try {
                    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                        _iterator["return"]();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
                return [
                    7
                ];
            case 8:
                return [
                    2
                ];
        }
    });
}












function $002ef260a7981892$export$2c9a28f937ef04fb(data, etch, codeRenderer) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var kind, tags, docs, codeText;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (data === undefined) return [
                        2,
                        null
                    ];
                    kind = etch.dom("div", {
                        className: "atom-typescript-datatip-tooltip-kind"
                    }, data.kind, $002ef260a7981892$var$formatKindModifiers(data.kindModifiers));
                    tags = data.tags ? data.tags.map(function(tag, idx) {
                        var tagClass = "atom-typescript-datatip-tooltip-doc-tag " + "atom-typescript-datatip-tooltip-doc-tag-name-".concat(tag.name);
                        return etch.dom("div", {
                            className: tagClass,
                            key: idx
                        }, etch.dom("span", {
                            className: "atom-typescript-datatip-tooltip-doc-tag-name"
                        }, tag.name), $002ef260a7981892$var$formatTagText(etch, tag.text));
                    }) : null;
                    docs = etch.dom("div", {
                        className: "atom-typescript-datatip-tooltip-doc"
                    }, data.documentation, tags);
                    codeText = data.displayString.replace(/^\(.+?\)\s+/, "");
                    return [
                        4,
                        codeRenderer(codeText)
                    ];
                case 1:
                    return [
                        2,
                        [
                            _state.sent(),
                            kind,
                            docs
                        ]
                    ];
            }
        });
    })();
}
function $002ef260a7981892$var$formatKindModifiers(etch, text) {
    if (text === undefined) return null;
    return etch.dom("span", {
        className: "atom-typescript-datatip-tooltip-kind-modifiers"
    }, text);
}
function $002ef260a7981892$var$formatTagText(etch, tagText) {
    if (tagText === undefined) return null;
    var _exec = (0, $8qw4J$swchelperscjs_sliced_to_arraycjs._)(/^\s*(\S*)([^]*)$/.exec(tagText), 3), firstWord = _exec[1], restOfText = _exec[2];
    return etch.dom("span", {
        className: "atom-typescript-datatip-tooltip-doc-tag-text"
    }, etch.dom("span", {
        className: "atom-typescript-datatip-tooltip-doc-tag-text-first-word"
    }, firstWord), restOfText);
}



// Note: a horrible hack to avoid dependency on React
var $3dec627a7b52de57$var$REACT_ELEMENT_SYMBOL = Symbol["for"]("react.element");
var $3dec627a7b52de57$var$etch = {
    dom: function(type, props) {
        for(var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            children[_key - 2] = arguments[_key];
        }
        if (children.length > 0) return {
            $$typeof: $3dec627a7b52de57$var$REACT_ELEMENT_SYMBOL,
            type: type,
            ref: null,
            props: (0, $8qw4J$swchelperscjs_object_spread_propscjs._)((0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, props), {
                children: children
            })
        };
        else return {
            $$typeof: $3dec627a7b52de57$var$REACT_ELEMENT_SYMBOL,
            type: type,
            ref: null,
            props: (0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, props)
        };
    }
};
var $3dec627a7b52de57$export$62181cd26290fa50 = /*#__PURE__*/ function() {
    "use strict";
    function TSDatatipProvider(getClient) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, TSDatatipProvider);
        this.getClient = getClient;
        this.providerName = "TypeScript type tooltips";
        this.priority = 100;
        this.grammarScopes = (0, $7580a2909a181bf5$export$d9994fe0923974a5)();
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(TSDatatipProvider, [
        {
            key: "datatip",
            value: function datatip(editor, bufferPt) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var filePath, client, result, data, tooltip, _;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    4,
                                    ,
                                    5
                                ]);
                                filePath = editor.getPath();
                                if (filePath === undefined) return [
                                    2
                                ];
                                return [
                                    4,
                                    this.getClient(filePath)
                                ];
                            case 1:
                                client = _state.sent();
                                return [
                                    4,
                                    client.execute("quickinfo", {
                                        file: filePath,
                                        line: bufferPt.row + 1,
                                        offset: bufferPt.column + 1
                                    })
                                ];
                            case 2:
                                result = _state.sent();
                                data = result.body;
                                return [
                                    4,
                                    (0, $002ef260a7981892$export$2c9a28f937ef04fb)(data, $3dec627a7b52de57$var$etch, $3dec627a7b52de57$var$highlightCode)
                                ];
                            case 3:
                                tooltip = _state.sent();
                                return [
                                    2,
                                    {
                                        component: function() {
                                            return $3dec627a7b52de57$var$etch.dom("div", {
                                                className: "atom-typescript-datatip-tooltip"
                                            }, tooltip);
                                        },
                                        range: $8qw4J$atom.Range.fromObject([
                                            (0, $ee93806a41573bb4$export$2b9d56ac2fba440c)(data.start),
                                            (0, $ee93806a41573bb4$export$2b9d56ac2fba440c)(data.end)
                                        ])
                                    }
                                ];
                            case 4:
                                _ = _state.sent();
                                return [
                                    2
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ]);
    return TSDatatipProvider;
}();
function $3dec627a7b52de57$var$highlightCode(code) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var fontFamily, html;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    fontFamily = atom.config.get("editor.fontFamily");
                    return [
                        4,
                        (0, $cf8cb216522ae432$export$e4043f67d36cbb26)(code.replace(/\r?\n$/, ""), "source.ts")
                    ];
                case 1:
                    html = _state.sent();
                    return [
                        2,
                        $3dec627a7b52de57$var$etch.dom("div", {
                            style: {
                                fontFamily: fontFamily
                            },
                            className: "atom-typescript-datatip-tooltip-code",
                            dangerouslySetInnerHTML: {
                                __html: html
                            }
                        })
                    ];
            }
        });
    })();
}





function $d2f9fe9bb7e67a01$export$a9ca9b3a8941e92e(getClient) {
    return {
        name: "atom-typescript",
        priority: 0,
        grammarScopes: (0, $7580a2909a181bf5$export$d9994fe0923974a5)(),
        wordRegExp: /([A-Za-z0-9_])+|['"`](\\.|[^'"`\\\\])*['"`]/g,
        getDefinition: function(editor, position) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var location, client, result;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!(0, $7580a2909a181bf5$export$3aecee58e23ede2c)(editor)) return [
                                2
                            ];
                            location = (0, $7580a2909a181bf5$export$f25e34a2b31a939c)(editor, position);
                            if (!location) return [
                                2
                            ];
                            return [
                                4,
                                getClient(location.file)
                            ];
                        case 1:
                            client = _state.sent();
                            return [
                                4,
                                client.execute("definition", location)
                            ];
                        case 2:
                            result = _state.sent();
                            if (!result.body) return [
                                2
                            ];
                            if (result.body.length === 0) return [
                                2
                            ];
                            return [
                                2,
                                {
                                    queryRange: undefined,
                                    definitions: result.body.map($d2f9fe9bb7e67a01$var$fileSpanToDefinition)
                                }
                            ];
                    }
                });
            })();
        }
    };
}
function $d2f9fe9bb7e67a01$var$fileSpanToDefinition(span) {
    var range = (0, $ee93806a41573bb4$export$477d491a08b070ec)(span);
    return {
        path: span.file,
        position: range.start,
        range: range,
        language: "TypeScript"
    };
}





function $532eb743eaf241e3$export$b797847259776697(getClient) {
    return {
        isEditorSupported: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    return [
                        2,
                        (0, $7580a2909a181bf5$export$3aecee58e23ede2c)(editor)
                    ];
                });
            })();
        },
        findReferences: function(editor, position) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var location, client, result;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            location = (0, $7580a2909a181bf5$export$f25e34a2b31a939c)(editor, position);
                            if (!location) return [
                                2
                            ];
                            return [
                                4,
                                getClient(location.file)
                            ];
                        case 1:
                            client = _state.sent();
                            return [
                                4,
                                client.execute("references", location)
                            ];
                        case 2:
                            result = _state.sent();
                            if (!result.body) return [
                                2
                            ];
                            return [
                                2,
                                {
                                    type: "data",
                                    baseUri: location.file,
                                    referencedSymbolName: result.body.symbolDisplayString,
                                    references: result.body.refs.map($532eb743eaf241e3$var$refTsToIde)
                                }
                            ];
                    }
                });
            })();
        }
    };
}
function $532eb743eaf241e3$var$refTsToIde(ref) {
    return {
        uri: ref.file,
        range: (0, $ee93806a41573bb4$export$19d00dfc4e734f8b)(ref.start, ref.end),
        name: undefined
    };
}
















var $3a2f125535af08fb$export$275be3d1a3f62fb = /*#__PURE__*/ function() {
    "use strict";
    function TsView(props) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, TsView);
        this.props = props;
        $8qw4J$etch.initialize(this);
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(TsView, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        this.props = (0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, this.props, props);
                        return [
                            2,
                            $8qw4J$etch.update(this)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "render",
            value: function render() {
                var style = {
                    fontFamily: atom.config.get("editor.fontFamily")
                };
                return $8qw4J$etch.dom("div", {
                    className: "editor editor-colors",
                    style: style,
                    innerHTML: this.props.highlightedText
                });
            }
        }
    ]);
    return TsView;
}();










var $5f8857790714307e$export$31d5f5740e2c2887 = /*#__PURE__*/ function() {
    "use strict";
    function HighlightComponent(props) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, HighlightComponent);
        this.props = props;
        this.matches = this.match(this.props);
        $8qw4J$etch.initialize(this);
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(HighlightComponent, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.props = (0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, this.props, props);
                                this.matches = this.match(this.props);
                                return [
                                    4,
                                    $8qw4J$etch.update(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $8qw4J$etch.destroy(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "render",
            value: function render() {
                return $8qw4J$etch.dom("span", null, this.matches.map(function(m, i) {
                    return $8qw4J$etch.dom("span", {
                        className: m.type,
                        key: i
                    }, m.text);
                }));
            }
        },
        {
            key: "match",
            value: function match(props) {
                if (props.query) return $5f8857790714307e$export$d775a8cf3adcd3a0(props.label, props.query);
                return [
                    {
                        text: props.label
                    }
                ];
            }
        }
    ]);
    return HighlightComponent;
}();
function $5f8857790714307e$export$d775a8cf3adcd3a0(name, query) {
    var lastIndex = 0;
    var matchedChars = []; // Build up a set of matched chars to be more semantic
    var queryMatches = [];
    var matches = (0, $8qw4J$fuzzaldrin.match)(name, query);
    var matchIndex;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            matchIndex = _step.value;
            if (matchIndex < 0) continue; // If marking up the basename, omit name matches
            var unmatched = name.substring(lastIndex, matchIndex);
            if (unmatched) {
                if (matchedChars.length > 0) queryMatches.push({
                    text: matchedChars.join(""),
                    type: "character-match"
                });
                matchedChars = [];
                queryMatches.push({
                    text: unmatched
                });
            }
            matchedChars.push(name[matchIndex]);
            lastIndex = matchIndex + 1;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (matchedChars.length > 0) queryMatches.push({
        text: matchedChars.join(""),
        type: "character-match"
    });
    // Remaining characters are plain text
    queryMatches.push({
        text: name.substring(lastIndex)
    });
    return queryMatches;
}







function $f55d59ecd155c40a$export$12cb8c60c107136e(_0) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function(param) {
        var items, itemTemplate, itemFilterKey, didChangeSelection, panel, currentFocus;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    items = param.items, itemTemplate = param.itemTemplate, itemFilterKey = param.itemFilterKey, didChangeSelection = param.didChangeSelection;
                    currentFocus = document.activeElement;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        ,
                        3,
                        4
                    ]);
                    return [
                        4,
                        new Promise(function(resolve) {
                            var didChangeQuery;
                            var loadingMessage = "Loading...";
                            var emptyMessage;
                            var resolved = false;
                            var update = function(props) {
                                if (resolved) return;
                                (0, $2893351583386024$export$8080b7556d9d6445)(select.update(props));
                            };
                            if (typeof items === "function") {
                                didChangeQuery = function(query) {
                                    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                                        var timeout, is;
                                        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    timeout = setTimeout(function() {
                                                        return update({
                                                            loadingMessage: "Loading..."
                                                        });
                                                    }, 300);
                                                    return [
                                                        4,
                                                        items(query)
                                                    ];
                                                case 1:
                                                    is = _state.sent();
                                                    clearTimeout(timeout);
                                                    update({
                                                        items: is,
                                                        emptyMessage: "Nothing matches the search value",
                                                        loadingMessage: undefined
                                                    });
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    })();
                                };
                                loadingMessage = undefined;
                                emptyMessage = "Please enter a search value";
                            }
                            var select = new (0, ($parcel$interopDefault($8qw4J$atomselectlist)))({
                                items: [],
                                elementForItem: function(item) {
                                    return $8qw4J$etch.render(itemTemplate(item, select));
                                },
                                filterKeyForItem: function(item) {
                                    return "".concat(item[itemFilterKey]);
                                },
                                didChangeSelection: didChangeSelection,
                                didCancelSelection: function() {
                                    resolved = true;
                                    resolve(undefined);
                                },
                                didConfirmSelection: function(item) {
                                    resolved = true;
                                    resolve(item);
                                },
                                loadingMessage: loadingMessage,
                                didChangeQuery: didChangeQuery,
                                emptyMessage: emptyMessage,
                                itemsClassList: [
                                    "atom-typescript"
                                ]
                            });
                            if (typeof items !== "function") (0, $2893351583386024$export$8080b7556d9d6445)(Promise.resolve(items).then(function(is) {
                                update({
                                    items: is,
                                    loadingMessage: undefined
                                });
                            }));
                            panel = atom.workspace.addModalPanel({
                                item: select,
                                visible: true
                            });
                            select.focus();
                        })
                    ];
                case 2:
                    return [
                        2,
                        _state.sent()
                    ];
                case 3:
                    if (panel) panel.destroy();
                    if (currentFocus) currentFocus.focus();
                    return [
                        7
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }).apply(this, arguments);
}


// To allow using dependency injection, but avoid having to type a lot of boilerplate, we have the
// individual command files register themselves in the below map. When the package is initializing,
// the constructors are passed the deps and return the actual commands handlers.
var $095c7bfbba93f9a3$var$commands = [];
function $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da(selector, command, desc) {
    $095c7bfbba93f9a3$var$commands.push({
        selector: selector,
        command: command,
        desc: desc
    });
}
function $095c7bfbba93f9a3$export$7a6092e2ae7e1845() {
    return $095c7bfbba93f9a3$var$commands;
}


(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:find-references", function(deps) {
    return {
        description: "Find where symbol under text cursor is referenced",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var location, client, result;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            location = (0, $7580a2909a181bf5$export$f25e34a2b31a939c)(editor);
                            if (!location) return [
                                2
                            ];
                            return [
                                4,
                                deps.getClient(location.file)
                            ];
                        case 1:
                            client = _state.sent();
                            return [
                                4,
                                client.execute("references", location)
                            ];
                        case 2:
                            result = _state.sent();
                            return [
                                4,
                                $bd6f96bfb4d02b8e$export$2904681fe8c977be(result, editor, deps.histGoForward)
                            ];
                        case 3:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
});
function $bd6f96bfb4d02b8e$export$2904681fe8c977be(result, editor, histGoForward) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var refs, res;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    refs = Promise.all(result.body.refs.map(function(ref) {
                        return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                            var _a, _b, fileContents, context, fileHlText, lineText;
                            return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            new Promise(function(resolve, reject) {
                                                return $8qw4J$fs.readFile(ref.file, function(error, data) {
                                                    if (error) reject(error);
                                                    else resolve(data.toString("utf-8"));
                                                });
                                            })
                                        ];
                                    case 1:
                                        fileContents = _state.sent().split(/\r?\n/g);
                                        context = ref.contextStart !== undefined && ref.contextEnd !== undefined ? fileContents.slice(ref.contextStart.line - 1, ref.contextEnd.line) : fileContents;
                                        return [
                                            4,
                                            (0, $cf8cb216522ae432$export$e4043f67d36cbb26)(context.join("\n"), "source.tsx")
                                        ];
                                    case 2:
                                        fileHlText = _state.sent().split("\n");
                                        lineText = fileHlText[ref.start.line - ((_b = (_a = ref.contextStart) === null || _a === void 0 ? void 0 : _a.line) !== null && _b !== void 0 ? _b : 1)];
                                        return [
                                            2,
                                            (0, $8qw4J$swchelperscjs_object_spread_propscjs._)((0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, ref), {
                                                hlText: lineText
                                            })
                                        ];
                                }
                            });
                        })();
                    }));
                    return [
                        4,
                        (0, $f55d59ecd155c40a$export$12cb8c60c107136e)({
                            items: refs,
                            itemTemplate: function(item, ctx) {
                                return $8qw4J$etch.dom("li", null, $8qw4J$etch.dom((0, $5f8857790714307e$export$31d5f5740e2c2887), {
                                    label: atom.project.relativize(item.file),
                                    query: ctx.getFilterQuery()
                                }), $8qw4J$etch.dom("div", {
                                    className: "pull-right"
                                }, "line: ", item.start.line), $8qw4J$etch.dom((0, $3a2f125535af08fb$export$275be3d1a3f62fb), {
                                    highlightedText: item.hlText
                                }));
                            },
                            itemFilterKey: "file"
                        })
                    ];
                case 1:
                    res = _state.sent();
                    if (!res) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        histGoForward(editor, res)
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    return [
                        2
                    ];
            }
        });
    })();
}









(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:go-to-declaration", function(deps) {
    return {
        description: "Go to declaration of symbol under text cursor",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var location, client, result;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            location = (0, $7580a2909a181bf5$export$f25e34a2b31a939c)(editor);
                            if (!location) return [
                                2
                            ];
                            return [
                                4,
                                deps.getClient(location.file)
                            ];
                        case 1:
                            client = _state.sent();
                            return [
                                4,
                                client.execute("definition", location)
                            ];
                        case 2:
                            result = _state.sent();
                            return [
                                4,
                                $71d6fd6c1ba3e8dc$export$680a91dbc2dcff04(result, editor, deps.histGoForward)
                            ];
                        case 3:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
});
function $71d6fd6c1ba3e8dc$export$680a91dbc2dcff04(result, editor, histGoForward) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var res;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!!result.body) return [
                        3,
                        1
                    ];
                    return [
                        2
                    ];
                case 1:
                    if (!(result.body.length > 1)) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        (0, $f55d59ecd155c40a$export$12cb8c60c107136e)({
                            items: result.body,
                            itemTemplate: function(item, ctx) {
                                return $8qw4J$etch.dom("li", null, $8qw4J$etch.dom((0, $5f8857790714307e$export$31d5f5740e2c2887), {
                                    label: item.file,
                                    query: ctx.getFilterQuery()
                                }), $8qw4J$etch.dom("div", {
                                    className: "pull-right"
                                }, "line: ", item.start.line));
                            },
                            itemFilterKey: "file"
                        })
                    ];
                case 2:
                    res = _state.sent();
                    if (!res) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        histGoForward(editor, res)
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    return [
                        3,
                        7
                    ];
                case 5:
                    if (!(result.body.length > 0)) return [
                        3,
                        7
                    ];
                    return [
                        4,
                        histGoForward(editor, result.body[0])
                    ];
                case 6:
                    _state.sent();
                    _state.label = 7;
                case 7:
                    return [
                        2
                    ];
            }
        });
    })();
}



function $f208e1245e4db9fc$export$51c07c30fb16d966(getClient, histGoForward) {
    return {
        priority: 0,
        providerName: "typescript-hyperclick-provider",
        wordRegExp: /([A-Za-z0-9_])+|['"`](\\.|[^'"`\\\\])*['"`]/g,
        getSuggestionForWord: function(editor, _text, range) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var filePath;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    if (!(0, $7580a2909a181bf5$export$3aecee58e23ede2c)(editor)) return [
                        2
                    ];
                    filePath = editor.getPath();
                    if (filePath === undefined) return [
                        2
                    ];
                    return [
                        2,
                        {
                            range: range,
                            callback: function() {
                                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                                    var _a, location, client, result, resLoc, references;
                                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                location = {
                                                    file: filePath,
                                                    line: range.start.row + 1,
                                                    offset: range.start.column + 1
                                                };
                                                return [
                                                    4,
                                                    getClient(location.file)
                                                ];
                                            case 1:
                                                client = _state.sent();
                                                return [
                                                    4,
                                                    client.execute("definition", location)
                                                ];
                                            case 2:
                                                result = _state.sent();
                                                resLoc = result.body ? result.body[0] : undefined;
                                                if (!(((_a = result.body) === null || _a === void 0 ? void 0 : _a.length) === 1 && (resLoc === null || resLoc === void 0 ? void 0 : resLoc.start.line) === location.line && (resLoc === null || resLoc === void 0 ? void 0 : resLoc.start.offset) === location.offset)) return [
                                                    3,
                                                    5
                                                ];
                                                return [
                                                    4,
                                                    client.execute("references", location)
                                                ];
                                            case 3:
                                                references = _state.sent();
                                                return [
                                                    4,
                                                    (0, $bd6f96bfb4d02b8e$export$2904681fe8c977be)(references, editor, histGoForward)
                                                ];
                                            case 4:
                                                _state.sent();
                                                return [
                                                    3,
                                                    7
                                                ];
                                            case 5:
                                                return [
                                                    4,
                                                    (0, $71d6fd6c1ba3e8dc$export$680a91dbc2dcff04)(result, editor, histGoForward)
                                                ];
                                            case 6:
                                                _state.sent();
                                                _state.label = 7;
                                            case 7:
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                })();
                            }
                        }
                    ];
                });
            })();
        }
    };
}





function $c5ee2b7644db248e$export$2b92277a69331cbb(getClient) {
    return {
        name: "Atom-TypeScript",
        grammarScopes: (0, $7580a2909a181bf5$export$d9994fe0923974a5)(),
        priority: 100,
        updateOnEdit: true,
        getOutline: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var filePath, client, navTreeResult, navTree;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            filePath = editor.getPath();
                            if (filePath === undefined) return [
                                2
                            ];
                            return [
                                4,
                                getClient(filePath)
                            ];
                        case 1:
                            client = _state.sent();
                            return [
                                4,
                                client.execute("navtree", {
                                    file: filePath
                                })
                            ];
                        case 2:
                            navTreeResult = _state.sent();
                            navTree = navTreeResult.body;
                            if (!navTree) return [
                                2
                            ];
                            return [
                                2,
                                {
                                    outlineTrees: [
                                        $c5ee2b7644db248e$var$navTreeToOutline(navTree)
                                    ]
                                }
                            ];
                    }
                });
            })();
        }
    };
}
function $c5ee2b7644db248e$var$navTreeToOutline(navTree) {
    var ranges = navTree.spans.map((0, $ee93806a41573bb4$export$477d491a08b070ec));
    var range = ranges.reduce(function(prev, cur) {
        return cur.union(prev);
    });
    return {
        kind: $c5ee2b7644db248e$var$kindMap[navTree.kind],
        plainText: navTree.text,
        startPosition: range.start,
        endPosition: range.end,
        landingPosition: navTree.nameSpan ? (0, $ee93806a41573bb4$export$477d491a08b070ec)(navTree.nameSpan).start : undefined,
        children: navTree.childItems ? navTree.childItems.map($c5ee2b7644db248e$var$navTreeToOutline).sort($c5ee2b7644db248e$var$compareNodes) : []
    };
}
function $c5ee2b7644db248e$var$compareNodes(a, b) {
    var apos = a.landingPosition ? a.landingPosition : a.startPosition;
    var bpos = b.landingPosition ? b.landingPosition : b.startPosition;
    return apos.compare(bpos);
}
var $c5ee2b7644db248e$var$kindMap = {
    // | "file"
    directory: "file",
    // | "module"
    module: "module",
    "external module name": "module",
    // | "namespace"
    // | "package"
    // | "class"
    "class": "class",
    "local class": "class",
    // | "method"
    method: "method",
    // | "property"
    property: "property",
    getter: "property",
    setter: "property",
    // | "field"
    "JSX attribute": "field",
    // | "constructor"
    constructor: "constructor",
    // | "enum"
    "enum": "enum",
    // | "interface"
    interface: "interface",
    type: "interface",
    // | "function"
    "function": "function",
    "local function": "function",
    // | "variable"
    label: "variable",
    alias: "variable",
    "var": "variable",
    let: "variable",
    "local var": "variable",
    parameter: "variable",
    // | "constant"
    "enum member": "constant",
    "const": "constant",
    // | "string"
    string: "string",
    // | "number"
    // | "boolean"
    // | "array"
    // ???
    "": undefined,
    warning: undefined,
    keyword: undefined,
    script: undefined,
    call: undefined,
    index: undefined,
    construct: undefined,
    "type parameter": undefined,
    "primitive type": undefined
};








var $f0827e2fd290d654$export$11ab8206b5e263e8 = /*#__PURE__*/ function() {
    "use strict";
    function TSSigHelpProvider(getClient) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, TSSigHelpProvider);
        this.getClient = getClient;
        this.triggerCharacters = new Set([]);
        this.grammarScopes = (0, $7580a2909a181bf5$export$d9994fe0923974a5)();
        this.priority = 100;
        this.disposables = new (0, $8qw4J$atom.CompositeDisposable)();
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(TSSigHelpProvider, [
        {
            key: "dispose",
            value: function dispose() {
                this.disposables.dispose();
            }
        },
        {
            key: "getSignatureHelp",
            value: function getSignatureHelp(editor, pos) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var filePath, client, result, data, signatures, _;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    3,
                                    ,
                                    4
                                ]);
                                filePath = editor.getPath();
                                if (filePath === undefined) return [
                                    2
                                ];
                                return [
                                    4,
                                    this.getClient(filePath)
                                ];
                            case 1:
                                client = _state.sent();
                                return [
                                    4,
                                    client.execute("signatureHelp", {
                                        file: filePath,
                                        line: pos.row + 1,
                                        offset: pos.column + 1
                                    })
                                ];
                            case 2:
                                result = _state.sent();
                                data = result.body;
                                signatures = data.items.map((0, $ee93806a41573bb4$export$9db02c2ec8f703d4));
                                return [
                                    2,
                                    {
                                        signatures: signatures,
                                        activeParameter: data.argumentIndex,
                                        activeSignature: data.selectedItemIndex
                                    }
                                ];
                            case 3:
                                _ = _state.sent();
                                return [
                                    2
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ]);
    return TSSigHelpProvider;
}();


// more: https://github.com/atom-community/autocomplete-plus/wiki/Provider-API











function $d649cd8c04ef312c$export$d94405aa3cc9bfda(codeAction) {
    return $8qw4J$etch.dom("li", null, codeAction.description);
}




var $2a2076bfbea7a68e$export$536c67bf76d43cfb = /*#__PURE__*/ function() {
    "use strict";
    function AutocompleteProvider(getClient, applyEdits) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, AutocompleteProvider);
        this.getClient = getClient;
        this.applyEdits = applyEdits;
        this.selector = (0, $7580a2909a181bf5$export$d9994fe0923974a5)().map(function(x) {
            return x.includes(".") ? ".".concat(x) : x;
        }).join(", ");
        this.inclusionPriority = atom.config.get("atom-typescript-updated").autocompletionInclusionPriority;
        this.suggestionPriority = atom.config.get("atom-typescript-updated").autocompletionSuggestionPriority;
        this.excludeLowerPriority = atom.config.get("atom-typescript-updated").autocompletionExcludeLowerPriority;
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(AutocompleteProvider, [
        {
            key: "getSuggestions",
            value: function getSuggestions(opts) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var _this, location, prefix, triggerCharacter, suggestions, config, ignoreCase, longestFirst, score, filter, _;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                location = $2a2076bfbea7a68e$var$getLocationQuery(opts);
                                prefix = $2a2076bfbea7a68e$var$getPrefix(opts);
                                if (!location) return [
                                    2,
                                    []
                                ];
                                // Don't auto-show autocomplete if prefix is empty unless last character is '.'
                                triggerCharacter = $2a2076bfbea7a68e$var$getTrigger($2a2076bfbea7a68e$var$getLastNonWhitespaceChar(opts.editor.getBuffer(), opts.bufferPosition));
                                if (!prefix && !opts.activatedManually && !triggerCharacter) return [
                                    2,
                                    []
                                ];
                                // Don't show autocomplete if we're in a string.template and not in a template expression
                                if ($2a2076bfbea7a68e$var$containsScope(opts.scopeDescriptor.getScopesArray(), "string.template.") && !$2a2076bfbea7a68e$var$containsScope(opts.scopeDescriptor.getScopesArray(), "template.expression.")) return [
                                    2,
                                    []
                                ];
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    this.getSuggestionsWithCache({
                                        prefix: prefix,
                                        location: location,
                                        triggerCharacter: triggerCharacter,
                                        activatedManually: opts.activatedManually
                                    })
                                ];
                            case 2:
                                suggestions = _state.sent();
                                config = atom.config.get("atom-typescript-updated");
                                if (config.autocompletionUseFuzzyFilter) suggestions = $8qw4J$fuzzaldrin.filter(suggestions, prefix, {
                                    key: "displayText"
                                });
                                else {
                                    ignoreCase = config.autocompletionStrictFilterIgnoreCase;
                                    longestFirst = config.autocompletionStrictFilterLongestMatchFirst;
                                    score = ignoreCase ? function(text) {
                                        var pos = text.toLowerCase().indexOf(prefix.toLowerCase());
                                        var length = text.length * (longestFirst ? -1 : 1);
                                        var exact = text.includes(prefix) && prefix.toLowerCase() !== prefix ? -10000 : 0;
                                        return 100 * pos + exact + length;
                                    } : function(text) {
                                        var pos = text.indexOf(prefix);
                                        var length = text.length * (longestFirst ? -1 : 1);
                                        return 100 * pos + length;
                                    };
                                    filter = ignoreCase ? function(val) {
                                        var _a;
                                        return (_a = val.displayText) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(prefix.toLowerCase());
                                    } : function(val) {
                                        var _a;
                                        return (_a = val.displayText) === null || _a === void 0 ? void 0 : _a.includes(prefix);
                                    };
                                    suggestions = suggestions.filter(filter).sort(function(a, b) {
                                        return score(a.displayText) - score(b.displayText);
                                    });
                                }
                                return [
                                    2,
                                    suggestions.map(function(suggestion) {
                                        return (0, $8qw4J$swchelperscjs_object_spreadcjs._)({
                                            replacementPrefix: suggestion.replacementRange ? opts.editor.getTextInBufferRange(suggestion.replacementRange) : prefix,
                                            location: location
                                        }, _this.getDetailsFromCache(suggestion), $2a2076bfbea7a68e$var$addCallableParens(opts, suggestion));
                                    })
                                ];
                            case 3:
                                _ = _state.sent();
                                return [
                                    2,
                                    []
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "getSuggestionDetailsOnSelect",
            value: function getSuggestionDetailsOnSelect(suggestion) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        if ("text" in suggestion && !("rightLabel" in suggestion)) return [
                            2,
                            this.getAdditionalDetails(suggestion)
                        ];
                        else return [
                            2,
                            null
                        ];
                        return [
                            2
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "onDidInsertSuggestion",
            value: function onDidInsertSuggestion(evt) {
                var _this = this;
                var s = evt.suggestion;
                if (!s.hasAction) return;
                if (!this.lastSuggestions) return;
                var client = this.lastSuggestions.client;
                var details = this.getDetailsFromCache(s);
                (0, $2893351583386024$export$8080b7556d9d6445)(function() {
                    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                        var action;
                        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!!details) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        this.getAdditionalDetails(s)
                                    ];
                                case 1:
                                    details = _state.sent();
                                    _state.label = 2;
                                case 2:
                                    if (!(details === null || details === void 0 ? void 0 : details.details.codeActions)) return [
                                        2
                                    ];
                                    if (!(details.details.codeActions.length === 1)) return [
                                        3,
                                        3
                                    ];
                                    action = details.details.codeActions[0];
                                    return [
                                        3,
                                        5
                                    ];
                                case 3:
                                    return [
                                        4,
                                        (0, $f55d59ecd155c40a$export$12cb8c60c107136e)({
                                            items: details.details.codeActions,
                                            itemTemplate: (0, $d649cd8c04ef312c$export$d94405aa3cc9bfda),
                                            itemFilterKey: "description"
                                        })
                                    ];
                                case 4:
                                    action = _state.sent();
                                    _state.label = 5;
                                case 5:
                                    if (!action) return [
                                        2
                                    ];
                                    return [
                                        4,
                                        this.applyEdits(action.changes)
                                    ];
                                case 6:
                                    _state.sent();
                                    if (!action.commands) return [
                                        2
                                    ];
                                    return [
                                        4,
                                        Promise.all(action.commands.map(function(cmd) {
                                            return client.execute("applyCodeActionCommand", {
                                                command: cmd
                                            });
                                        }))
                                    ];
                                case 7:
                                    _state.sent();
                                    return [
                                        2
                                    ];
                            }
                        });
                    }).call(_this);
                }());
            }
        },
        {
            key: "getAdditionalDetails",
            value: function getAdditionalDetails(suggestion) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var _a, reply, _reply_body, details, parts, rightLabel, actionDesc, description;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (suggestion.identifier === undefined) return [
                                    2,
                                    null
                                ];
                                if (!this.lastSuggestions) return [
                                    2,
                                    null
                                ];
                                return [
                                    4,
                                    this.lastSuggestions.client.execute("completionEntryDetails", (0, $8qw4J$swchelperscjs_object_spreadcjs._)({
                                        entryNames: [
                                            suggestion.identifier
                                        ]
                                    }, this.lastSuggestions.location))
                                ];
                            case 1:
                                reply = _state.sent();
                                if (!reply.body) return [
                                    2,
                                    null
                                ];
                                _reply_body = (0, $8qw4J$swchelperscjs_sliced_to_arraycjs._)(reply.body, 1), details = _reply_body[0];
                                // apparently, details can be undefined
                                if (!details) return [
                                    2,
                                    null
                                ];
                                parts = details.displayParts;
                                if (parts.length >= 3 && parts[0].text === "(" && parts[1].text === suggestion.leftLabel && parts[2].text === ")") parts = parts.slice(3);
                                rightLabel = parts.map(function(d) {
                                    return d.text;
                                }).join("");
                                actionDesc = suggestion.hasAction && ((_a = details.codeActions) === null || _a === void 0 ? void 0 : _a.length) === 1 ? "".concat(details.codeActions[0].description, "\n\n") : "";
                                if (actionDesc) rightLabel = actionDesc;
                                description = actionDesc + details.displayParts.map(function(d) {
                                    return d.text;
                                }).join("") + (details.documentation ? "\n\n" + details.documentation.map(function(d) {
                                    return d.text;
                                }).join(" ") : "");
                                this.lastSuggestions.details.set(suggestion.displayText, {
                                    details: details,
                                    rightLabel: rightLabel,
                                    description: description
                                });
                                return [
                                    2,
                                    (0, $8qw4J$swchelperscjs_object_spread_propscjs._)((0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, suggestion), {
                                        details: details,
                                        rightLabel: rightLabel,
                                        description: description
                                    })
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "getDetailsFromCache",
            value: function getDetailsFromCache(suggestion) {
                if (!this.lastSuggestions) return null;
                var d = this.lastSuggestions.details.get(suggestion.displayText);
                if (!d) return null;
                return d;
            }
        },
        {
            key: "getSuggestionsWithCache",
            value: // Try to reuse the last completions we got from tsserver if they're for the same position.
            function getSuggestionsWithCache(_0) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function(param) {
                    var prefix, location, triggerCharacter, activatedManually, lastLoc, lastCol, thisCol, client, suggestions;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                prefix = param.prefix, location = param.location, triggerCharacter = param.triggerCharacter, activatedManually = param.activatedManually;
                                if (this.lastSuggestions && !activatedManually) {
                                    lastLoc = this.lastSuggestions.location;
                                    lastCol = $2a2076bfbea7a68e$var$getNormalizedCol(this.lastSuggestions.prefix, lastLoc.offset);
                                    thisCol = $2a2076bfbea7a68e$var$getNormalizedCol(prefix, location.offset);
                                    if (lastLoc.file === location.file && lastLoc.line === location.line && lastCol === thisCol) {
                                        if (this.lastSuggestions.suggestions.length !== 0) return [
                                            2,
                                            this.lastSuggestions.suggestions
                                        ];
                                    }
                                }
                                return [
                                    4,
                                    this.getClient(location.file)
                                ];
                            case 1:
                                client = _state.sent();
                                return [
                                    4,
                                    $2a2076bfbea7a68e$var$getSuggestionsInternal({
                                        client: client,
                                        location: location,
                                        triggerCharacter: activatedManually ? undefined : triggerCharacter
                                    })
                                ];
                            case 2:
                                suggestions = _state.sent();
                                this.lastSuggestions = {
                                    client: client,
                                    location: location,
                                    prefix: prefix,
                                    suggestions: suggestions,
                                    details: new Map()
                                };
                                return [
                                    2,
                                    suggestions
                                ];
                        }
                    });
                }).apply(this, arguments);
            }
        }
    ]);
    return AutocompleteProvider;
}();
function $2a2076bfbea7a68e$var$getSuggestionsInternal(_0) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function(param) {
        var client, location, triggerCharacter, _a, completions, completions1;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    client = param.client, location = param.location, triggerCharacter = param.triggerCharacter;
                    if (!(parseInt(client.version.split(".")[0], 10) >= 3)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        client.execute("completionInfo", (0, $8qw4J$swchelperscjs_object_spreadcjs._)({
                            includeExternalModuleExports: false,
                            includeInsertTextCompletions: true,
                            triggerCharacter: triggerCharacter
                        }, location))
                    ];
                case 1:
                    completions = _state.sent();
                    return [
                        2,
                        completions.body.entries.map($2a2076bfbea7a68e$var$completionEntryToSuggestion.bind(null, (_a = completions.body) === null || _a === void 0 ? void 0 : _a.isMemberCompletion))
                    ];
                case 2:
                    return [
                        4,
                        client.execute("completions", (0, $8qw4J$swchelperscjs_object_spreadcjs._)({
                            includeExternalModuleExports: false,
                            includeInsertTextCompletions: true
                        }, location))
                    ];
                case 3:
                    completions1 = _state.sent();
                    return [
                        2,
                        completions1.body.map($2a2076bfbea7a68e$var$completionEntryToSuggestion.bind(null, undefined))
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }).apply(this, arguments);
}
// this should more or less match ES6 specification for valid identifiers
var $2a2076bfbea7a68e$var$identifierMatch = RegExp("(?:(?![\\u{10000}-\\u{10FFFF}])[$_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}])(?:(?![\\u{10000}-\\u{10FFFF}])[$_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\u200C\\u200D\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])*$", "u");
// Decide what needs to be replaced in the editor buffer when inserting the completion
function $2a2076bfbea7a68e$var$getPrefix(opts) {
    // see https://github.com/albert200000/atom-typescript/issues/1528
    // for the motivating example.
    var line = opts.editor.getBuffer().getTextInRange([
        [
            opts.bufferPosition.row,
            0
        ],
        opts.bufferPosition
    ]);
    var idMatch = line.match($2a2076bfbea7a68e$var$identifierMatch);
    if (idMatch) return idMatch[0];
    else return "";
}
// When the user types each character in ".hello", we want to normalize the column such that it's
// the same for every invocation of the getSuggestions. In this case, it would be right after "."
function $2a2076bfbea7a68e$var$getNormalizedCol(prefix, col) {
    var length = prefix === "." ? 0 : prefix.length;
    return col - length;
}
function $2a2076bfbea7a68e$var$getLocationQuery(opts) {
    var path = opts.editor.getPath();
    if (path === undefined) return undefined;
    return {
        file: path,
        line: opts.bufferPosition.row + 1,
        offset: opts.bufferPosition.column + 1
    };
}
function $2a2076bfbea7a68e$var$getLastNonWhitespaceChar(buffer, pos) {
    var lastChar;
    var range = new $8qw4J$atom.Range([
        0,
        0
    ], pos);
    buffer.backwardsScanInRange(/\S/, range, function(param) {
        var matchText = param.matchText, stop = param.stop;
        lastChar = matchText;
        stop();
    });
    return lastChar;
}
function $2a2076bfbea7a68e$var$containsScope(scopes, matchScope) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = scopes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var scope = _step.value;
            if (scope.includes(matchScope)) return true;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return false;
}
function $2a2076bfbea7a68e$var$completionEntryToSuggestion(isMemberCompletion, entry) {
    return {
        displayText: entry.name,
        text: entry.insertText !== undefined ? entry.insertText : entry.name,
        leftLabel: entry.kind,
        replacementRange: entry.replacementSpan ? (0, $ee93806a41573bb4$export$477d491a08b070ec)(entry.replacementSpan) : undefined,
        type: $2a2076bfbea7a68e$var$kindMap[entry.kind],
        isMemberCompletion: isMemberCompletion,
        identifier: entry.source !== undefined ? {
            name: entry.name,
            source: entry.source
        } : entry.name,
        hasAction: entry.hasAction
    };
}
function $2a2076bfbea7a68e$var$parens(opts) {
    var buffer = opts.editor.getBuffer();
    var pt = opts.bufferPosition;
    var lookahead = buffer.getTextInRange([
        pt,
        [
            pt.row,
            buffer.lineLengthForRow(pt.row)
        ]
    ]);
    return !!lookahead.match(/\s*\(/);
}
function $2a2076bfbea7a68e$var$addCallableParens(opts, s) {
    if (atom.config.get("atom-typescript-updated.autocompleteParens") && [
        "function",
        "method"
    ].includes(s.leftLabel) && !$2a2076bfbea7a68e$var$parens(opts)) return (0, $8qw4J$swchelperscjs_object_spread_propscjs._)((0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, s), {
        snippet: "".concat(s.text, "($1)"),
        text: undefined
    });
    else return s;
}
var $2a2076bfbea7a68e$var$kindMap = {
    directory: "require",
    module: "import",
    "external module name": "import",
    "class": "class",
    "local class": "class",
    method: "method",
    property: "property",
    getter: "property",
    setter: "property",
    "JSX attribute": "property",
    constructor: "method",
    "enum": "type",
    interface: "type",
    type: "type",
    "type parameter": "type",
    "primitive type": "type",
    "function": "function",
    "local function": "function",
    label: "variable",
    alias: "import",
    "var": "variable",
    let: "variable",
    "local var": "variable",
    parameter: "variable",
    "enum member": "constant",
    "const": "constant",
    string: "value",
    keyword: "keyword",
    "": undefined,
    warning: undefined,
    script: undefined,
    call: undefined,
    index: undefined,
    construct: undefined
};
// This may look strange, but it guarantees the list is consistent with the type
var $2a2076bfbea7a68e$var$triggerCharactersMap = {
    ".": null,
    '"': null,
    "'": null,
    "`": null,
    "/": null,
    "@": null,
    "<": null,
    "#": null
};
var $2a2076bfbea7a68e$var$triggerCharacters = new Set(Object.keys($2a2076bfbea7a68e$var$triggerCharactersMap));
function $2a2076bfbea7a68e$var$getTrigger(prefix) {
    if (prefix === undefined) return undefined;
    if (!prefix) return undefined;
    var c = prefix.slice(-1);
    if ($2a2076bfbea7a68e$var$triggerCharacters.has(c)) return c;
    return undefined;
}

















(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:refactor-selection", function(deps) {
    return {
        description: "Get a list of applicable refactors to selected code",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var location, selection, client, fileRange, actions, selectedAction;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            location = (0, $7580a2909a181bf5$export$f25e34a2b31a939c)(editor);
                            if (!location) return [
                                2
                            ];
                            selection = editor.getSelectedBufferRange();
                            return [
                                4,
                                deps.getClient(location.file)
                            ];
                        case 1:
                            client = _state.sent();
                            fileRange = selection.isEmpty() ? location : {
                                file: location.file,
                                startLine: selection.start.row + 1,
                                startOffset: selection.start.column + 1,
                                endLine: selection.end.row + 1,
                                endOffset: selection.end.column + 1
                            };
                            return [
                                4,
                                $26fcb69652a12722$export$724868632c285078(client, fileRange)
                            ];
                        case 2:
                            actions = _state.sent();
                            if (actions.length === 0) {
                                atom.notifications.addInfo("AtomTS: No applicable refactors for the selection");
                                return [
                                    2
                                ];
                            }
                            return [
                                4,
                                (0, $f55d59ecd155c40a$export$12cb8c60c107136e)({
                                    items: actions,
                                    itemTemplate: function(item, ctx) {
                                        return $8qw4J$etch.dom("li", null, $8qw4J$etch.dom((0, $5f8857790714307e$export$31d5f5740e2c2887), {
                                            label: "".concat(item.refactorDescription, ": ").concat(item.actionDescription),
                                            query: ctx.getFilterQuery()
                                        }));
                                    },
                                    itemFilterKey: "actionDescription"
                                })
                            ];
                        case 3:
                            selectedAction = _state.sent();
                            if (selectedAction === undefined) return [
                                2
                            ];
                            return [
                                4,
                                $26fcb69652a12722$export$5522d657b0b2f30(selectedAction, client, deps)
                            ];
                        case 4:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
});
function $26fcb69652a12722$export$724868632c285078(client, pointOrRange) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var responseApplicable, actions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator, _step, refactor, _iterator1, _step1, action;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        $26fcb69652a12722$var$getApplicabeRefactors(client, pointOrRange)
                    ];
                case 1:
                    responseApplicable = _state.sent();
                    if (!responseApplicable) return [
                        2,
                        []
                    ];
                    if (responseApplicable.body === undefined || responseApplicable.body.length === 0) return [
                        2,
                        []
                    ];
                    actions = [];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(_iterator = responseApplicable.body[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                            refactor = _step.value;
                            try {
                                for(_iterator1 = refactor.actions[Symbol.iterator](); !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                                    action = _step1.value;
                                    actions.push({
                                        refactorName: refactor.name,
                                        refactorDescription: refactor.description,
                                        refactorRange: pointOrRange,
                                        actionName: action.name,
                                        actionDescription: action.description,
                                        inlineable: refactor.inlineable !== undefined ? refactor.inlineable : true
                                    });
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator1["return"] != null) {
                                        _iterator1["return"]();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator["return"] != null) {
                                _iterator["return"]();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    return [
                        2,
                        actions
                    ];
            }
        });
    })();
}
function $26fcb69652a12722$var$getApplicabeRefactors(client, pointOrRange) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var e;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        client.execute("getApplicableRefactors", (0, $8qw4J$swchelperscjs_object_spreadcjs._)({
                            triggerReason: "invoked"
                        }, pointOrRange))
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
                case 2:
                    e = _state.sent();
                    return [
                        2,
                        undefined
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    })();
}
function $26fcb69652a12722$export$5522d657b0b2f30(selectedAction, client, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var responseEdits, _responseEdits_body, edits, renameFilename, renameLocation, editor;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        client.execute("getEditsForRefactor", (0, $8qw4J$swchelperscjs_object_spread_propscjs._)((0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, selectedAction.refactorRange), {
                            refactor: selectedAction.refactorName,
                            action: selectedAction.actionName
                        }))
                    ];
                case 1:
                    responseEdits = _state.sent();
                    if (responseEdits.body === undefined) return [
                        2
                    ];
                    _responseEdits_body = responseEdits.body, edits = _responseEdits_body.edits, renameFilename = _responseEdits_body.renameFilename, renameLocation = _responseEdits_body.renameLocation;
                    return [
                        4,
                        deps.applyEdits(edits)
                    ];
                case 2:
                    _state.sent();
                    if (renameFilename === undefined || renameLocation === undefined) return [
                        2
                    ];
                    return [
                        4,
                        atom.workspace.open(renameFilename, {
                            searchAllPanes: true,
                            initialLine: renameLocation.line - 1,
                            initialColumn: renameLocation.offset - 1
                        })
                    ];
                case 3:
                    editor = _state.sent();
                    return [
                        4,
                        atom.commands.dispatch(atom.views.getView(editor), "typescript:rename-refactor")
                    ];
                case 4:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    })();
}



var $e0bcaafd270c879a$export$9262ee226e3cab9d = /*#__PURE__*/ function() {
    "use strict";
    function CodefixProvider(clientResolver, errorPusher, applyEdits) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, CodefixProvider);
        this.clientResolver = clientResolver;
        this.errorPusher = errorPusher;
        this.applyEdits = applyEdits;
        this.supportedFixes = new WeakMap();
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(CodefixProvider, [
        {
            key: "getFixableRanges",
            value: function getFixableRanges(textEditor, range) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var filePath, errors, client, supportedCodes, ranges;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                filePath = textEditor.getPath();
                                if (filePath === undefined) return [
                                    2,
                                    []
                                ];
                                errors = this.errorPusher.getErrorsInRange(filePath, range);
                                return [
                                    4,
                                    this.clientResolver.get(filePath)
                                ];
                            case 1:
                                client = _state.sent();
                                return [
                                    4,
                                    this.getSupportedFixes(client)
                                ];
                            case 2:
                                supportedCodes = _state.sent();
                                ranges = Array.from(errors).filter(function(error) {
                                    return error.code !== undefined && supportedCodes.has(error.code);
                                }).map(function(error) {
                                    return (0, $ee93806a41573bb4$export$477d491a08b070ec)(error);
                                });
                                return [
                                    2,
                                    ranges
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "runCodeFix",
            value: function runCodeFix(textEditor, bufferPosition) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var _results, filePath, client, supportedCodes, requests, fixes, results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, result, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, fix, refactors;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                filePath = textEditor.getPath();
                                if (filePath === undefined) return [
                                    2,
                                    []
                                ];
                                return [
                                    4,
                                    this.clientResolver.get(filePath)
                                ];
                            case 1:
                                client = _state.sent();
                                return [
                                    4,
                                    this.getSupportedFixes(client)
                                ];
                            case 2:
                                supportedCodes = _state.sent();
                                requests = Array.from(this.errorPusher.getErrorsAt(filePath, bufferPosition)).filter(function(error) {
                                    return error.code !== undefined && supportedCodes.has(error.code);
                                }).map(function(error) {
                                    return client.execute("getCodeFixes", {
                                        file: filePath,
                                        startLine: error.start.line,
                                        startOffset: error.start.offset,
                                        endLine: error.end.line,
                                        endOffset: error.end.offset,
                                        errorCodes: [
                                            error.code
                                        ]
                                    });
                                });
                                return [
                                    4,
                                    Promise.all(requests)
                                ];
                            case 3:
                                fixes = _state.sent();
                                results = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = fixes[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        result = _step.value;
                                        _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                        if (result.body) try {
                                            for(_iterator1 = result.body[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                                fix = _step1.value;
                                                results.push(fix);
                                            }
                                        } catch (err) {
                                            _didIteratorError1 = true;
                                            _iteratorError1 = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion1 && _iterator1["return"] != null) {
                                                    _iterator1["return"]();
                                                }
                                            } finally{
                                                if (_didIteratorError1) {
                                                    throw _iteratorError1;
                                                }
                                            }
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                                            _iterator["return"]();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                return [
                                    4,
                                    (0, $26fcb69652a12722$export$724868632c285078)(client, (0, $8qw4J$swchelperscjs_object_spreadcjs._)({
                                        file: filePath
                                    }, (0, $ee93806a41573bb4$export$9978d8c48293dc72)(bufferPosition)))
                                ];
                            case 4:
                                refactors = _state.sent();
                                (_results = results).push.apply(_results, (0, $8qw4J$swchelperscjs_to_consumable_arraycjs._)(refactors));
                                return [
                                    2,
                                    results
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "applyFix",
            value: function applyFix(fix) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var client;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!("changes" in fix)) return [
                                    3,
                                    1
                                ];
                                return [
                                    2,
                                    this.applyEdits(fix.changes)
                                ];
                            case 1:
                                return [
                                    4,
                                    this.clientResolver.get(fix.refactorRange.file)
                                ];
                            case 2:
                                client = _state.sent();
                                return [
                                    2,
                                    (0, $26fcb69652a12722$export$5522d657b0b2f30)(fix, client, {
                                        applyEdits: this.applyEdits
                                    })
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "dispose",
            value: function dispose() {
            // NOOP
            }
        },
        {
            key: "getSupportedFixes",
            value: function getSupportedFixes(client) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var codes, result;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                codes = this.supportedFixes.get(client);
                                if (codes) return [
                                    2,
                                    codes
                                ];
                                return [
                                    4,
                                    client.execute("getSupportedCodeFixes")
                                ];
                            case 1:
                                result = _state.sent();
                                if (!result.body) throw new Error("No code fixes are supported");
                                codes = new Set(result.body.map(function(code) {
                                    return parseInt(code, 10);
                                }));
                                this.supportedFixes.set(client, codes);
                                return [
                                    2,
                                    codes
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ]);
    return CodefixProvider;
}();







function $a4b711801eb3f0ef$export$c0ac1f0dd4073b70(codefixProvider) {
    return {
        grammarScopes: [
            "*"
        ],
        getIntentions: function(_0) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function(param) {
                var bufferPosition, textEditor;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            bufferPosition = param.bufferPosition, textEditor = param.textEditor;
                            return [
                                4,
                                codefixProvider.runCodeFix(textEditor, bufferPosition)
                            ];
                        case 1:
                            return [
                                2,
                                _state.sent().map(function(fix) {
                                    return {
                                        priority: 100,
                                        title: "description" in fix ? fix.description : fix.actionDescription,
                                        selected: function() {
                                            (0, $2893351583386024$export$8080b7556d9d6445)(codefixProvider.applyFix(fix));
                                        }
                                    };
                                })
                            ];
                    }
                });
            }).apply(this, arguments);
        }
    };
}
function $a4b711801eb3f0ef$export$bbfa3896d0c562e(codefixProvider) {
    return {
        grammarScopes: [
            "*"
        ],
        getIntentions: function(_0) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function(param) {
                var visibleRange, textEditor;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            visibleRange = param.visibleRange, textEditor = param.textEditor;
                            return [
                                4,
                                codefixProvider.getFixableRanges(textEditor, visibleRange)
                            ];
                        case 1:
                            return [
                                2,
                                _state.sent().map(function(range) {
                                    return {
                                        range: range,
                                        created: function(_opts) {
                                        // NOOP
                                        }
                                    };
                                })
                            ];
                    }
                });
            }).apply(this, arguments);
        }
    };
}













(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:build", function(deps) {
    return {
        description: "Compile all files in project related to current active text editor",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var file, client, projectInfo, files, filesSoFar, promises, results, error, err;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            file = editor.getPath();
                            if (file === undefined) return [
                                2
                            ];
                            return [
                                4,
                                deps.getClient(file)
                            ];
                        case 1:
                            client = _state.sent();
                            deps.reportBuildStatus(undefined);
                            return [
                                4,
                                client.execute("projectInfo", {
                                    file: file,
                                    needFileNameList: true
                                })
                            ];
                        case 2:
                            projectInfo = _state.sent();
                            files = new Set(projectInfo.body.fileNames);
                            files["delete"](projectInfo.body.configFileName);
                            filesSoFar = 0;
                            promises = (0, $8qw4J$swchelperscjs_to_consumable_arraycjs._)(files.values()).map(function(f) {
                                return $8006872929ecb29e$var$_finally(client.execute("compileOnSaveEmitFile", {
                                    file: f,
                                    forced: true
                                }), function() {
                                    filesSoFar += 1;
                                    deps.reportProgress({
                                        max: files.size,
                                        value: filesSoFar
                                    });
                                });
                            });
                            _state.label = 3;
                        case 3:
                            _state.trys.push([
                                3,
                                5,
                                ,
                                6
                            ]);
                            return [
                                4,
                                Promise.all(promises)
                            ];
                        case 4:
                            results = _state.sent();
                            if (results.some(function(result) {
                                return result.body === false;
                            })) throw new Error("Emit failed");
                            deps.reportBuildStatus({
                                success: true
                            });
                            return [
                                3,
                                6
                            ];
                        case 5:
                            error = _state.sent();
                            err = error;
                            console.error(err);
                            deps.reportBuildStatus({
                                success: false,
                                message: err.message
                            });
                            return [
                                3,
                                6
                            ];
                        case 6:
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
});
function $8006872929ecb29e$var$_finally(promise, callback) {
    promise.then(callback, callback);
    return promise;
}






(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:check-all-files", function(deps) {
    return {
        description: "Typecheck all files in project related to current active text editor",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var _a, file, client, projectInfo, files, max, disp, cancelTimeout, disp1;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            file = editor.getPath();
                            if (file === undefined) return [
                                2
                            ];
                            return [
                                4,
                                deps.getClient(file)
                            ];
                        case 1:
                            client = _state.sent();
                            return [
                                4,
                                client.execute("projectInfo", {
                                    file: file,
                                    needFileNameList: true
                                })
                            ];
                        case 2:
                            projectInfo = _state.sent();
                            files = new Set((_a = projectInfo.body.fileNames) === null || _a === void 0 ? void 0 : _a.filter(function(fn) {
                                return(// filter out obvious potholes
                                !fn.endsWith("tsconfig.json") && !fn.includes("".concat($8qw4J$path.sep, "node_modules").concat($8qw4J$path.sep)));
                            }));
                            max = files.size;
                            if (!client.multistepSupported) return [
                                3,
                                4
                            ];
                            disp = client.on("syntaxDiag", function(evt) {
                                if ("file" in evt) files["delete"](evt.file);
                                deps.reportProgress({
                                    max: max,
                                    value: max - files.size
                                });
                            });
                            deps.reportProgress({
                                max: max,
                                value: 0
                            });
                            return [
                                4,
                                client.execute("geterrForProject", {
                                    file: file,
                                    delay: 0
                                })
                            ];
                        case 3:
                            _state.sent();
                            disp.dispose();
                            return [
                                3,
                                6
                            ];
                        case 4:
                            disp1 = client.on("syntaxDiag", function(evt) {
                                if (cancelTimeout !== undefined) window.clearTimeout(cancelTimeout);
                                cancelTimeout = window.setTimeout(function() {
                                    files.clear();
                                    disp1.dispose();
                                    deps.reportProgress({
                                        max: max,
                                        value: max
                                    });
                                }, 2000);
                                if ("file" in evt) files["delete"](evt.file);
                                if (files.size === 0) {
                                    disp1.dispose();
                                    window.clearTimeout(cancelTimeout);
                                }
                                deps.reportProgress({
                                    max: max,
                                    value: max - files.size
                                });
                            });
                            deps.reportProgress({
                                max: max,
                                value: 0
                            });
                            return [
                                4,
                                client.execute("geterrForProject", {
                                    file: file,
                                    delay: 0
                                })
                            ];
                        case 5:
                            _state.sent();
                            _state.label = 6;
                        case 6:
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
});



(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-workspace", "typescript:clear-errors", function(deps) {
    return {
        description: "Clear error messages",
        didDispatch: function() {
            deps.clearErrors();
        }
    };
});










(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:format-code", function(deps) {
    return {
        description: "Format code in currently active text editor",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var filePath, ranges, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, selection, end, client, edits, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, range, _edits, result, err;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            filePath = editor.getPath();
                            if (filePath === undefined) return [
                                2
                            ];
                            ranges = [];
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = editor.getSelectedBufferRanges()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    selection = _step.value;
                                    if (!selection.isEmpty()) ranges.push((0, $ee93806a41573bb4$export$430a7b9c6c8900f6)(selection));
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                                        _iterator["return"]();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                            // Format the whole document if there are no ranges added
                            if (ranges.length === 0) {
                                end = editor.getBuffer().getEndPosition();
                                ranges.push({
                                    line: 1,
                                    offset: 1,
                                    endLine: end.row + 1,
                                    endOffset: end.column + 1
                                });
                            }
                            return [
                                4,
                                deps.getClient(filePath)
                            ];
                        case 1:
                            client = _state.sent();
                            edits = [];
                            _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            _state.label = 2;
                        case 2:
                            _state.trys.push([
                                2,
                                7,
                                8,
                                9
                            ]);
                            _iterator1 = ranges[Symbol.iterator]();
                            _state.label = 3;
                        case 3:
                            if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                                3,
                                6
                            ];
                            range = _step1.value;
                            return [
                                4,
                                client.execute("format", (0, $8qw4J$swchelperscjs_object_spread_propscjs._)((0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, range), {
                                    file: filePath
                                }))
                            ];
                        case 4:
                            result = _state.sent();
                            if (result.body) (_edits = edits).push.apply(_edits, (0, $8qw4J$swchelperscjs_to_consumable_arraycjs._)(result.body));
                            _state.label = 5;
                        case 5:
                            _iteratorNormalCompletion1 = true;
                            return [
                                3,
                                3
                            ];
                        case 6:
                            return [
                                3,
                                9
                            ];
                        case 7:
                            err = _state.sent();
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                            return [
                                3,
                                9
                            ];
                        case 8:
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1["return"] != null) {
                                    _iterator1["return"]();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                            return [
                                7
                            ];
                        case 9:
                            if (edits.length > 0) editor.transact(function() {
                                $585c4a318f71f147$var$formatCode(editor, edits);
                            });
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
});
function $585c4a318f71f147$var$formatCode(editor, edits) {
    // The code edits need to be applied in reverse order
    for(var i = edits.length - 1; i >= 0; i--)editor.setTextInBufferRange((0, $ee93806a41573bb4$export$477d491a08b070ec)(edits[i]), edits[i].newText);
}








(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:initialize-config", function() {
    return {
        description: "Create tsconfig.json in the project related to currently-active text edtior",
        didDispatch: function(editor, abort) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var projectDirs, currentPath, pathToTsc, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, projectDir, err;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            projectDirs = atom.project.getDirectories();
                            if (projectDirs.length === 0) return [
                                2,
                                abort()
                            ];
                            currentPath = editor.getPath();
                            if (currentPath === undefined) return [
                                2
                            ];
                            return [
                                4,
                                (0, $c628f355f099b93a$export$369fb36245591db0)(currentPath, "tsc")
                            ];
                        case 1:
                            pathToTsc = _state.sent().pathToBin;
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 2;
                        case 2:
                            _state.trys.push([
                                2,
                                7,
                                8,
                                9
                            ]);
                            _iterator = projectDirs[Symbol.iterator]();
                            _state.label = 3;
                        case 3:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                6
                            ];
                            projectDir = _step.value;
                            if (!projectDir.contains(currentPath)) return [
                                3,
                                5
                            ];
                            return [
                                4,
                                $07795ade26c8b8d0$var$initConfig(pathToTsc, projectDir.getPath())
                            ];
                        case 4:
                            _state.sent();
                            atom.notifications.addSuccess("Successfully created tsconfig.json in ".concat(projectDir.getPath()));
                            _state.label = 5;
                        case 5:
                            _iteratorNormalCompletion = true;
                            return [
                                3,
                                3
                            ];
                        case 6:
                            return [
                                3,
                                9
                            ];
                        case 7:
                            err = _state.sent();
                            _didIteratorError = true;
                            _iteratorError = err;
                            return [
                                3,
                                9
                            ];
                        case 8:
                            try {
                                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                                    _iterator["return"]();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                            return [
                                7
                            ];
                        case 9:
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
});
function $07795ade26c8b8d0$var$initConfig(tsc, projectRoot) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var disp;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        ,
                        2,
                        3
                    ]);
                    return [
                        4,
                        new Promise(function(resolve, reject) {
                            try {
                                var bnp = new (0, $8qw4J$atom.BufferedNodeProcess)({
                                    command: tsc,
                                    args: [
                                        "--init"
                                    ],
                                    options: {
                                        cwd: projectRoot
                                    },
                                    exit: function(code) {
                                        if (code === 0) resolve();
                                        else reject(new Error("Tsc ended with nonzero exit code ".concat(code)));
                                    }
                                });
                                disp = bnp.onWillThrowError(reject);
                            } catch (e) {
                                reject(e);
                            }
                        })
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
                case 2:
                    if (disp) disp.dispose();
                    return [
                        7
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    })();
}





(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:organize-imports", function(deps) {
    return {
        description: "Organize module imports",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var filePath, client, result;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            filePath = editor.getPath();
                            if (filePath === undefined) return [
                                2
                            ];
                            return [
                                4,
                                deps.getClient(filePath)
                            ];
                        case 1:
                            client = _state.sent();
                            return [
                                4,
                                client.execute("organizeImports", {
                                    scope: {
                                        type: "file",
                                        args: {
                                            file: filePath
                                        }
                                    }
                                })
                            ];
                        case 2:
                            result = _state.sent();
                            if (!(result.body.length > 0)) return [
                                3,
                                4
                            ];
                            return [
                                4,
                                deps.applyEdits(result.body)
                            ];
                        case 3:
                            _state.sent();
                            _state.label = 4;
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
});






(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:reload-projects", function(deps) {
    return {
        description: "Reload projects",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var path, client;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            path = editor.getPath();
                            if (path === undefined) return [
                                2
                            ];
                            return [
                                4,
                                deps.getClient(path)
                            ];
                        case 1:
                            client = _state.sent();
                            return [
                                4,
                                client.execute("reloadProjects")
                            ];
                        case 2:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
});


















var $495f9b8b886fe9a0$export$1224b0b157f2244c = /*#__PURE__*/ function() {
    "use strict";
    function MiniEditor(props) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, MiniEditor);
        this.props = props;
        this.model = atom.workspace.buildTextEditor({
            mini: true,
            softWrapped: true,
            lineNumberGutterVisible: false
        });
        this.element = atom.views.getView(this.model);
        this.model.setText(props.initialText);
        if (props.selectAll) this.model.selectAll();
        else this.model.getLastCursor().moveToEndOfScreenLine();
        this.setReadOnly();
        this.setGrammar();
        this.model.scrollToBufferPosition([
            0,
            0
        ]);
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(MiniEditor, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        this.element = atom.views.getView(this.model);
                        this.props = (0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, this.props, props);
                        this.setReadOnly();
                        this.setGrammar();
                        return [
                            2
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "focus",
            value: function focus() {
                this.element.focus();
            }
        },
        {
            key: "getModel",
            value: function getModel() {
                return this.model;
            }
        },
        {
            key: "setReadOnly",
            value: function setReadOnly() {
                this.model.setReadOnly(!!this.props.readOnly);
            }
        },
        {
            key: "setGrammar",
            value: function setGrammar() {
                if (this.props.grammar !== undefined) atom.textEditors.setGrammarOverride(this.model, this.props.grammar);
                else atom.textEditors.clearGrammarOverride(this.model);
            }
        }
    ]);
    return MiniEditor;
}();


var $8a39902ae655894e$var$RenameView = /*#__PURE__*/ function() {
    "use strict";
    function RenameView(props) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, RenameView);
        this.props = props;
        $8qw4J$etch.initialize(this);
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(RenameView, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.props = (0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, this.props, props);
                                return [
                                    4,
                                    $8qw4J$etch.update(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "render",
            value: function render() {
                return $8qw4J$etch.dom("div", {
                    className: "atomts-rename-view",
                    ref: "main"
                }, $8qw4J$etch.dom("div", {
                    className: "block"
                }, $8qw4J$etch.dom("div", null, $8qw4J$etch.dom("span", {
                    ref: "title"
                }, this.props.title), $8qw4J$etch.dom("span", {
                    className: "subtle-info-message"
                }, $8qw4J$etch.dom("span", null, "Close this panel with "), $8qw4J$etch.dom("span", {
                    className: "highlight"
                }, "esc"), $8qw4J$etch.dom("span", null, " key. And commit with the "), $8qw4J$etch.dom("span", {
                    className: "highlight"
                }, "enter"), $8qw4J$etch.dom("span", null, " key."))), $8qw4J$etch.dom("div", {
                    className: "find-container block"
                }, $8qw4J$etch.dom("div", {
                    className: "editor-container"
                }, $8qw4J$etch.dom((0, $495f9b8b886fe9a0$export$1224b0b157f2244c), {
                    ref: "editor",
                    initialText: this.props.initialText,
                    selectAll: this.props.selectAll
                }))), this.renderValidationMessage()));
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $8qw4J$etch.destroy(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "focus",
            value: function focus() {
                return this.refs.editor.focus();
            }
        },
        {
            key: "getText",
            value: function getText() {
                return this.refs.editor.getModel().getText();
            }
        },
        {
            key: "renderValidationMessage",
            value: function renderValidationMessage() {
                if (this.props.validationMessage !== undefined) return $8qw4J$etch.dom("div", {
                    className: "highlight-error"
                }, this.props.validationMessage);
                return null;
            }
        }
    ]);
    return RenameView;
}();
function $8a39902ae655894e$export$530eb201df098d49(options) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var item, panel, currentFocus, disposables;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    item = new $8a39902ae655894e$var$RenameView({
                        title: options.title,
                        initialText: options.text,
                        selectAll: options.autoSelect
                    });
                    panel = atom.workspace.addModalPanel({
                        item: item,
                        priority: 1000
                    });
                    currentFocus = document.activeElement;
                    item.focus();
                    disposables = new (0, $8qw4J$atom.CompositeDisposable)();
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        ,
                        3,
                        4
                    ]);
                    return [
                        4,
                        new Promise(function(resolve) {
                            disposables.add(atom.commands.add(item.refs.main, {
                                "core:cancel": function() {
                                    resolve(undefined);
                                },
                                "core:confirm": function() {
                                    var newText = item.getText();
                                    var invalid = options.onValidate(newText);
                                    if (invalid) {
                                        (0, $2893351583386024$export$8080b7556d9d6445)(item.update({
                                            validationMessage: invalid
                                        }));
                                        return;
                                    }
                                    resolve(newText);
                                }
                            }));
                        })
                    ];
                case 2:
                    return [
                        2,
                        _state.sent()
                    ];
                case 3:
                    panel.destroy();
                    disposables.dispose();
                    if (currentFocus) currentFocus.focus();
                    return [
                        7
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    })();
}



(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:rename-file", function(deps) {
    return {
        description: "Rename current file",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var location, newLocation, client, response;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            location = editor.getPath();
                            if (!location) return [
                                2
                            ];
                            return [
                                4,
                                (0, $8a39902ae655894e$export$530eb201df098d49)({
                                    autoSelect: true,
                                    title: "Rename File",
                                    text: location,
                                    onValidate: function(newText) {
                                        if (!newText.trim()) return "If you want to abort : Press esc to exit";
                                        return "";
                                    }
                                })
                            ];
                        case 1:
                            newLocation = _state.sent();
                            if (!newLocation) return [
                                2
                            ];
                            return [
                                4,
                                deps.getClient(location)
                            ];
                        case 2:
                            client = _state.sent();
                            return [
                                4,
                                client.execute("getEditsForFileRename", {
                                    oldFilePath: location,
                                    newFilePath: newLocation
                                })
                            ];
                        case 3:
                            response = _state.sent();
                            return [
                                4,
                                deps.applyEdits(response.body)
                            ];
                        case 4:
                            _state.sent();
                            return [
                                4,
                                new Promise(function(resolve, reject) {
                                    $8qw4J$fsplus.move(location, newLocation, function(err) {
                                        if (err) reject(err);
                                        else {
                                            editor.getBuffer().setPath(newLocation);
                                            resolve();
                                        }
                                    });
                                })
                            ];
                        case 5:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
});









(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:rename-refactor", function(deps) {
    return {
        description: "Rename symbol under text cursor everywhere it is used",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var location, client, response, _response_body, info, locs, newName;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            location = (0, $7580a2909a181bf5$export$f25e34a2b31a939c)(editor);
                            if (!location) return [
                                2
                            ];
                            return [
                                4,
                                deps.getClient(location.file)
                            ];
                        case 1:
                            client = _state.sent();
                            return [
                                4,
                                client.execute("rename", location)
                            ];
                        case 2:
                            response = _state.sent();
                            _response_body = response.body, info = _response_body.info, locs = _response_body.locs;
                            if (!info.canRename) {
                                atom.notifications.addInfo("AtomTS: Rename not available at cursor location");
                                return [
                                    2
                                ];
                            }
                            return [
                                4,
                                (0, $8a39902ae655894e$export$530eb201df098d49)({
                                    autoSelect: true,
                                    title: "Rename Variable",
                                    text: info.displayName,
                                    onValidate: function(newText) {
                                        if (newText.replace(/\s/g, "") !== newText.trim()) return "The new variable must not contain a space";
                                        if (!newText.trim()) return "If you want to abort : Press esc to exit";
                                        return "";
                                    }
                                })
                            ];
                        case 3:
                            newName = _state.sent();
                            if (!(newName !== undefined)) return [
                                3,
                                5
                            ];
                            return [
                                4,
                                deps.applyEdits(locs.map(function(span) {
                                    return {
                                        fileName: span.file,
                                        textChanges: span.locs.map(function(loc) {
                                            return (0, $8qw4J$swchelperscjs_object_spread_propscjs._)((0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, loc), {
                                                newText: newName
                                            });
                                        })
                                    };
                                }))
                            ];
                        case 4:
                            _state.sent();
                            _state.label = 5;
                        case 5:
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
});





(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-workspace", "typescript:restart-all-servers", function(deps) {
    return {
        description: "Kill all tsserver instances. They will be auto-restarted",
        didDispatch: function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    deps.killAllServers();
                    return [
                        2
                    ];
                });
            })();
        }
    };
});





(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-workspace", "typescript:return-from-declaration", function(deps) {
    return {
        description: "If used `go-to-declaration`, return to previous text cursor position",
        didDispatch: function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                deps.histGoBack()
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
});
(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-workspace", "typescript:show-editor-position-history", function(deps) {
    return {
        description: "If used `go-to-declaration`, return to previous text cursor position",
        didDispatch: function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                deps.histShowHistory()
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
});



(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:toggle-semantic-view", function(deps) {
    return {
        description: "Toggle semantic view outline",
        didDispatch: function() {
            deps.toggleSemanticViewController();
        }
    };
});





(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:show-tooltip", function(deps) {
    return {
        description: "Show type tooltip at current text cursor position",
        didDispatch: function(ed) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    return [
                        2,
                        deps.showTooltipAt(ed)
                    ];
                });
            })();
        }
    };
});





(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:show-signature-help", function(deps) {
    return {
        description: "Show signature help tooltip at current text cursor position",
        didDispatch: function(ed) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    return [
                        2,
                        deps.showSigHelpAt(ed)
                    ];
                });
            })();
        }
    };
});
(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:hide-signature-help", function(deps) {
    return {
        description: "Hide the currently visible signature help",
        didDispatch: function(ed, ignore) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    if (!deps.hideSigHelpAt(ed)) ignore();
                    return [
                        2
                    ];
                });
            })();
        }
    };
});
(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:signature-help-next", function(deps) {
    return {
        description: "Show next signature help if available",
        didDispatch: function(ed, ignore) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    if (!deps.rotateSigHelp(ed, 1)) ignore();
                    return [
                        2
                    ];
                });
            })();
        }
    };
});
(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:signature-help-prev", function(deps) {
    return {
        description: "Show previous signature help if available",
        didDispatch: function(ed, ignore) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    if (!deps.rotateSigHelp(ed, -1)) ignore();
                    return [
                        2
                    ];
                });
            })();
        }
    };
});





(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:toggle-file-symbols", function(deps) {
    return {
        description: "Toggle view for finding file symbols",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    deps.toggleFileSymbolsView(editor);
                    return [
                        2
                    ];
                });
            })();
        }
    };
});
(0, $095c7bfbba93f9a3$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:toggle-project-symbols", function(deps) {
    return {
        description: "Toggle view for finding file symbols",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    deps.toggleProjectSymbolsView(editor);
                    return [
                        2
                    ];
                });
            })();
        }
    };
});


function $d7106e5ca616cb06$export$f647bfc0a5fe4336(deps) {
    var disp = new (0, $8qw4J$atom.CompositeDisposable)();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var cmd = _step.value;
            if (cmd.selector === "atom-text-editor") {
                var d = cmd.desc(deps);
                disp.add(atom.commands.add(cmd.selector, cmd.command, (0, $8qw4J$swchelperscjs_object_spread_propscjs._)((0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, d), {
                    didDispatch: function(e) {
                        return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                            var editor, error;
                            return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        _state.trys.push([
                                            0,
                                            4,
                                            ,
                                            5
                                        ]);
                                        editor = e.currentTarget.getModel();
                                        if (!(0, $7580a2909a181bf5$export$3aecee58e23ede2c)(editor)) return [
                                            3,
                                            2
                                        ];
                                        return [
                                            4,
                                            d.didDispatch(editor, function() {
                                                return e.abortKeyBinding();
                                            })
                                        ];
                                    case 1:
                                        _state.sent();
                                        return [
                                            3,
                                            3
                                        ];
                                    case 2:
                                        e.abortKeyBinding();
                                        if ((0, $7580a2909a181bf5$export$bde40b56025b92b9)(editor)) atom.notifications.addWarning("Atom-TypeScript cancelled last command: Current editor has no file path", {
                                            description: "Atom-TypeScript needs to determine the file path of the " + "current editor to execute `".concat(cmd.command, "`, which it failed to do. ") + "You probably just need to save the current file somewhere.",
                                            dismissable: true
                                        });
                                        _state.label = 3;
                                    case 3:
                                        return [
                                            3,
                                            5
                                        ];
                                    case 4:
                                        error = _state.sent();
                                        $d7106e5ca616cb06$var$handle(error);
                                        return [
                                            3,
                                            5
                                        ];
                                    case 5:
                                        return [
                                            2
                                        ];
                                }
                            });
                        })();
                    }
                })));
            } else {
                var d1 = cmd.desc(deps);
                disp.add(atom.commands.add(cmd.selector, cmd.command, (0, $8qw4J$swchelperscjs_object_spread_propscjs._)((0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, d1), {
                    didDispatch: function() {
                        return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                            var error;
                            return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        _state.trys.push([
                                            0,
                                            2,
                                            ,
                                            3
                                        ]);
                                        return [
                                            4,
                                            d1.didDispatch()
                                        ];
                                    case 1:
                                        _state.sent();
                                        return [
                                            3,
                                            3
                                        ];
                                    case 2:
                                        error = _state.sent();
                                        $d7106e5ca616cb06$var$handle(error);
                                        return [
                                            3,
                                            3
                                        ];
                                    case 3:
                                        return [
                                            2
                                        ];
                                }
                            });
                        })();
                    }
                })));
            }
        };
        for(var _iterator = (0, $095c7bfbba93f9a3$export$7a6092e2ae7e1845)()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return disp;
}
function $d7106e5ca616cb06$var$handle(err) {
    if (err.message === "Server stopped normally") console.warn("TypeScript server exited normally while executing a command", err);
    else atom.notifications.addFatalError("Something went wrong, see details below.", {
        detail: err.message,
        dismissable: true,
        stack: err.stack
    });
}

























var $a6288a0b26704c12$export$28c660c63b792dea = /*#__PURE__*/ function() {
    "use strict";
    function Tooltip(props, children) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, Tooltip);
        this.children = children;
        this.props = (0, $8qw4J$swchelperscjs_object_spread_propscjs._)((0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, props), {
            delay: {
                show: 0,
                hide: 0
            }
        });
        $8qw4J$etch.initialize(this);
        this.tooltipDisposable = atom.tooltips.add(this.element, this.props);
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(Tooltip, [
        {
            key: "update",
            value: function update(props, children) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.props = (0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, this.props, props);
                                this.children = children;
                                return [
                                    4,
                                    $8qw4J$etch.update(this)
                                ];
                            case 1:
                                _state.sent();
                                this.tooltipDisposable.dispose();
                                this.tooltipDisposable = atom.tooltips.add(this.element, this.props);
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "render",
            value: function render() {
                return $8qw4J$etch.dom("div", {
                    className: "inline-block"
                }, this.children ? this.children : null);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $8qw4J$etch.destroy(this)
                                ];
                            case 1:
                                _state.sent();
                                this.tooltipDisposable.dispose();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ]);
    return Tooltip;
}();


var $8e8ce2d77e3fcd58$export$d2110dce2e582144 = /*#__PURE__*/ function() {
    "use strict";
    function BuildStatus(props) {
        var _this = this;
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, BuildStatus);
        this.hiddenBuildStatus = false;
        this.disposables = new (0, $8qw4J$atom.CompositeDisposable)();
        this.buildStatusClicked = function() {
            if (!_this.props.buildStatus.success) atom.notifications.addError("Build failed", {
                detail: _this.props.buildStatus.message,
                dismissable: true
            });
        };
        this.props = (0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, props);
        this.setHideBuildStatus(atom.config.get("atom-typescript-updated").buildStatusTimeout);
        this.resetBuildStatusTimeout();
        $8qw4J$etch.initialize(this);
        this.disposables.add(atom.config.onDidChange("atom-typescript-updated.buildStatusTimeout", function(param) {
            var newValue = param.newValue;
            _this.setHideBuildStatus(newValue);
            (0, $2893351583386024$export$8080b7556d9d6445)(_this.update({}));
        }));
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(BuildStatus, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var successStateChanged;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                successStateChanged = props.buildStatus !== undefined && props.buildStatus.success !== this.props.buildStatus.success;
                                this.props = (0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, this.props, props);
                                if (successStateChanged) this.resetBuildStatusTimeout();
                                return [
                                    4,
                                    $8qw4J$etch.update(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "render",
            value: function render() {
                if (this.hiddenBuildStatus) return $8qw4J$etch.dom("span", null);
                var cls;
                var text;
                if (this.props.buildStatus.success) {
                    cls = "highlight-success";
                    text = "Emit Success";
                } else {
                    cls = "highlight-error";
                    text = "Emit Failed";
                }
                return $8qw4J$etch.dom((0, $a6288a0b26704c12$export$28c660c63b792dea), {
                    title: this.props.buildStatus.success ? "Build was successful" : "Build failed; click to show error message"
                }, $8qw4J$etch.dom("span", {
                    className: cls,
                    on: {
                        click: this.buildStatusClicked
                    }
                }, text));
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $8qw4J$etch.destroy(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "resetBuildStatusTimeout",
            value: function resetBuildStatusTimeout() {
                this.hiddenBuildStatus = false;
                if (this.props.buildStatus.success) this.hideBuildStatus();
            }
        },
        {
            key: "setHideBuildStatus",
            value: function setHideBuildStatus(value) {
                var _this = this;
                if (value > 0) this.hideBuildStatus = (0, $8qw4J$lodash.debounce)(function() {
                    _this.hiddenBuildStatus = true;
                    (0, $2893351583386024$export$8080b7556d9d6445)($8qw4J$etch.update(_this));
                }, value * 1000);
                else if (value === 0) this.hideBuildStatus = function() {
                    _this.hiddenBuildStatus = true;
                };
                else this.hideBuildStatus = function() {};
            }
        }
    ]);
    return BuildStatus;
}();











var $9d3745b284139e1f$export$ebf7874ab6a8fe0f = /*#__PURE__*/ function() {
    "use strict";
    function ConfigPath(props) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, ConfigPath);
        this.props = (0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, props);
        $8qw4J$etch.initialize(this);
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(ConfigPath, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.props = (0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, this.props, props);
                                return [
                                    4,
                                    $8qw4J$etch.update(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                return $8qw4J$etch.dom((0, $a6288a0b26704c12$export$28c660c63b792dea), {
                    title: function() {
                        return _this.props.tsConfigPath.startsWith("/dev/null") ? "No tsconfig.json" : "Click to open ".concat(atom.project.relativize(_this.props.tsConfigPath));
                    }
                }, $8qw4J$etch.dom("a", {
                    className: "inline-block",
                    href: "",
                    on: {
                        click: function(evt) {
                            evt.preventDefault();
                            _this.openConfigPath();
                        }
                    }
                }, this.props.tsConfigPath.startsWith("/dev/null") ? "No project" : (0, $8qw4J$path.dirname)($9d3745b284139e1f$var$getFilePathRelativeToAtomProject(this.props.tsConfigPath))));
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $8qw4J$etch.destroy(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "openConfigPath",
            value: function openConfigPath() {
                if (!this.props.tsConfigPath.startsWith("/dev/null")) (0, $2893351583386024$export$8080b7556d9d6445)(atom.workspace.open(this.props.tsConfigPath));
                else atom.notifications.addInfo("No tsconfig for current file");
            }
        }
    ]);
    return ConfigPath;
}();
/**
 * converts "c:\dev\somethin\bar.ts" to "~something\bar".
 */ function $9d3745b284139e1f$var$getFilePathRelativeToAtomProject(filePath) {
    return "~" + atom.project.relativize(filePath);
}



var $258730bbf662f4ed$export$e46d185d0654294e = /*#__PURE__*/ function() {
    "use strict";
    function StatusPanel() {
        var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, StatusPanel);
        this.props = (0, $8qw4J$swchelperscjs_object_spreadcjs._)({
            visible: true,
            pending: [],
            progress: {
                max: 0,
                value: 0
            }
        }, props);
        $8qw4J$etch.initialize(this);
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(StatusPanel, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.props = (0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, this.props, props);
                                return [
                                    4,
                                    $8qw4J$etch.update(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "render",
            value: function render() {
                return $8qw4J$etch.dom("ts-status-panel", {
                    className: this.props.visible ? "" : "hide"
                }, this.renderVersion(), this.renderPending(), this.renderConfigPath(), this.renderStatus(), this.renderProgress());
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $8qw4J$etch.destroy(this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                (0, $2893351583386024$export$8080b7556d9d6445)(this.destroy());
            }
        },
        {
            key: "show",
            value: function show() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.update({
                                        visible: true
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "hide",
            value: function hide() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.update({
                                        visible: false
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "renderVersion",
            value: function renderVersion() {
                if (this.props.clientVersion !== undefined) return $8qw4J$etch.dom((0, $a6288a0b26704c12$export$28c660c63b792dea), {
                    title: "Active TypeScript version"
                }, this.props.clientVersion);
                return null;
            }
        },
        {
            key: "renderPending",
            value: function renderPending() {
                if (this.props.pending.length > 0) return $8qw4J$etch.dom((0, $a6288a0b26704c12$export$28c660c63b792dea), {
                    title: "Pending Requests: <ul>".concat(this.props.pending.map(function(param) {
                        var title = param.title;
                        return "<li>".concat(title, "</li>");
                    }).join(""), "</ul>"),
                    html: true
                }, $8qw4J$etch.dom("span", {
                    ref: "pendingCounter"
                }, this.props.pending.length.toString()), $8qw4J$etch.dom("span", {
                    ref: "pendingSpinner",
                    className: "loading loading-spinner-tiny inline-block",
                    style: {
                        marginLeft: "5px",
                        opacity: "0.5",
                        verticalAlign: "sub"
                    }
                }));
                else return null;
            }
        },
        {
            key: "renderConfigPath",
            value: function renderConfigPath() {
                if (this.props.tsConfigPath !== undefined) return $8qw4J$etch.dom((0, $9d3745b284139e1f$export$ebf7874ab6a8fe0f), {
                    tsConfigPath: this.props.tsConfigPath
                });
                return null;
            }
        },
        {
            key: "renderStatus",
            value: function renderStatus() {
                if (this.props.buildStatus) return $8qw4J$etch.dom((0, $8e8ce2d77e3fcd58$export$d2110dce2e582144), {
                    buildStatus: this.props.buildStatus
                });
                return null;
            }
        },
        {
            key: "renderProgress",
            value: function renderProgress() {
                if (this.props.progress.value < this.props.progress.max) return $8qw4J$etch.dom("progress", {
                    style: {
                        verticalAlign: "baseline"
                    },
                    className: "inline-block",
                    max: this.props.progress.max,
                    value: this.props.progress.value
                });
                return null;
            }
        }
    ]);
    return StatusPanel;
}();












var $e6778e0cbaaba99c$export$37b735b3f7a16aff = /*#__PURE__*/ function() {
    "use strict";
    function EditorPositionHistoryManager() {
        var prevCursorPositions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, EditorPositionHistoryManager);
        this.prevCursorPositions = prevCursorPositions;
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(EditorPositionHistoryManager, [
        {
            key: "goBack",
            value: function goBack() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        return [
                            2,
                            this.goHistory(1)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "goHistory",
            value: function goHistory(depth) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var position;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        while(depth-- > 0)position = this.prevCursorPositions.pop();
                        if (!position) {
                            atom.notifications.addInfo("AtomTS: Previous position not found.");
                            return [
                                2
                            ];
                        }
                        return [
                            2,
                            this.open({
                                file: position.file,
                                start: {
                                    line: position.line,
                                    offset: position.offset
                                }
                            })
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "goForward",
            value: function goForward(currentEditor, item) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var location, maxItems;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        location = (0, $7580a2909a181bf5$export$f25e34a2b31a939c)(currentEditor);
                        if (location) {
                            this.prevCursorPositions.push(location);
                            maxItems = 100;
                            if (this.prevCursorPositions.length > maxItems) this.prevCursorPositions.splice(0, this.prevCursorPositions.length - maxItems);
                        }
                        return [
                            2,
                            this.open(item)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "showHistory",
            value: function showHistory() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var res;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (0, $f55d59ecd155c40a$export$12cb8c60c107136e)({
                                        items: this.getHistory().slice().reverse().map(function(item, idx) {
                                            return (0, $8qw4J$swchelperscjs_object_spread_propscjs._)((0, $8qw4J$swchelperscjs_object_spreadcjs._)({}, item), {
                                                idx: idx
                                            });
                                        }),
                                        itemTemplate: function(item, ctx) {
                                            return $8qw4J$etch.dom("li", {
                                                className: "two-lines"
                                            }, $8qw4J$etch.dom("div", {
                                                className: "primary-line"
                                            }, $8qw4J$etch.dom((0, $5f8857790714307e$export$31d5f5740e2c2887), {
                                                label: item.file,
                                                query: ctx.getFilterQuery()
                                            })), $8qw4J$etch.dom("div", {
                                                className: "secondary-line"
                                            }, "Line: ", item.line, ", column: ", item.offset));
                                        },
                                        itemFilterKey: "file"
                                    })
                                ];
                            case 1:
                                res = _state.sent();
                                if (!res) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    this.goHistory(res.idx + 1)
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "getHistory",
            value: function getHistory() {
                return this.prevCursorPositions;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
            // NOOP
            }
        },
        {
            key: "serialize",
            value: function serialize() {
                return this.prevCursorPositions;
            }
        },
        {
            key: "open",
            value: function open(item) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var editor;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    atom.workspace.open(item.file, {
                                        initialLine: item.start.line - 1,
                                        initialColumn: item.start.offset - 1,
                                        searchAllPanes: true
                                    })
                                ];
                            case 1:
                                editor = _state.sent();
                                if (atom.workspace.isTextEditor(editor)) editor.scrollToCursorPosition({
                                    center: true
                                });
                                return [
                                    2,
                                    editor
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return EditorPositionHistoryManager;
}();










var $1e8c6b8d10c1d614$export$951a8e3d4c79262 = /*#__PURE__*/ function() {
    "use strict";
    function SemanticViewController(getClient) {
        var _this = this;
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, SemanticViewController);
        this.getClient = getClient;
        this.subscriptions = new (0, $8qw4J$atom.CompositeDisposable)();
        var pane = atom.workspace.paneForURI((0, $4759e62349e0b646$export$c5c441a5719d665b));
        if (pane) this.view = pane.itemForURI((0, $4759e62349e0b646$export$c5c441a5719d665b));
        if (this.view) (0, $2893351583386024$export$8080b7556d9d6445)(this.view.setGetClient(this.getClient));
        this.subscriptions.add(new (0, $8qw4J$atom.Disposable)(function() {
            if (_this.view) {
                atom.workspace.hide(_this.view);
                (0, $2893351583386024$export$8080b7556d9d6445)(_this.view.destroy());
            }
        }), atom.config.observe("atom-typescript-updated.showSemanticView", function(val) {
            if (val) (0, $2893351583386024$export$8080b7556d9d6445)(_this.show());
            else _this.hide();
        }));
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(SemanticViewController, [
        {
            key: "dispose",
            value: function dispose() {
                this.subscriptions.dispose();
            }
        },
        {
            key: "toggle",
            value: function toggle() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!this.view) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    this.show()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 2:
                                return [
                                    4,
                                    atom.workspace.toggle(this.view)
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "show",
            value: function show() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!this.view) return [
                                    3,
                                    2
                                ];
                                this.view = (0, $4759e62349e0b646$export$a3a95952d8506109).create({
                                    navTree: null
                                });
                                return [
                                    4,
                                    this.view.setGetClient(this.getClient)
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    atom.workspace.open(this.view, {
                                        searchAllPanes: true
                                    })
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "hide",
            value: function hide() {
                if (!this.view) return false;
                else return atom.workspace.hide(this.view);
            }
        }
    ]);
    return SemanticViewController;
}();















var $46ff9c914e9ca5cd$export$3288d34c523a1192 = /*#__PURE__*/ function() {
    "use strict";
    function Tag(props) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, Tag);
        this.position = props.position;
        this.name = props.name;
        this.type = props.type;
        this.parent = props.parent;
        this.file = props.file;
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(Tag, null, [
        {
            key: "fromNavTree",
            value: function fromNavTree(navTree, parent) {
                var start = navTree.spans[0].start;
                return new Tag({
                    name: navTree.text,
                    type: navTree.kind,
                    position: {
                        row: start.line - 1,
                        column: start.offset - 1
                    },
                    parent: parent != null ? parent : null
                });
            }
        },
        {
            key: "fromNavto",
            value: function fromNavto(navTo, parent) {
                var start = navTo.start;
                return new Tag({
                    name: navTo.name,
                    type: navTo.kind,
                    position: {
                        row: start.line - 1,
                        column: start.offset - 1
                    },
                    parent: parent != null ? parent : null,
                    file: navTo.file
                });
            }
        }
    ]);
    return Tag;
}();


function $8074ca8d37a076ff$export$3d887693d0007350(filePath, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var navtree;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        $8074ca8d37a076ff$var$getNavTree(filePath, deps)
                    ];
                case 1:
                    navtree = _state.sent();
                    if (navtree && navtree.childItems) // NOTE omit root NavigationTree tree element (which corresponds to the file itself)
                    return [
                        2,
                        Array.from($8074ca8d37a076ff$var$parseNavTree(navtree.childItems))
                    ];
                    else return [
                        2,
                        []
                    ];
                    return [
                        2
                    ];
            }
        });
    })();
}
function $8074ca8d37a076ff$export$84b9b1d45a7e55b8(filePath, search, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var navtree;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        $8074ca8d37a076ff$var$getNavTo(filePath, search, deps)
                    ];
                case 1:
                    navtree = _state.sent();
                    if (navtree) return [
                        2,
                        Array.from($8074ca8d37a076ff$var$parseNavTo(navtree))
                    ];
                    else return [
                        2,
                        []
                    ];
                    return [
                        2
                    ];
            }
        });
    })();
}
function $8074ca8d37a076ff$var$parseNavTree(navTree, parent) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, tag, err;
    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
        switch(_state.label){
            case 0:
                navTree.sort(function(a, b) {
                    return a.spans[0].start.line - b.spans[0].start.line;
                });
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                _state.label = 1;
            case 1:
                _state.trys.push([
                    1,
                    7,
                    8,
                    9
                ]);
                _iterator = navTree[Symbol.iterator]();
                _state.label = 2;
            case 2:
                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                    3,
                    6
                ];
                item = _step.value;
                tag = (0, $46ff9c914e9ca5cd$export$3288d34c523a1192).fromNavTree(item, parent);
                return [
                    4,
                    tag
                ];
            case 3:
                _state.sent();
                if (!item.childItems) return [
                    3,
                    5
                ];
                return [
                    5,
                    (0, $8qw4J$swchelperscjs_ts_valuescjs._)($8074ca8d37a076ff$var$parseNavTree(item.childItems, tag))
                ];
            case 4:
                _state.sent();
                _state.label = 5;
            case 5:
                _iteratorNormalCompletion = true;
                return [
                    3,
                    2
                ];
            case 6:
                return [
                    3,
                    9
                ];
            case 7:
                err = _state.sent();
                _didIteratorError = true;
                _iteratorError = err;
                return [
                    3,
                    9
                ];
            case 8:
                try {
                    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                        _iterator["return"]();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
                return [
                    7
                ];
            case 9:
                return [
                    2
                ];
        }
    });
}
function $8074ca8d37a076ff$var$parseNavTo(navTree, parent) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, err;
    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
        switch(_state.label){
            case 0:
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                _state.label = 1;
            case 1:
                _state.trys.push([
                    1,
                    6,
                    7,
                    8
                ]);
                _iterator = navTree[Symbol.iterator]();
                _state.label = 2;
            case 2:
                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                    3,
                    5
                ];
                item = _step.value;
                return [
                    4,
                    (0, $46ff9c914e9ca5cd$export$3288d34c523a1192).fromNavto(item, parent)
                ];
            case 3:
                _state.sent();
                _state.label = 4;
            case 4:
                _iteratorNormalCompletion = true;
                return [
                    3,
                    2
                ];
            case 5:
                return [
                    3,
                    8
                ];
            case 6:
                err = _state.sent();
                _didIteratorError = true;
                _iteratorError = err;
                return [
                    3,
                    8
                ];
            case 7:
                try {
                    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                        _iterator["return"]();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
                return [
                    7
                ];
            case 8:
                return [
                    2
                ];
        }
    });
}
function $8074ca8d37a076ff$var$getNavTree(filePath, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var client, navtreeResult, e;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        deps.getClient(filePath)
                    ];
                case 1:
                    client = _state.sent();
                    return [
                        4,
                        client.execute("navtree", {
                            file: filePath
                        })
                    ];
                case 2:
                    navtreeResult = _state.sent();
                    return [
                        2,
                        navtreeResult.body
                    ];
                case 3:
                    e = _state.sent();
                    console.error(filePath, e);
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    })();
}
function $8074ca8d37a076ff$var$getNavTo(filePath, search, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var client, navtoResult, e;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        deps.getClient(filePath)
                    ];
                case 1:
                    client = _state.sent();
                    return [
                        4,
                        client.execute("navto", {
                            file: filePath,
                            currentFileOnly: false,
                            searchValue: search,
                            maxResultCount: 1000
                        })
                    ];
                case 2:
                    navtoResult = _state.sent();
                    return [
                        2,
                        navtoResult.body
                    ];
                case 3:
                    e = _state.sent();
                    console.error(filePath, e);
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    })();
}




function $1df742126c288bbc$export$1d50c664485a457a(tag, editor, histGoForward) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            if (tag.file !== undefined) return [
                2,
                histGoForward(editor, {
                    file: tag.file,
                    start: {
                        line: tag.position.row + 1,
                        offset: tag.position.column + 1
                    }
                })
            ];
            return [
                2
            ];
        });
    })();
}
function $1df742126c288bbc$export$f52e1de408b9499d(editor) {
    var editorElement = atom.views.getView(editor);
    var scrollTop = editorElement.getScrollTop();
    return {
        bufferRanges: editor.getSelectedBufferRanges(),
        scrollTop: scrollTop
    };
}
function $1df742126c288bbc$export$f514d2bb3b6ad37e(editor, param) {
    var bufferRanges = param.bufferRanges, scrollTop = param.scrollTop;
    var editorElement = atom.views.getView(editor);
    editor.setSelectedBufferRanges(bufferRanges);
    editorElement.setScrollTop(scrollTop);
}


function $864f74e447044864$export$e03c1c3201ee8bb7(editor, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var filePath, initialState, tag;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    filePath = editor.getPath();
                    if (!(filePath !== undefined)) return [
                        3,
                        4
                    ];
                    if (atom.config.get("symbols-view.quickJumpToFileSymbol")) initialState = $1df742126c288bbc$export$f52e1de408b9499d(editor);
                    return [
                        4,
                        (0, $f55d59ecd155c40a$export$12cb8c60c107136e)({
                            items: (0, $8074ca8d37a076ff$export$3d887693d0007350)(filePath, deps),
                            itemTemplate: function(param, ctx) {
                                var name = param.name, position = param.position;
                                return $8qw4J$etch.dom("li", {
                                    className: "two-lines"
                                }, $8qw4J$etch.dom("div", {
                                    className: "primary-line"
                                }, $8qw4J$etch.dom((0, $5f8857790714307e$export$31d5f5740e2c2887), {
                                    label: name,
                                    query: ctx.getFilterQuery()
                                })), $8qw4J$etch.dom("div", {
                                    className: "secondary-line"
                                }, "Line ".concat(position.row + 1)));
                            },
                            didChangeSelection: function(item) {
                                // NOTE uses the "parent" package's setting (i.e. from symbols-view):
                                if (atom.config.get("symbols-view.quickJumpToFileSymbol") && item) editor.setCursorBufferPosition(item.position);
                            },
                            itemFilterKey: "name"
                        })
                    ];
                case 1:
                    tag = _state.sent();
                    if (!tag) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        $1df742126c288bbc$export$1d50c664485a457a(tag, editor, deps.histGoForward)
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    if (initialState) $1df742126c288bbc$export$f514d2bb3b6ad37e(editor, initialState);
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    })();
}









function $2fd23eb078060f30$export$e03c1c3201ee8bb7(editor, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var filePath, tag;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    filePath = editor.getPath();
                    if (!(filePath !== undefined)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        (0, $f55d59ecd155c40a$export$12cb8c60c107136e)({
                            items: function(search) {
                                return (0, $8074ca8d37a076ff$export$84b9b1d45a7e55b8)(filePath, search, deps);
                            },
                            itemTemplate: function(param, ctx) {
                                var name = param.name, position = param.position, file = param.file;
                                var relfile = atom.project.relativize(file);
                                return $8qw4J$etch.dom("li", {
                                    className: "two-lines"
                                }, $8qw4J$etch.dom("div", {
                                    className: "primary-line"
                                }, $8qw4J$etch.dom((0, $5f8857790714307e$export$31d5f5740e2c2887), {
                                    label: name,
                                    query: ctx.getFilterQuery()
                                })), $8qw4J$etch.dom("div", {
                                    className: "secondary-line"
                                }, "File ".concat(relfile, " line ").concat(position.row + 1)));
                            },
                            itemFilterKey: "name"
                        })
                    ];
                case 1:
                    tag = _state.sent();
                    if (!tag) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        $1df742126c288bbc$export$1d50c664485a457a(tag, editor, deps.histGoForward)
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    return [
                        2
                    ];
            }
        });
    })();
}


var $c69ac4021c07c8b9$export$bf8eec42fec7719 = /*#__PURE__*/ function() {
    "use strict";
    function SymbolsViewController(deps) {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, SymbolsViewController);
        this.deps = deps;
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(SymbolsViewController, [
        {
            key: "toggleFileView",
            value: function toggleFileView1(editor) {
                (0, $2893351583386024$export$8080b7556d9d6445)((0, $864f74e447044864$export$e03c1c3201ee8bb7)(editor, this.deps));
            }
        },
        {
            key: "toggleProjectView",
            value: function toggleProjectView1(editor) {
                (0, $2893351583386024$export$8080b7556d9d6445)((0, $2fd23eb078060f30$export$e03c1c3201ee8bb7)(editor, this.deps));
            }
        },
        {
            key: "dispose",
            value: function dispose() {
            // TODO: proper disposal
            }
        }
    ]);
    return SymbolsViewController;
}();










var $80c6b1f413ab5323$export$a4d36ae2cf2e8cd = /*#__PURE__*/ function() {
    "use strict";
    function ErrorPusher() {
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, ErrorPusher);
        this.errors = new Map();
        this.fileGrammars = new Map();
        this.pushErrors = (0, $8qw4J$lodash.debounce)(this.pushErrors.bind(this), 100);
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(ErrorPusher, [
        {
            key: "getErrorsInRange",
            value: function getErrorsInRange(filePath, range) {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, prefixed, errors, err;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                6,
                                7,
                                8
                            ]);
                            _iterator = this.errors.values()[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                5
                            ];
                            prefixed = _step.value;
                            errors = prefixed.get($8qw4J$path.normalize(filePath));
                            if (!errors) return [
                                3,
                                4
                            ];
                            return [
                                5,
                                (0, $8qw4J$swchelperscjs_ts_valuescjs._)(errors.filter(function(err) {
                                    return (0, $ee93806a41573bb4$export$477d491a08b070ec)(err).intersectsWith(range);
                                }))
                            ];
                        case 3:
                            _state.sent();
                            _state.label = 4;
                        case 4:
                            _iteratorNormalCompletion = true;
                            return [
                                3,
                                2
                            ];
                        case 5:
                            return [
                                3,
                                8
                            ];
                        case 6:
                            err = _state.sent();
                            _didIteratorError = true;
                            _iteratorError = err;
                            return [
                                3,
                                8
                            ];
                        case 7:
                            try {
                                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                                    _iterator["return"]();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                            return [
                                7
                            ];
                        case 8:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "getErrorsAt",
            value: /** Return any errors that cover the given location */ function getErrorsAt(filePath, loc) {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, prefixed, errors, err;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                6,
                                7,
                                8
                            ]);
                            _iterator = this.errors.values()[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                5
                            ];
                            prefixed = _step.value;
                            errors = prefixed.get($8qw4J$path.normalize(filePath));
                            if (!errors) return [
                                3,
                                4
                            ];
                            return [
                                5,
                                (0, $8qw4J$swchelperscjs_ts_valuescjs._)(errors.filter(function(err) {
                                    return (0, $ee93806a41573bb4$export$477d491a08b070ec)(err).containsPoint(loc);
                                }))
                            ];
                        case 3:
                            _state.sent();
                            _state.label = 4;
                        case 4:
                            _iteratorNormalCompletion = true;
                            return [
                                3,
                                2
                            ];
                        case 5:
                            return [
                                3,
                                8
                            ];
                        case 6:
                            err = _state.sent();
                            _didIteratorError = true;
                            _iteratorError = err;
                            return [
                                3,
                                8
                            ];
                        case 7:
                            try {
                                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                                    _iterator["return"]();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                            return [
                                7
                            ];
                        case 8:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            /** Set errors. Previous errors with the same prefix and filePath are going to be replaced */ key: "setErrors",
            value: function setErrors(prefix, filePath, errors) {
                var prefixed = this.errors.get(prefix);
                if (!prefixed) {
                    prefixed = new Map();
                    this.errors.set(prefix, prefixed);
                }
                prefixed.set($8qw4J$path.normalize(filePath), errors);
                this.pushErrors();
            }
        },
        {
            key: "clearFileErrors",
            value: function clearFileErrors(filePath) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.errors.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var map = _step.value;
                        map["delete"](filePath);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                            _iterator["return"]();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                this.pushErrors();
            }
        },
        {
            key: "clear",
            value: function clear() {
                if (!this.linter) return;
                this.linter.clearMessages();
            }
        },
        {
            key: "setLinter",
            value: function setLinter(linter) {
                this.linter = linter;
                this.pushErrors();
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                this.clear();
                if (this.linter) this.linter.dispose();
                this.linter = undefined;
            }
        },
        {
            key: "pushErrors",
            value: function pushErrors() {
                if (this.linter) this.linter.setAllMessages(this.getLinterErrors());
            }
        },
        {
            key: "getLinterErrors",
            value: function getLinterErrors() {
                if (atom.config.get("atom-typescript-updated.suppressAllDiagnostics")) return [];
                var result = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator = this.errors.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                        var fileErrors = _step.value;
                        try {
                            var _this, _loop = function() {
                                var _step_value = (0, $8qw4J$swchelperscjs_sliced_to_arraycjs._)(_step1.value, 2), filePath = _step_value[0], diagnostics = _step_value[1];
                                var ed = atom.workspace.getTextEditors().find(function(x) {
                                    return x.getPath() === filePath;
                                });
                                var scopeName = ed ? ed.getGrammar().scopeName : _this.selectGrammar(filePath);
                                if ($80c6b1f413ab5323$var$config("suppressAllDiagnostics", scopeName)) return "continue";
                                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(var _iterator = diagnostics[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        var diagnostic = _step.value;
                                        if ($80c6b1f413ab5323$var$config("ignoredDiagnosticCodes", scopeName).includes("".concat(diagnostic.code))) continue;
                                        if ($80c6b1f413ab5323$var$config("ignoreUnusedSuggestionDiagnostics", scopeName) && diagnostic.reportsUnnecessary) continue;
                                        if (diagnostic.category === "suggestion" && $80c6b1f413ab5323$var$config("ignoredSuggestionDiagnostics", scopeName).includes("".concat(diagnostic.code))) continue;
                                        if ($80c6b1f413ab5323$var$config("ignoreNonSuggestionSuggestionDiagnostics", scopeName) && diagnostic.category === "suggestion" && !(0, $ee93806a41573bb4$export$8b10423be8ce987b)(diagnostic.code, (0, $ee93806a41573bb4$export$70bfa4f5700cfeae).Suggestion)) continue;
                                        // Add a bit of extra validation that we have the necessary locations since linter v2
                                        // does not allow range-less messages anymore. This happens with configFileDiagnostics.
                                        var start = diagnostic.start, end = diagnostic.end;
                                        if (!start || !end) start = end = {
                                            line: 1,
                                            offset: 1
                                        };
                                        result.push({
                                            severity: _this.getSeverity($80c6b1f413ab5323$var$config("unusedAsInfo", scopeName), diagnostic),
                                            excerpt: diagnostic.text,
                                            location: {
                                                file: filePath,
                                                position: (0, $ee93806a41573bb4$export$19d00dfc4e734f8b)(start, end)
                                            }
                                        });
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                                            _iterator["return"]();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                            };
                            for(var _iterator1 = fileErrors[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true)_this = this, _loop();
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator1["return"] != null) {
                                    _iterator1["return"]();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator["return"] != null) {
                            _iterator["return"]();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                return result;
            }
        },
        {
            key: "selectGrammar",
            value: function selectGrammar(filePath) {
                var knownGramamr = this.fileGrammars.get(filePath);
                if (knownGramamr !== undefined) return knownGramamr;
                var selectedGrammar = atom.grammars.selectGrammar(filePath, "").scopeName;
                this.fileGrammars.set(filePath, selectedGrammar);
                return selectedGrammar;
            }
        },
        {
            key: "getSeverity",
            value: function getSeverity(unusedAsInfo, diagnostic) {
                if (unusedAsInfo && diagnostic.code === 6133) return "info";
                switch(diagnostic.category){
                    case "error":
                        return "error";
                    case "warning":
                        return "warning";
                    default:
                        return "info";
                }
            }
        }
    ]);
    return ErrorPusher;
}();
function $80c6b1f413ab5323$var$config(option, scope) {
    return atom.config.get("atom-typescript-updated.".concat(option), {
        scope: [
            scope
        ]
    });
}
















var $26f43d04544e9b7a$export$6932e15e784422f9 = /*#__PURE__*/ function() {
    "use strict";
    function TypescriptBuffer(buffer, deps) {
        var _this = this;
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, TypescriptBuffer);
        this.buffer = buffer;
        this.deps = deps;
        this.events = new $8qw4J$atom.Emitter();
        this.compileOnSave = false;
        this.subscriptions = new $8qw4J$atom.CompositeDisposable();
        this.on = this.events.on.bind(this.events);
        this.dispose = function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            TypescriptBuffer.bufferMap["delete"](this.buffer);
                            this.subscriptions.dispose();
                            return [
                                4,
                                this.close()
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }).call(_this);
        };
        this.init = function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!this.state) return [
                                2
                            ];
                            return [
                                4,
                                this.state.client.execute("open", {
                                    file: this.state.filePath,
                                    fileContent: this.buffer.getText()
                                })
                            ];
                        case 1:
                            _state.sent();
                            (0, $2893351583386024$export$8080b7556d9d6445)(this.getErr({
                                allFiles: false,
                                delay: 0
                            }));
                            return [
                                2
                            ];
                    }
                });
            }).call(_this);
        };
        this.close = function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var client, file;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                this.openPromise
                            ];
                        case 1:
                            _state.sent();
                            if (!this.state) return [
                                3,
                                3
                            ];
                            client = this.state.client;
                            file = this.state.filePath;
                            this.deps.clearFileErrors(file);
                            this.state.subscriptions.dispose();
                            this.state = undefined;
                            return [
                                4,
                                client.execute("close", {
                                    file: file
                                })
                            ];
                        case 2:
                            _state.sent();
                            _state.label = 3;
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            }).call(_this);
        };
        this.onDidChangePath = function(newPath) {
            (0, $2893351583386024$export$8080b7556d9d6445)(_this.close().then(function() {
                _this.openPromise = _this.open(newPath);
            }));
        };
        this.onDidSave = function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                Promise.all([
                                    this.getErr({
                                        allFiles: true,
                                        delay: 100
                                    }),
                                    this.doCompileOnSave()
                                ])
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }).call(_this);
        };
        this.onDidChangeText = function(param) {
            var changes = param.changes;
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var _this_state, client, filePath;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            // If there are no actual changes, or the file isn't open, we have nothing to do
                            if (changes.length === 0 || !this.state) return [
                                2
                            ];
                            _this_state = this.state, client = _this_state.client, filePath = _this_state.filePath;
                            // NOTE: this might look somewhat weird until we realize that
                            // awaiting on each "change" command may lead to arbitrary
                            // interleaving, while pushing them all at once guarantees
                            // that all subsequent "change" commands will be sequenced after
                            // the ones we pushed
                            return [
                                4,
                                Promise.all(changes.reduceRight(function(acc, param) {
                                    var oldRange = param.oldRange, newText = param.newText;
                                    acc.push(client.execute("change", {
                                        file: filePath,
                                        line: oldRange.start.row + 1,
                                        offset: oldRange.start.column + 1,
                                        endLine: oldRange.end.row + 1,
                                        endOffset: oldRange.end.column + 1,
                                        insertString: newText
                                    }));
                                    return acc;
                                }, []))
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }).call(_this);
        };
        var debouncedGetErr;
        this.subscriptions.add(atom.config.observe("atom-typescript-updated.getErrDebounceTimeout", function(val) {
            debouncedGetErr = (0, $8qw4J$lodash.debounce)(function() {
                (0, $2893351583386024$export$8080b7556d9d6445)(_this.getErr({
                    allFiles: false,
                    delay: 0
                }));
            }, val);
        }), buffer.onDidChangePath(this.onDidChangePath), buffer.onDidDestroy(function() {
            (0, $2893351583386024$export$8080b7556d9d6445)(_this.dispose());
        }), buffer.onDidSave(function() {
            (0, $2893351583386024$export$8080b7556d9d6445)(_this.onDidSave());
        }), buffer.onDidStopChanging(function(param) {
            var changes = param.changes;
            if (changes.length > 0) _this.deps.reportBuildStatus(undefined);
        }), buffer.onDidChangeText(function(arg) {
            // NOTE: we don't need to worry about interleaving here,
            // because onDidChangeText pushes all changes at once
            (0, $2893351583386024$export$8080b7556d9d6445)(_this.onDidChangeText(arg));
            debouncedGetErr();
        }));
        this.openPromise = this.open(this.buffer.getPath());
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(TypescriptBuffer, [
        {
            key: "getPath",
            value: function getPath() {
                return this.state && this.state.filePath;
            }
        },
        {
            key: "getInfo",
            value: function getInfo() {
                if (!this.state) return;
                return {
                    clientVersion: this.state.client.version,
                    tsConfigPath: this.state.configFile && this.state.configFile.getPath()
                };
            }
        },
        {
            key: "getErr",
            value: function getErr(opts) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var files;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!this.state) return [
                                    2
                                ];
                                files = opts.allFiles ? Array.from((0, $7580a2909a181bf5$export$d121654372a91687)()) : [
                                    this.state.filePath
                                ];
                                return [
                                    4,
                                    this.state.client.execute("geterr", {
                                        files: files,
                                        delay: opts.delay
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "compile",
            value: /** Throws! */ function compile() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var _this_state, client, filePath, result, fileNames, promises, saved;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!this.state) return [
                                    2
                                ];
                                _this_state = this.state, client = _this_state.client, filePath = _this_state.filePath;
                                return [
                                    4,
                                    client.execute("compileOnSaveAffectedFileList", {
                                        file: filePath
                                    })
                                ];
                            case 1:
                                result = _state.sent();
                                fileNames = (0, $8qw4J$lodash.flatten)(result.body.map(function(project) {
                                    return project.fileNames;
                                }));
                                if (fileNames.length === 0) return [
                                    2
                                ];
                                promises = fileNames.map(function(file) {
                                    return client.execute("compileOnSaveEmitFile", {
                                        file: file
                                    });
                                });
                                return [
                                    4,
                                    Promise.all(promises)
                                ];
                            case 2:
                                saved = _state.sent();
                                if (!saved.every(function(res) {
                                    return !!res.body;
                                })) throw new Error("Some files failed to emit");
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "doCompileOnSave",
            value: function doCompileOnSave() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var error, e;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!this.compileOnSave) return [
                                    2
                                ];
                                this.deps.reportBuildStatus(undefined);
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    this.compile()
                                ];
                            case 2:
                                _state.sent();
                                this.deps.reportBuildStatus({
                                    success: true
                                });
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                e = error;
                                console.error("Save failed with error", e);
                                this.deps.reportBuildStatus({
                                    success: false,
                                    message: e.message
                                });
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "open",
            value: function open(filePath) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var _this, client, result;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                if (!(filePath !== undefined && (0, $7580a2909a181bf5$export$225e59ca209a506)(filePath))) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    this.deps.getClient(filePath)
                                ];
                            case 1:
                                client = _state.sent();
                                this.state = {
                                    client: client,
                                    filePath: filePath,
                                    configFile: undefined,
                                    subscriptions: new $8qw4J$atom.CompositeDisposable()
                                };
                                this.state.subscriptions.add(client.on("restarted", function() {
                                    return (0, $2893351583386024$export$8080b7556d9d6445)(_this.init());
                                }));
                                return [
                                    4,
                                    this.init()
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    client.execute("projectInfo", {
                                        needFileNameList: false,
                                        file: filePath
                                    })
                                ];
                            case 3:
                                result = _state.sent();
                                if (!(result.body.configFileName !== undefined)) return [
                                    3,
                                    5
                                ];
                                this.state.configFile = new $8qw4J$atom.File(result.body.configFileName);
                                return [
                                    4,
                                    this.readConfigFile()
                                ];
                            case 4:
                                _state.sent();
                                this.state.subscriptions.add(this.state.configFile.onDidChange(function() {
                                    return (0, $2893351583386024$export$8080b7556d9d6445)(_this.readConfigFile());
                                }));
                                _state.label = 5;
                            case 5:
                                this.events.emit("opened");
                                return [
                                    3,
                                    7
                                ];
                            case 6:
                                return [
                                    2,
                                    this.close()
                                ];
                            case 7:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "readConfigFile",
            value: function readConfigFile() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                    var options, cfg;
                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!this.state || !this.state.configFile) return [
                                    2
                                ];
                                options = (0, $ee93806a41573bb4$export$bad43d745a81bbd5)(this.state.configFile.getPath());
                                this.compileOnSave = options.compileOnSave;
                                cfg = atom.config.get("atom-typescript-updated");
                                return [
                                    4,
                                    this.state.client.execute("configure", {
                                        file: this.state.filePath,
                                        formatOptions: options.formatCodeOptions,
                                        preferences: (0, $8qw4J$swchelperscjs_object_spreadcjs._)({
                                            includeCompletionsWithInsertText: true,
                                            includeCompletionsForModuleExports: cfg.includeCompletionsForModuleExports,
                                            quotePreference: cfg.quotePreference,
                                            importModuleSpecifierEnding: cfg.importModuleSpecifierEnding,
                                            importModuleSpecifierPreference: cfg.importModuleSpecifierPreference === "auto" ? undefined : cfg.importModuleSpecifierPreference
                                        }, options.preferences)
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ], [
        {
            key: "create",
            value: function create(buffer, deps) {
                var b = TypescriptBuffer.bufferMap.get(buffer);
                if (b) return b;
                else {
                    var nb = new TypescriptBuffer(buffer, deps);
                    TypescriptBuffer.bufferMap.set(buffer, nb);
                    return nb;
                }
            }
        }
    ]);
    return TypescriptBuffer;
}();
$26f43d04544e9b7a$export$6932e15e784422f9.bufferMap = new WeakMap();


var $a568bbacdc99572d$export$a0bbaae59860162e = /*#__PURE__*/ function() {
    "use strict";
    function TypescriptEditorPane(editor, opts) {
        var _this = this;
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, TypescriptEditorPane);
        this.editor = editor;
        this.opts = opts;
        this.subscriptions = new (0, $8qw4J$atom.CompositeDisposable)();
        this.isTypescript = false;
        this.destroy = function() {
            TypescriptEditorPane.editorMap["delete"](_this.editor);
            atom.views.getView(_this.editor).classList.remove("typescript-editor");
            _this.subscriptions.dispose();
            (0, $2893351583386024$export$8080b7556d9d6445)(_this.buffer.dispose());
        };
        /** NOTE:
         * it is implicitly assumed that `atom.workspace.getActiveTextEditor() === this.editor`
         * which has to be ensured at call site
         */ this.didActivate = function() {
            if (_this.isTypescript) _this.reportInfo();
        };
        this.onOpened = function() {
            var isActive = atom.workspace.getActiveTextEditor() === _this.editor;
            if (isActive) _this.reportInfo();
        };
        this.checkIfTypescript = function() {
            _this.isTypescript = (0, $7580a2909a181bf5$export$3aecee58e23ede2c)(_this.editor);
            if (_this.isTypescript) atom.views.getView(_this.editor).classList.add("typescript-editor");
            else atom.views.getView(_this.editor).classList.remove("typescript-editor");
        };
        this.buffer = (0, $26f43d04544e9b7a$export$6932e15e784422f9).create(editor.getBuffer(), opts);
        this.subscriptions.add(this.buffer.on("opened", this.onOpened));
        this.checkIfTypescript();
        this.subscriptions.add(editor.onDidChangePath(this.checkIfTypescript), editor.onDidChangeGrammar(this.checkIfTypescript), editor.onDidDestroy(this.destroy), editor.onDidSave(function() {
            if (atom.config.get("atom-typescript-updated.checkAllFilesOnSave")) atom.commands.dispatch(atom.views.getView(editor), "typescript:check-all-files");
        }));
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(TypescriptEditorPane, [
        {
            key: "reportInfo",
            value: function reportInfo() {
                var info = this.buffer.getInfo();
                if (info) this.opts.reportClientInfo(info);
            }
        }
    ], [
        {
            key: "createFactory",
            value: function createFactory(opts) {
                return function(editor) {
                    var tep = TypescriptEditorPane.editorMap.get(editor);
                    if (!tep) {
                        tep = new TypescriptEditorPane(editor, opts);
                        TypescriptEditorPane.editorMap.set(editor, tep);
                    }
                    return tep;
                };
            }
        },
        {
            key: "lookupPane",
            value: function lookupPane(editor) {
                return TypescriptEditorPane.editorMap.get(editor);
            }
        }
    ]);
    return TypescriptEditorPane;
}();
$a568bbacdc99572d$export$a0bbaae59860162e.editorMap = new WeakMap();


var $8655349229b8a3fd$export$f2c0a16002429d72 = /*#__PURE__*/ function() {
    "use strict";
    function PluginManager(state) {
        var _this = this;
        (0, $8qw4J$swchelperscjs_class_call_checkcjs._)(this, PluginManager);
        this.pending = new Set();
        this.clearErrors = function() {
            _this.errorPusher.clear();
        };
        this.clearFileErrors = function(filePath) {
            _this.errorPusher.clearFileErrors(filePath);
        };
        this.getClient = function(filePath) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    return [
                        2,
                        this.clientResolver.get(filePath)
                    ];
                });
            }).call(_this);
        };
        this.killAllServers = function() {
            (0, $2893351583386024$export$8080b7556d9d6445)(_this.clientResolver.restartAllServers());
        };
        this.withBuffer = function(filePath, action) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var normalizedFilePath, ed, buffer;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            normalizedFilePath = $8qw4J$path.normalize(filePath);
                            ed = atom.workspace.getTextEditors().find(function(p) {
                                return p.getPath() === normalizedFilePath;
                            });
                            // found open buffer
                            if (ed) return [
                                2,
                                action(ed.getBuffer())
                            ];
                            return [
                                4,
                                $8qw4J$atom.TextBuffer.load(normalizedFilePath)
                            ];
                        case 1:
                            buffer = _state.sent();
                            _state.label = 2;
                        case 2:
                            _state.trys.push([
                                2,
                                ,
                                4,
                                7
                            ]);
                            return [
                                4,
                                action(buffer)
                            ];
                        case 3:
                            return [
                                2,
                                _state.sent()
                            ];
                        case 4:
                            if (!buffer.isModified()) return [
                                3,
                                6
                            ];
                            return [
                                4,
                                buffer.save()
                            ];
                        case 5:
                            _state.sent();
                            _state.label = 6;
                        case 6:
                            buffer.destroy();
                            return [
                                7
                            ];
                        case 7:
                            return [
                                2
                            ];
                    }
                });
            })();
        };
        this.reportBusyWhile = function(title, generator) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var event;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!this.busySignalService) return [
                                3,
                                1
                            ];
                            return [
                                2,
                                this.busySignalService.reportBusyWhile(title, generator)
                            ];
                        case 1:
                            event = {
                                title: title
                            };
                            _state.label = 2;
                        case 2:
                            _state.trys.push([
                                2,
                                ,
                                4,
                                5
                            ]);
                            this.pending.add(event);
                            this.drawPending(Array.from(this.pending));
                            return [
                                4,
                                generator()
                            ];
                        case 3:
                            return [
                                2,
                                _state.sent()
                            ];
                        case 4:
                            this.pending["delete"](event);
                            this.drawPending(Array.from(this.pending));
                            return [
                                7
                            ];
                        case 5:
                            return [
                                2
                            ];
                    }
                });
            }).call(_this);
        };
        this.reportProgress = function(progress) {
            (0, $2893351583386024$export$8080b7556d9d6445)(_this.statusPanel.update({
                progress: progress
            }));
        };
        this.reportBuildStatus = function(buildStatus) {
            (0, $2893351583386024$export$8080b7556d9d6445)(_this.statusPanel.update({
                buildStatus: buildStatus
            }));
        };
        this.reportClientInfo = function(info) {
            (0, $2893351583386024$export$8080b7556d9d6445)(_this.statusPanel.update(info));
        };
        this.applyEdits = function(edits) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                var _this;
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    _this = this;
                    return [
                        2,
                        void Promise.all(edits.map(function(edit) {
                            return _this.withBuffer(edit.fileName, function(buffer) {
                                return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                                    return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                                        buffer.transact(function() {
                                            var changes = edit.textChanges.map(function(e) {
                                                return {
                                                    range: (0, $ee93806a41573bb4$export$477d491a08b070ec)(e),
                                                    newText: e.newText
                                                };
                                            }).reverse() // NOTE: needs reverse for cases where ranges are same for two changes
                                            .sort(function(a, b) {
                                                return b.range.compare(a.range);
                                            });
                                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                            try {
                                                for(var _iterator = changes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                    var change = _step.value;
                                                    buffer.setTextInRange(change.range, change.newText);
                                                }
                                            } catch (err) {
                                                _didIteratorError = true;
                                                _iteratorError = err;
                                            } finally{
                                                try {
                                                    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                                                        _iterator["return"]();
                                                    }
                                                } finally{
                                                    if (_didIteratorError) {
                                                        throw _iteratorError;
                                                    }
                                                }
                                            }
                                        });
                                        return [
                                            2
                                        ];
                                    });
                                })();
                            });
                        }))
                    ];
                });
            }).call(_this);
        };
        this.showTooltipAt = function(ed) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                atom.commands.dispatch(atom.views.getView(ed), "datatip:toggle")
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        };
        this.showSigHelpAt = function(ed) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
                return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                atom.commands.dispatch(atom.views.getView(ed), "signature-help:show")
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        };
        this.hideSigHelpAt = function(_) {
            return false;
        };
        this.rotateSigHelp = function(_, __) {
            return false;
        };
        this.histGoForward = function(ed, opts) {
            return _this.editorPosHist.goForward(ed, opts);
        };
        this.drawPending = (0, $8qw4J$lodash.throttle)(function(pending) {
            return (0, $2893351583386024$export$8080b7556d9d6445)(_this.statusPanel.update({
                pending: pending
            }));
        }, 100, {
            leading: false
        });
        this.subscriptions = new (0, $8qw4J$atom.CompositeDisposable)();
        this.clientResolver = new (0, $656dc62ff40b3cc7$export$dceb19333e080e82)(this.reportBusyWhile);
        this.subscriptions.add(this.clientResolver);
        this.statusPanel = new (0, $258730bbf662f4ed$export$e46d185d0654294e)();
        this.subscriptions.add(this.statusPanel);
        this.errorPusher = new (0, $80c6b1f413ab5323$export$a4d36ae2cf2e8cd)();
        this.subscriptions.add(this.errorPusher);
        this.codefixProvider = new (0, $e0bcaafd270c879a$export$9262ee226e3cab9d)(this.clientResolver, this.errorPusher, this.applyEdits);
        this.subscriptions.add(this.codefixProvider);
        this.semanticViewController = new (0, $1e8c6b8d10c1d614$export$951a8e3d4c79262)(this.getClient);
        this.subscriptions.add(this.semanticViewController);
        this.editorPosHist = new (0, $e6778e0cbaaba99c$export$37b735b3f7a16aff)(state && state.editorPosHistState);
        this.subscriptions.add(this.editorPosHist);
        this.symbolsViewController = new (0, $c69ac4021c07c8b9$export$bf8eec42fec7719)({
            histGoForward: this.histGoForward,
            getClient: this.getClient
        });
        this.subscriptions.add(this.symbolsViewController);
        this.typescriptPaneFactory = (0, $a568bbacdc99572d$export$a0bbaae59860162e).createFactory({
            clearFileErrors: this.clearFileErrors,
            getClient: this.getClient,
            reportBuildStatus: this.reportBuildStatus,
            reportClientInfo: this.reportClientInfo
        });
        this.subscribeEditors();
        // Register the commands
        this.subscriptions.add((0, $d7106e5ca616cb06$export$f647bfc0a5fe4336)({
            getClient: this.getClient,
            applyEdits: this.applyEdits,
            clearErrors: this.clearErrors,
            killAllServers: this.killAllServers,
            reportProgress: this.reportProgress,
            reportBuildStatus: this.reportBuildStatus,
            toggleSemanticViewController: function() {
                (0, $2893351583386024$export$8080b7556d9d6445)(_this.semanticViewController.toggle());
            },
            toggleFileSymbolsView: function(ed) {
                _this.symbolsViewController.toggleFileView(ed);
            },
            toggleProjectSymbolsView: function(ed) {
                _this.symbolsViewController.toggleProjectView(ed);
            },
            histGoForward: this.histGoForward,
            histGoBack: function() {
                return _this.editorPosHist.goBack();
            },
            histShowHistory: function() {
                return _this.editorPosHist.showHistory();
            },
            showTooltipAt: this.showTooltipAt,
            showSigHelpAt: this.showSigHelpAt,
            hideSigHelpAt: this.hideSigHelpAt,
            rotateSigHelp: this.rotateSigHelp
        }));
    }
    (0, $8qw4J$swchelperscjs_create_classcjs._)(PluginManager, [
        {
            key: "destroy",
            value: function destroy() {
                this.subscriptions.dispose();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = atom.workspace.getTextEditors()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var ed = _step.value;
                        var pane = (0, $a568bbacdc99572d$export$a0bbaae59860162e).lookupPane(ed);
                        if (pane) pane.destroy();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                            _iterator["return"]();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                this.clientResolver.dispose();
            }
        },
        {
            key: "serialize",
            value: function serialize() {
                return {
                    version: "0.1",
                    editorPosHistState: this.editorPosHist.serialize()
                };
            }
        },
        {
            key: "consumeLinter",
            value: function consumeLinter(register) {
                var _this = this;
                var linter = register({
                    name: "TypeScript"
                });
                this.errorPusher.setLinter(linter);
                this.subscriptions.add(this.clientResolver.on("diagnostics", function(param) {
                    var type = param.type, filePath = param.filePath, diagnostics = param.diagnostics;
                    _this.errorPusher.setErrors(type, filePath, diagnostics);
                }));
            }
        },
        {
            key: "consumeStatusBar",
            value: function consumeStatusBar(statusBar) {
                var statusPriority = 100;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = statusBar.getRightTiles()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var panel = _step.value;
                        if (atom.views.getView(panel.getItem()).tagName === "GRAMMAR-SELECTOR-STATUS") statusPriority = panel.getPriority() - 1;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                            _iterator["return"]();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var tile = statusBar.addRightTile({
                    item: this.statusPanel,
                    priority: statusPriority
                });
                var disp = new $8qw4J$atom.Disposable(function() {
                    tile.destroy();
                });
                this.subscriptions.add(disp);
                return disp;
            }
        },
        {
            key: "consumeDatatipService",
            value: function consumeDatatipService(datatip) {
                var disp = datatip.addProvider(new (0, $3dec627a7b52de57$export$62181cd26290fa50)(this.getClient));
                this.subscriptions.add(disp);
                return disp;
            }
        },
        {
            key: "consumeSigHelpService",
            value: function consumeSigHelpService(registry) {
                var provider = new (0, $f0827e2fd290d654$export$11ab8206b5e263e8)(this.getClient);
                var disp = registry(provider);
                this.subscriptions.add(disp, provider);
                return disp;
            }
        },
        {
            key: "consumeBusySignal",
            value: function consumeBusySignal(busySignalService) {
                var _this = this;
                this.busySignalService = busySignalService;
                var disp = {
                    dispose: function() {
                        if (_this.busySignalService) _this.busySignalService.dispose();
                        _this.busySignalService = undefined;
                    }
                };
                this.subscriptions.add(disp);
                return disp;
            }
        },
        {
            // Registering an autocomplete provider
            key: "provideAutocomplete",
            value: function provideAutocomplete() {
                return [
                    new (0, $2a2076bfbea7a68e$export$536c67bf76d43cfb)(this.getClient, this.applyEdits)
                ];
            }
        },
        {
            key: "provideIntentions",
            value: function provideIntentions() {
                return (0, $a4b711801eb3f0ef$export$c0ac1f0dd4073b70)(this.codefixProvider);
            }
        },
        {
            key: "provideIntentionsHighlight",
            value: function provideIntentionsHighlight() {
                return (0, $a4b711801eb3f0ef$export$bbfa3896d0c562e)(this.codefixProvider);
            }
        },
        {
            key: "provideCodeActions",
            value: function provideCodeActions() {
                return (0, $824935c6fe894b0b$export$d21c11139c8fe8ee)(this.codefixProvider);
            }
        },
        {
            key: "provideHyperclick",
            value: function provideHyperclick() {
                return (0, $f208e1245e4db9fc$export$51c07c30fb16d966)(this.getClient, this.histGoForward);
            }
        },
        {
            key: "provideReferences",
            value: function provideReferences() {
                return (0, $532eb743eaf241e3$export$b797847259776697)(this.getClient);
            }
        },
        {
            key: "provideOutlines",
            value: function provideOutlines() {
                return (0, $c5ee2b7644db248e$export$2b92277a69331cbb)(this.getClient);
            }
        },
        {
            key: "provideDefinitions",
            value: function provideDefinitions() {
                return (0, $d2f9fe9bb7e67a01$export$a9ca9b3a8941e92e)(this.getClient);
            }
        },
        {
            key: "provideCodeHighlight",
            value: function provideCodeHighlight() {
                return (0, $593b916ea2f68ad2$export$6413bc8b6e281ffa)(this.getClient);
            }
        },
        {
            key: "subscribeEditors",
            value: function subscribeEditors() {
                var _this = this;
                this.subscriptions.add(atom.workspace.observeTextEditors(function(editor) {
                    _this.typescriptPaneFactory(editor);
                }), atom.workspace.onDidChangeActiveTextEditor(function(ed) {
                    if (ed && (0, $7580a2909a181bf5$export$3aecee58e23ede2c)(ed)) {
                        (0, $2893351583386024$export$8080b7556d9d6445)(_this.statusPanel.show());
                        var tep = (0, $a568bbacdc99572d$export$a0bbaae59860162e).lookupPane(ed);
                        if (tep) tep.didActivate();
                    } else (0, $2893351583386024$export$8080b7556d9d6445)(_this.statusPanel.hide());
                }));
            }
        }
    ]);
    return PluginManager;
}();


var $64e7645780377c6f$var$pluginManager;
function $64e7645780377c6f$export$234c45b355edd85b(state) {
    (0, ($parcel$interopDefault($8qw4J$etch))).setScheduler(atom.views);
    $64e7645780377c6f$var$pluginManager = new (0, $8655349229b8a3fd$export$f2c0a16002429d72)(state);
    setImmediate(function() {
        return (0, $2893351583386024$export$8080b7556d9d6445)($64e7645780377c6f$var$checkAndInstallDependencies());
    });
}
function $64e7645780377c6f$var$checkAndInstallDependencies() {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $8qw4J$swchelperscjs_async_to_generatorcjs._)(function() {
        var packagesProvidingUIServices;
        return (0, $8qw4J$swchelperscjs_ts_generatorcjs._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    packagesProvidingUIServices = [
                        "atom-ide-ui",
                        "linter",
                        "nuclide"
                    ];
                    if (!!packagesProvidingUIServices.some(function(p) {
                        return atom.packages.isPackageLoaded(p);
                    })) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        $8qw4J$atompackagedeps.install("atom-typescript-updated", true)
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
            }
        });
    })();
}
function $64e7645780377c6f$export$e96c1edfdaf2d1db() {
    if ($64e7645780377c6f$var$pluginManager) $64e7645780377c6f$var$pluginManager.destroy();
    $64e7645780377c6f$var$pluginManager = undefined;
}
function $64e7645780377c6f$export$dfdc1655ccc5b9cb() {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.serialize();
    else return undefined;
}
function $64e7645780377c6f$export$a44ae7a0ffe32de(serialized) {
    return (0, $4759e62349e0b646$export$a3a95952d8506109).create(serialized.data);
}
function $64e7645780377c6f$export$7513da91a6067379(register) {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.consumeLinter(register);
}
function $64e7645780377c6f$export$a51a2902ac3affa7(statusBar) {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.consumeStatusBar(statusBar);
}
function $64e7645780377c6f$export$ca7950270ff61d66(datatipService) {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.consumeDatatipService(datatipService);
}
function $64e7645780377c6f$export$3ceee8b9bf304299(registry) {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.consumeSigHelpService(registry);
}
function $64e7645780377c6f$export$29fa66c1419daddc(busySignalService) {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.consumeBusySignal(busySignalService);
}
function $64e7645780377c6f$export$71db97b929e8341b() {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.provideAutocomplete();
}
function $64e7645780377c6f$export$3781320452d1dce8() {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.provideIntentions();
}
function $64e7645780377c6f$export$6f2bf0ac3e405d7b() {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.provideIntentionsHighlight();
}
function $64e7645780377c6f$export$7990dc4c350e7387() {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.provideCodeActions();
}
function $64e7645780377c6f$export$1c7ef754fc81a243() {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.provideHyperclick();
}
function $64e7645780377c6f$export$e32ae1c830f39f16() {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.provideReferences();
}
function $64e7645780377c6f$export$cec97b3152a9a2a4() {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.provideOutlines();
}
function $64e7645780377c6f$export$60b479b2c6dcce92() {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.provideDefinitions();
}
function $64e7645780377c6f$export$67b00a253126c08e() {
    if ($64e7645780377c6f$var$pluginManager) return $64e7645780377c6f$var$pluginManager.provideCodeHighlight();
}


//# sourceMappingURL=main.js.map
