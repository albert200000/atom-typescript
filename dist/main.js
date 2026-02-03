import {_ as $j0dGC$_} from "@swc/helpers/_/_async_to_generator";
import {_ as $j0dGC$_1} from "@swc/helpers/_/_ts_generator";
import {install as $j0dGC$install} from "atom-package-deps";
import $j0dGC$etch, * as $j0dGC$etch1 from "etch";
import {_ as $j0dGC$_2} from "@swc/helpers/_/_class_call_check";
import {_ as $j0dGC$_3} from "@swc/helpers/_/_create_class";
import {_ as $j0dGC$_4} from "@swc/helpers/_/_object_spread";
import {CompositeDisposable as $j0dGC$CompositeDisposable, Point as $j0dGC$Point, Range as $j0dGC$Range, TextBuffer as $j0dGC$TextBuffer, Disposable as $j0dGC$Disposable, Emitter as $j0dGC$Emitter, BufferedProcess as $j0dGC$BufferedProcess, BufferedNodeProcess as $j0dGC$BufferedNodeProcess, File as $j0dGC$File} from "atom";
import {isEqual as $j0dGC$isEqual, memoize as $j0dGC$memoize, throttle as $j0dGC$throttle, debounce as $j0dGC$debounce, flatten as $j0dGC$flatten} from "lodash";
import $j0dGC$lodashdebounce from "lodash/debounce";
import {_ as $j0dGC$_5} from "@swc/helpers/_/_sliced_to_array";
import {_ as $j0dGC$_6} from "@swc/helpers/_/_to_consumable_array";
import * as $j0dGC$path from "path";
import $j0dGC$typescript from "typescript";
import {_ as $j0dGC$_7} from "@swc/helpers/_/_ts_values";
import {_ as $j0dGC$_8} from "@swc/helpers/_/_call_super";
import {_ as $j0dGC$_9} from "@swc/helpers/_/_inherits";
import $j0dGC$byline from "byline";
import {Transform as $j0dGC$Transform} from "stream";
import {_ as $j0dGC$_10} from "@swc/helpers/_/_type_of";
import $j0dGC$fs, {access as $j0dGC$access, constants as $j0dGC$constants, readFile as $j0dGC$readFile} from "fs";
import * as $j0dGC$jsoncparser from "jsonc-parser";
import $j0dGC$resolve from "resolve";
import {_ as $j0dGC$_11} from "@swc/helpers/_/_object_spread_props";
import {match as $j0dGC$match, filter as $j0dGC$filter} from "fuzzaldrin";
import $j0dGC$atomselectlist from "atom-select-list";
import {move as $j0dGC$move} from "fs-plus";





function $e61b31fac60530e8$export$8080b7556d9d6445(promise) {
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

























var $ee2d752c6bad64f9$export$70bfa4f5700cfeae = (0, $j0dGC$typescript).DiagnosticCategory;
function $ee2d752c6bad64f9$export$9978d8c48293dc72(point) {
    return {
        line: point.row + 1,
        offset: point.column + 1
    };
}
function $ee2d752c6bad64f9$export$2b9d56ac2fba440c(loc) {
    return new $j0dGC$Point(loc.line - 1, loc.offset - 1);
}
function $ee2d752c6bad64f9$export$477d491a08b070ec(span) {
    return $ee2d752c6bad64f9$export$19d00dfc4e734f8b(span.start, span.end);
}
function $ee2d752c6bad64f9$export$19d00dfc4e734f8b(start, end) {
    return new $j0dGC$Range($ee2d752c6bad64f9$export$2b9d56ac2fba440c(start), $ee2d752c6bad64f9$export$2b9d56ac2fba440c(end));
}
function $ee2d752c6bad64f9$export$430a7b9c6c8900f6(range) {
    return {
        line: range.start.row + 1,
        offset: range.start.column + 1,
        endLine: range.end.row + 1,
        endOffset: range.end.column + 1
    };
}
function $ee2d752c6bad64f9$export$bad43d745a81bbd5(configFile) {
    var config = $ee2d752c6bad64f9$var$loadConfig(configFile);
    var options = config.formatCodeOptions;
    return {
        formatCodeOptions: (0, $j0dGC$_4)({
            indentSize: atom.config.get("editor.tabLength"),
            tabSize: atom.config.get("editor.tabLength")
        }, options),
        compileOnSave: !!config.compileOnSave,
        preferences: config.preferences ? config.preferences : {}
    };
}
function $ee2d752c6bad64f9$var$loadConfig(configFile) {
    if ($j0dGC$extname(configFile) !== ".json") configFile = "".concat(configFile, ".json");
    var config = (0, $j0dGC$typescript).readConfigFile(configFile, function(file) {
        return (0, $j0dGC$typescript).sys.readFile(file);
    }).config;
    if (config === undefined) return {};
    if (typeof config["extends"] === "string") {
        var extendsPath = $j0dGC$join($j0dGC$dirname(configFile), config["extends"]);
        var extendsConfig = $ee2d752c6bad64f9$var$loadConfig(extendsPath);
        config = Object.assign({}, extendsConfig, config);
    }
    return config;
}
function $ee2d752c6bad64f9$export$9db02c2ec8f703d4(i) {
    return {
        label: $ee2d752c6bad64f9$export$c2a999eb584410f0(i.prefixDisplayParts) + i.parameters.map(function(x) {
            return $ee2d752c6bad64f9$export$c2a999eb584410f0(x.displayParts);
        }).join($ee2d752c6bad64f9$export$c2a999eb584410f0(i.separatorDisplayParts)) + $ee2d752c6bad64f9$export$c2a999eb584410f0(i.suffixDisplayParts),
        documentation: $ee2d752c6bad64f9$export$c2a999eb584410f0(i.documentation),
        parameters: i.parameters.map($ee2d752c6bad64f9$export$f7eb6a32d312d66a)
    };
}
function $ee2d752c6bad64f9$export$f7eb6a32d312d66a(p) {
    return {
        label: $ee2d752c6bad64f9$export$c2a999eb584410f0(p.displayParts),
        documentation: $ee2d752c6bad64f9$export$c2a999eb584410f0(p.documentation)
    };
}
function $ee2d752c6bad64f9$export$c2a999eb584410f0(x) {
    return x.map(function(i) {
        return i.text;
    }).join("");
}
var $ee2d752c6bad64f9$export$8b10423be8ce987b = function() {
    var codeToCategory;
    return function(code, category) {
        if (code === undefined) return true;
        if (codeToCategory === undefined) codeToCategory = new Map(Object.values((0, $j0dGC$typescript).Diagnostics).map(function(x) {
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






function $e452e33174581f1c$var$eventLoopYielder(delayMs, maxTimeMs) {
    var started = performance.now();
    var lastYield = started;
    return function() {
        return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
            var now;
            return (0, $j0dGC$_1)(this, function(_state) {
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
/** Throws maximum time reached error */ function $e452e33174581f1c$var$maxTimeError(name, timeS) {
    var err = new Error("Max time reached");
    atom.notifications.addError("".concat(name, " took more than ").concat(timeS, " seconds to complete"), {
        dismissable: true,
        description: "".concat(name, " took too long to complete and was terminated."),
        stack: err.stack
    });
    return err;
}
function $e452e33174581f1c$export$e4043f67d36cbb26(sourceCode, scopeName) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var yielder, buf, grammar, lm, end, iter, pos, res, _res, nextPos;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    yielder = $e452e33174581f1c$var$eventLoopYielder(100, 5000);
                    buf = new (0, $j0dGC$TextBuffer)();
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
                        $e452e33174581f1c$var$tokenized(lm)
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
                    (_res = res).push.apply(_res, (0, $j0dGC$_6)(iter.getCloseScopeIds().map(function() {
                        return "</span>";
                    })).concat((0, $j0dGC$_6)(iter.getOpenScopeIds().map(function(x) {
                        return '<span class="'.concat(lm.classNameForScopeId(x), '">');
                    }))));
                    iter.moveToSuccessor();
                    nextPos = iter.getPosition();
                    res.push($e452e33174581f1c$var$escapeHTML(buf.getTextInRange([
                        pos,
                        nextPos
                    ])));
                    return [
                        4,
                        yielder()
                    ];
                case 4:
                    if (!_state.sent()) {
                        console.error($e452e33174581f1c$var$maxTimeError("Atom-TypeScript: Highlighter", 5));
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
function $e452e33174581f1c$var$tokenized(lm) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        return (0, $j0dGC$_1)(this, function(_state) {
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
function $e452e33174581f1c$var$escapeHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}


// Return line/offset position in the editor using 1-indexed coordinates
function $47ae2d5cb2e495d2$var$getEditorPosition(editor) {
    var pos = editor.getCursorBufferPosition();
    return {
        line: pos.row + 1,
        offset: pos.column + 1
    };
}
function $47ae2d5cb2e495d2$export$225e59ca209a506(filePath) {
    if (filePath === undefined) return false;
    return $47ae2d5cb2e495d2$var$isAllowedExtension($j0dGC$extname(filePath));
}
function $47ae2d5cb2e495d2$export$d9994fe0923974a5() {
    var config = atom.config.get("atom-typescript-updated");
    var tsScopes = (0, $j0dGC$_6)(config.tsSyntaxScopes).concat((0, $j0dGC$_6)(config.jsSyntaxScopes));
    return tsScopes;
}
function $47ae2d5cb2e495d2$export$3aecee58e23ede2c(editor) {
    return $47ae2d5cb2e495d2$export$225e59ca209a506(editor.getPath()) && $47ae2d5cb2e495d2$export$bde40b56025b92b9(editor);
}
function $47ae2d5cb2e495d2$export$bde40b56025b92b9(editor) {
    var _editor_getRootScopeDescriptor_getScopesArray = (0, $j0dGC$_5)(editor.getRootScopeDescriptor().getScopesArray(), 1), scopeName = _editor_getRootScopeDescriptor_getScopesArray[0];
    return $47ae2d5cb2e495d2$export$d9994fe0923974a5().includes(scopeName);
}
function $47ae2d5cb2e495d2$var$notNullary(x) {
    return x != null;
}
function $47ae2d5cb2e495d2$var$memoizeThrottle(func, wait) {
    var mem = (0, $j0dGC$memoize)(function(_param) {
        return (0, $j0dGC$throttle)(func, wait, {
            leading: true
        });
    });
    return function(param) {
        return mem(param)(param);
    }; // NOTE: leading MUST be true for this ! to hold
}
var $47ae2d5cb2e495d2$var$isAllowedExtension = $47ae2d5cb2e495d2$var$memoizeThrottle(function(ext) {
    var config = atom.config.get("atom-typescript-updated");
    var tsExts = (0, $j0dGC$_6)(config.tsFileExtensions).concat((0, $j0dGC$_6)(config.jsFileExtensions));
    if (config.extensionsFromGrammars) {
        var _instance, _tsExts;
        var _atom_config_get;
        var custom = (_atom_config_get = atom.config.get("core.customFileTypes")) !== null && _atom_config_get !== void 0 ? _atom_config_get : {};
        var scopes = $47ae2d5cb2e495d2$export$d9994fe0923974a5();
        (_tsExts = tsExts).push.apply(_tsExts, (0, $j0dGC$_6)((_instance = []).concat.apply(_instance, (0, $j0dGC$_6)(scopes.map(function(scope) {
            var _atom_grammars_grammarForScopeName;
            return (_atom_grammars_grammarForScopeName = atom.grammars.grammarForScopeName(scope)) === null || _atom_grammars_grammarForScopeName === void 0 ? void 0 : _atom_grammars_grammarForScopeName.fileTypes;
        })).concat((0, $j0dGC$_6)(scopes.map(function(scope) {
            return custom[scope];
        })))).filter($47ae2d5cb2e495d2$var$notNullary).map(function(s) {
            return ".".concat(s);
        })));
    }
    return tsExts.includes(ext);
}, 5000);
function $47ae2d5cb2e495d2$export$f25e34a2b31a939c(editor, position) {
    var file = editor.getPath();
    if (file !== undefined) {
        var location = position ? (0, $ee2d752c6bad64f9$export$9978d8c48293dc72)(position) : $47ae2d5cb2e495d2$var$getEditorPosition(editor);
        return (0, $j0dGC$_4)({
            file: file
        }, location);
    }
}
function $47ae2d5cb2e495d2$export$d121654372a91687() {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, ed, err;
    return (0, $j0dGC$_1)(this, function(_state) {
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
                if (!$47ae2d5cb2e495d2$export$3aecee58e23ede2c(ed)) return [
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













function $901a7b16ca8b520b$var$getElStartLine(elem) {
    var v = elem.dataset["startLine"];
    return v !== undefined ? parseInt(v, 10) - 1 : 0;
}
function $901a7b16ca8b520b$var$getElEndLine(elem) {
    var v = elem.dataset["endLine"];
    return v !== undefined ? parseInt(v, 10) - 1 : 0;
}
function $901a7b16ca8b520b$export$a4ea95adf60c92fc(startLine, endLine, node) {
    var children = node.querySelectorAll(":scope > ol > li.node");
    if (children.length === 0) return undefined;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Array.from(children)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var elem = _step.value;
            var start = $901a7b16ca8b520b$var$getElStartLine(elem);
            var end = $901a7b16ca8b520b$var$getElEndLine(elem);
            if (isFinite(start) && isFinite(end)) {
                if (startLine >= start && endLine <= end) {
                    var selected = $901a7b16ca8b520b$export$a4ea95adf60c92fc(startLine, endLine, elem);
                    if (selected) return selected;
                    else return elem;
                } else if (isFinite(end) && endLine < end) break;
            }
            var selectedChild = $901a7b16ca8b520b$export$a4ea95adf60c92fc(startLine, endLine, elem);
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
    var nstart = $901a7b16ca8b520b$var$getElStartLine(node);
    var nend = $901a7b16ca8b520b$var$getElEndLine(node);
    if (isFinite(nstart) && isFinite(nend) && startLine >= nstart && endLine <= nend) return node;
    return undefined;
}
function $901a7b16ca8b520b$export$1d9ba002f33dc82b(node) {
    return node.spans.length > 0 ? node.spans[0].start.line - 1 : 0;
}
function $901a7b16ca8b520b$export$53f1c18187345410(node) {
    return node.spans.length > 0 ? node.spans[0].start.offset - 1 : 0;
}
function $901a7b16ca8b520b$export$f2907b76aa85709(node) {
    var s = node.spans;
    return s.length > 0 ? s[s.length - 1].end.line - 1 : 0;
}
function $901a7b16ca8b520b$export$8d37f6070173ccdc(newTree, oldTree) {
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
                if (!$901a7b16ca8b520b$export$8d37f6070173ccdc(newChild, oldChild)) {
                    // try, if a child was removed
                    oldChild = oldTree.childItems[i + 1];
                    if (!$901a7b16ca8b520b$export$8d37f6070173ccdc(newChild, oldChild)) {
                        // try, if a child was added
                        oldChild = oldTree.childItems[i - 1];
                        $901a7b16ca8b520b$export$8d37f6070173ccdc(newChild, oldChild);
                    }
                }
            }
        }
        return true;
    }
    return false;
}
function $901a7b16ca8b520b$export$c2b0a16388cba90f(navTree) {
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
            return $901a7b16ca8b520b$export$1d9ba002f33dc82b(a) - $901a7b16ca8b520b$export$1d9ba002f33dc82b(b);
        });
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = navTree.childItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var child = _step.value;
                $901a7b16ca8b520b$export$c2b0a16388cba90f(child);
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
function $901a7b16ca8b520b$export$e4d153b3e021fb47(node, pos) {
    var start = $901a7b16ca8b520b$var$getElStartLine(node);
    var end = $901a7b16ca8b520b$var$getElEndLine(node);
    if (start <= pos && end >= pos) {
        if ($901a7b16ca8b520b$export$a4ea95adf60c92fc(start, end, node)) // -> there is a node "further down" that should get selected
        return false;
        return true;
    }
    return false;
}
function $901a7b16ca8b520b$export$8cdf83cd3204bbcd(n1, n2) {
    return n1.text === n2.text && (0, $j0dGC$isEqual)(n1.spans, n2.spans);
}
function $901a7b16ca8b520b$export$47553c2643784b50(node, event) {
    return !!node.childItems && event.target === event.currentTarget;
}


var $86af674b67b24207$export$814b29caa594376c = /*#__PURE__*/ function() {
    "use strict";
    function NavigationNodeComponent(props) {
        (0, $j0dGC$_2)(this, NavigationNodeComponent);
        this.props = props;
        $j0dGC$initialize(this);
    }
    (0, $j0dGC$_3)(NavigationNodeComponent, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.props = (0, $j0dGC$_4)({}, this.props, props);
                                return [
                                    4,
                                    $j0dGC$update(this)
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $j0dGC$destroy(this)
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
                var _this_props_navTree_spans__start, _this_props_navTree_spans_, _this_props_navTree_spans__end, _this_props_navTree_spans_1;
                var node = this.props.navTree;
                var ctrl = this.props.ctrl;
                var classes = (node.childItems ? "nested-" : "") + "item" + (node.collapsed ? " collapsed" : " expanded");
                var styleClasses = this.getStyles();
                return $j0dGC$dom("li", {
                    className: "node entry exanded list-" + classes,
                    dataset: {
                        startLine: (_this_props_navTree_spans_ = this.props.navTree.spans[0]) === null || _this_props_navTree_spans_ === void 0 ? void 0 : (_this_props_navTree_spans__start = _this_props_navTree_spans_.start) === null || _this_props_navTree_spans__start === void 0 ? void 0 : _this_props_navTree_spans__start.line,
                        endLine: (_this_props_navTree_spans_1 = this.props.navTree.spans[0]) === null || _this_props_navTree_spans_1 === void 0 ? void 0 : (_this_props_navTree_spans__end = _this_props_navTree_spans_1.end) === null || _this_props_navTree_spans__end === void 0 ? void 0 : _this_props_navTree_spans__end.line
                    }
                }, $j0dGC$dom("div", {
                    className: "header list-item",
                    on: {
                        click: function(event) {
                            return _this.entryClicked(event, node);
                        }
                    }
                }, $j0dGC$dom("span", {
                    className: styleClasses
                }, node.text)), $j0dGC$dom("ol", {
                    className: "entries list-tree"
                }, node.childItems ? node.childItems.map(function(sn, i) {
                    return $j0dGC$dom(NavigationNodeComponent, {
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
                var isToggle = (0, $901a7b16ca8b520b$export$47553c2643784b50)(node, event);
                if (!isToggle) this.props.ctrl.gotoNode(node);
                else {
                    node.collapsed = !node.collapsed;
                    (0, $e61b31fac60530e8$export$8080b7556d9d6445)($j0dGC$update(this));
                }
            }
        }
    ]);
    return NavigationNodeComponent;
}();



var $9e5f8d5b25f7ce4d$export$1beacdeb2d370927 = /*#__PURE__*/ function() {
    "use strict";
    function NavigationTreeComponent(props) {
        var _this = this;
        (0, $j0dGC$_2)(this, NavigationTreeComponent);
        this.props = props;
        this.subscriptions = new (0, $j0dGC$CompositeDisposable)();
        this.longLineLength = 4000;
        this.largeFileLineCount = 500;
        this.loadNavTree = function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var filePath, client, navtreeResult, navTree, err;
                return (0, $j0dGC$_1)(this, function(_state) {
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
                                $j0dGC$update(this)
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
            var _findNodeAt;
            var firstNodeElem = _this.firstNode();
            if (!firstNodeElem) return;
            var cursorLine = newBufferPosition.row;
            var _findNodeAt_querySelector;
            var selectedChild = (_findNodeAt_querySelector = (_findNodeAt = (0, $901a7b16ca8b520b$export$a4ea95adf60c92fc)(cursorLine, cursorLine, firstNodeElem)) === null || _findNodeAt === void 0 ? void 0 : _findNodeAt.querySelector(".header")) !== null && _findNodeAt_querySelector !== void 0 ? _findNodeAt_querySelector : undefined;
            var currentSelection = _this.getSelectedNode();
            if (selectedChild !== currentSelection) {
                if (currentSelection) currentSelection.classList.remove("selected");
                if (selectedChild) selectedChild.classList.add("selected");
            }
        };
        this.subscribeToEditor = function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var lineCount;
                return (0, $j0dGC$_1)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (this.editorScrolling) this.editorScrolling.dispose();
                            if (this.editorChanging) this.editorChanging.dispose();
                            if (!editor || !$47ae2d5cb2e495d2$export$3aecee58e23ede2c(editor)) return [
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
                            this.editorChanging = editor.onDidStopChanging(lineCount === 0 ? this.loadNavTree : (0, $j0dGC$lodashdebounce)(this.loadNavTree, Math.max(lineCount / 5, 300)));
                            return [
                                2
                            ];
                    }
                });
            }).call(_this);
        };
        (0, $901a7b16ca8b520b$export$c2b0a16388cba90f)(props.navTree);
        $j0dGC$initialize(this);
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
    (0, $j0dGC$_3)(NavigationTreeComponent, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (props.navTree !== undefined) this.setNavTree(props.navTree);
                                this.props = (0, $j0dGC$_4)({}, this.props, props);
                                return [
                                    4,
                                    $j0dGC$update(this)
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (this.editorScrolling) this.editorScrolling.dispose();
                                if (this.editorChanging) this.editorChanging.dispose();
                                this.editorScrolling = undefined;
                                this.editorChanging = undefined;
                                this.subscriptions.dispose();
                                return [
                                    4,
                                    $j0dGC$destroy(this)
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                var _this_element_querySelector;
                return (_this_element_querySelector = this.element.querySelector(".header.selected")) !== null && _this_element_querySelector !== void 0 ? _this_element_querySelector : undefined;
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
                var _this_element_querySelector;
                return (_this_element_querySelector = this.element.querySelector("li.node")) !== null && _this_element_querySelector !== void 0 ? _this_element_querySelector : undefined;
            }
        },
        {
            key: "render",
            value: function render() {
                var maybeNavNodeComp = this.props.navTree ? $j0dGC$dom((0, $86af674b67b24207$export$814b29caa594376c), {
                    navTree: this.props.navTree,
                    ctrl: this
                }) : null;
                return $j0dGC$dom("div", {
                    className: "atomts atomts-semantic-view native-key-bindings"
                }, $j0dGC$dom("ol", {
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
                var gotoLine = (0, $901a7b16ca8b520b$export$1d9ba002f33dc82b)(node);
                var gotoOffset = (0, $901a7b16ca8b520b$export$53f1c18187345410)(node);
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
                (0, $901a7b16ca8b520b$export$c2b0a16388cba90f)(navTree);
                if ((0, $j0dGC$isEqual)(navTree, this.props.navTree)) return;
                (0, $901a7b16ca8b520b$export$8d37f6070173ccdc)(navTree, this.props.navTree);
                this.props.navTree = navTree;
                var node = this.firstNode();
                if (node) {
                    var cursorLine = this.getCursorLine();
                    if (cursorLine !== undefined) this.markSelection((0, $901a7b16ca8b520b$export$a4ea95adf60c92fc)(cursorLine, cursorLine, node));
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


var $cea6b8bc91af2731$export$c5c441a5719d665b = "atom-typescript://semantic-view";
var $cea6b8bc91af2731$export$a3a95952d8506109 = /*#__PURE__*/ function() {
    "use strict";
    function SemanticView(config) {
        (0, $j0dGC$_2)(this, SemanticView);
        this.comp = new (0, $9e5f8d5b25f7ce4d$export$1beacdeb2d370927)({
            navTree: config.navTree
        });
    }
    (0, $j0dGC$_3)(SemanticView, [
        {
            key: "element",
            get: function get() {
                return this.comp.element;
            }
        },
        {
            key: "setGetClient",
            value: function setGetClient(gc) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                return $cea6b8bc91af2731$export$c5c441a5719d665b;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
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
$cea6b8bc91af2731$export$a3a95952d8506109.instance = null;



























// Callbacks keeps track of all the outstanding requests




var $853179f3674bb25b$export$2b3937e1c5d995d8 = /*#__PURE__*/ function() {
    "use strict";
    function Callbacks(reportBusyWhile) {
        (0, $j0dGC$_2)(this, Callbacks);
        this.reportBusyWhile = reportBusyWhile;
        this.callbacks = new Map();
        this.interval = 0;
    }
    (0, $j0dGC$_3)(Callbacks, [
        {
            key: "add",
            value: function add(seq, command) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var _this, promise;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
var $33e0bcf1de16974e$var$INSPECT_TSSERVER = false;
var $33e0bcf1de16974e$var$commandWithResponseMap = {
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
var $33e0bcf1de16974e$var$commandsWithMultistepMap = {
    geterr: true,
    geterrForProject: true
};
var $33e0bcf1de16974e$var$eventTypesMap = {
    configFileDiag: true,
    semanticDiag: true,
    suggestionDiag: true,
    syntaxDiag: true
};
var $33e0bcf1de16974e$var$commandWithResponse = new Set(Object.keys($33e0bcf1de16974e$var$commandWithResponseMap));
var $33e0bcf1de16974e$var$commandWithMultistep = new Set(Object.keys($33e0bcf1de16974e$var$commandsWithMultistepMap));
var $33e0bcf1de16974e$var$eventTypes = new Set(Object.keys($33e0bcf1de16974e$var$eventTypesMap));
function $33e0bcf1de16974e$var$isCommandWithResponse(command) {
    return $33e0bcf1de16974e$var$commandWithResponse.has(command);
}
function $33e0bcf1de16974e$var$isCommandWithMultistep(command) {
    return $33e0bcf1de16974e$var$commandWithMultistep.has(command);
}
function $33e0bcf1de16974e$var$isKnownDiagEventType(event) {
    return $33e0bcf1de16974e$var$eventTypes.has(event);
}
var $33e0bcf1de16974e$export$21f68d6aa461e875 = /*#__PURE__*/ function() {
    "use strict";
    function TypescriptServiceClient(tsServerPath, version, reportBusyWhile) {
        var _this = this;
        var _this1 = this;
        (0, $j0dGC$_2)(this, TypescriptServiceClient);
        this.tsServerPath = tsServerPath;
        this.version = version;
        this.reportBusyWhile = reportBusyWhile;
        this.emitter = new (0, $j0dGC$Emitter)();
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
        var _version_split_slice_map = (0, $j0dGC$_5)(version.split(".").slice(0, 2).map(function(x) {
            return parseInt(x, 10);
        }), 2), major = _version_split_slice_map[0], minor = _version_split_slice_map[1];
        this.multistepSupported = major > 2 || major === 2 && minor >= 2;
        this.callbacks = new (0, $853179f3674bb25b$export$2b3937e1c5d995d8)(this.reportBusyWhile);
        this.server = this.startServer();
    }
    (0, $j0dGC$_3)(TypescriptServiceClient, [
        {
            key: "execute",
            value: function execute(command) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var req, result;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                        if ($33e0bcf1de16974e$var$isCommandWithResponse(command) || this.multistepSupported && $33e0bcf1de16974e$var$isCommandWithMultistep(command)) result = this.callbacks.add(req.seq, command);
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var _this, terminated;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var _this, server, graceTimer;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                var cp = $33e0bcf1de16974e$var$startServer(this.tsServerPath);
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
                $33e0bcf1de16974e$var$messageStream(cp.stdout).on("data", this.onMessage);
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
                    if ($33e0bcf1de16974e$var$isKnownDiagEventType(res.event)) this.emitter.emit(res.event, res.body);
                    else if (res.event === "requestCompleted") this.callbacks.resolveMS(res.body);
                }
            }
        }
    ]);
    return TypescriptServiceClient;
}();
function $33e0bcf1de16974e$var$startServer(tsServerPath) {
    var locale = atom.config.get("atom-typescript-updated").locale;
    var tsServerArgs = locale ? [
        "--locale",
        locale
    ] : [];
    if ($33e0bcf1de16974e$var$INSPECT_TSSERVER) return new (0, $j0dGC$BufferedProcess)({
        command: "node",
        args: [
            "--inspect",
            tsServerPath
        ].concat(tsServerArgs)
    }).process;
    else return new (0, $j0dGC$BufferedNodeProcess)({
        command: tsServerPath,
        args: tsServerArgs
    }).process;
}
function $33e0bcf1de16974e$var$messageStream(input) {
    return input.pipe((0, $j0dGC$byline)()).pipe(new $33e0bcf1de16974e$var$MessageStream());
}
/** Helper to parse the tsserver output stream to a message stream  */ var $33e0bcf1de16974e$var$MessageStream = /*#__PURE__*/ function(Transform) {
    "use strict";
    (0, $j0dGC$_9)(MessageStream, Transform);
    function MessageStream() {
        (0, $j0dGC$_2)(this, MessageStream);
        return (0, $j0dGC$_8)(this, MessageStream, [
            {
                objectMode: true
            }
        ]);
    }
    (0, $j0dGC$_3)(MessageStream, [
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
}((0, $j0dGC$Transform));










function $72d690c724d8b3e8$export$369fb36245591db0(sourcePath, binBaseName) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var NODE_PATH, binName, resolvedPath, packagePath, version;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    NODE_PATH = process.env.NODE_PATH;
                    binName = "".concat(binBaseName, ".js");
                    return [
                        4,
                        $72d690c724d8b3e8$var$resolveModule("typescript/lib/".concat(binName), {
                            basedir: $j0dGC$path.dirname(sourcePath),
                            paths: NODE_PATH !== undefined ? NODE_PATH.split($j0dGC$path.delimiter) : undefined
                        })["catch"](function() {
                            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                                var auxTsdkPath, binPath, exists, tsdkPath, binPath1, exists1, defaultPath;
                                return (0, $j0dGC$_1)(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                $72d690c724d8b3e8$var$getSDKPath($j0dGC$path.dirname(sourcePath))
                                            ];
                                        case 1:
                                            auxTsdkPath = _state.sent();
                                            if (!(auxTsdkPath !== undefined)) return [
                                                3,
                                                3
                                            ];
                                            binPath = $j0dGC$path.join(auxTsdkPath, "lib", binName);
                                            return [
                                                4,
                                                $72d690c724d8b3e8$var$fsExists(binPath)
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
                                            binPath1 = $j0dGC$path.join(tsdkPath, "lib", binName);
                                            return [
                                                4,
                                                $72d690c724d8b3e8$var$fsExists(binPath1)
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
                                            defaultPath = undefined("typescript/lib/".concat(binName));
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
                    packagePath = $j0dGC$path.resolve(resolvedPath, "../../package.json");
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
function $72d690c724d8b3e8$var$resolveModule(id, opts) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        return (0, $j0dGC$_1)(this, function(_state) {
            return [
                2,
                new Promise(function(resolve, reject) {
                    return (0, $j0dGC$resolve)(id, opts, function(err, result) {
                        if (err) reject(err);
                        else if (result === undefined) reject(new Error("Module path is undefined"));
                        else resolve(result);
                    });
                })
            ];
        });
    })();
}
function $72d690c724d8b3e8$var$fsExists(p) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        return (0, $j0dGC$_1)(this, function(_state) {
            return [
                2,
                new Promise(function(resolve) {
                    return $j0dGC$access(p, $j0dGC$constants.F_OK, function(err) {
                        if (err) resolve(false);
                        else resolve(true);
                    });
                })
            ];
        });
    })();
}
function $72d690c724d8b3e8$var$fsReadFile(p) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        return (0, $j0dGC$_1)(this, function(_state) {
            return [
                2,
                new Promise(function(resolve, reject) {
                    return $j0dGC$readFile(p, function(error, data) {
                        if (error) reject(error);
                        else resolve(data.toString("utf-8"));
                    });
                })
            ];
        });
    })();
}
function $72d690c724d8b3e8$var$tryConfigFiles(basedir, relpaths) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, relpath, _path, configFile, err;
        return (0, $j0dGC$_1)(this, function(_state) {
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
                    configFile = (_path = $j0dGC$path).join.apply(_path, [
                        basedir
                    ].concat((0, $j0dGC$_6)(relpath)));
                    return [
                        4,
                        $72d690c724d8b3e8$var$fsExists(configFile)
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
function $72d690c724d8b3e8$var$resolveConfigFile(initialBaseDir) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var basedir, parent, configFile;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    basedir = initialBaseDir;
                    parent = $j0dGC$path.dirname(basedir);
                    _state.label = 1;
                case 1:
                    if (!(basedir !== parent)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        $72d690c724d8b3e8$var$tryConfigFiles(basedir, [
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
                    parent = $j0dGC$path.dirname(basedir);
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
function $72d690c724d8b3e8$var$isConfigObject(x) {
    return (typeof x === "undefined" ? "undefined" : (0, $j0dGC$_10)(x)) === "object" && x !== null && typeof x.tsdkPath === "string";
}
function $72d690c724d8b3e8$var$isVSCodeConfigObject(x) {
    return (typeof x === "undefined" ? "undefined" : (0, $j0dGC$_10)(x)) === "object" && x !== null && typeof x["typescript.tsdk"] === "string";
}
function $72d690c724d8b3e8$var$getSDKPath(dirname) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var configFile, configFileContents, _, tsdkPath, e;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        $72d690c724d8b3e8$var$resolveConfigFile(dirname)
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
                    _ = $j0dGC$jsoncparser.parse;
                    return [
                        4,
                        $72d690c724d8b3e8$var$fsReadFile(configFile.configFile)
                    ];
                case 3:
                    configFileContents = _.apply($j0dGC$jsoncparser, [
                        _state.sent()
                    ]);
                    if ($72d690c724d8b3e8$var$isConfigObject(configFileContents)) tsdkPath = configFileContents.tsdkPath;
                    else if ($72d690c724d8b3e8$var$isVSCodeConfigObject(configFileContents)) // NOTE: VSCode asks for path to "typescript/lib", while
                    // we only want path to "typescript". Hence the dirname here
                    tsdkPath = $j0dGC$path.dirname(configFileContents["typescript.tsdk"]);
                    else return [
                        2,
                        undefined
                    ];
                    return [
                        2,
                        $j0dGC$path.isAbsolute(tsdkPath) ? tsdkPath : $j0dGC$path.join(configFile.basedir, tsdkPath)
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


var $d86d165b76686502$export$dceb19333e080e82 = /*#__PURE__*/ function() {
    "use strict";
    function ClientResolver(reportBusyWhile) {
        var _this = this;
        (0, $j0dGC$_2)(this, ClientResolver);
        this.reportBusyWhile = reportBusyWhile;
        this.clients = new Map();
        this.memoizedClients = new Map();
        this.emitter = new (0, $j0dGC$Emitter)();
        this.subscriptions = new (0, $j0dGC$CompositeDisposable)();
        this.tsserverInstancePerTsconfig = atom.config.get("atom-typescript-updated").tsserverInstancePerTsconfig;
        // This is just here so TypeScript can infer the types of the callbacks when using "on" method
        this.on = this.emitter.on.bind(this.emitter);
        this.diagnosticHandler = function(serverPath, type) {
            return function(result) {
                var filePath = $d86d165b76686502$var$isConfDiagBody(result) ? result.configFile : result.file;
                if (filePath) _this.emitter.emit("diagnostics", {
                    type: type,
                    serverPath: serverPath,
                    filePath: filePath,
                    diagnostics: result.diagnostics
                });
            };
        };
    }
    (0, $j0dGC$_3)(ClientResolver, [
        {
            key: "restartAllServers",
            value: function restartAllServers() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var _this;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var memo, client, e;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                                (0, $e61b31fac60530e8$export$8080b7556d9d6445)(client.destroy());
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var _ref, pathToBin, version, tsconfigPath, tsconfigMap, client, newClient;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (0, $72d690c724d8b3e8$export$369fb36245591db0)(pFilePath, "tsserver")
                                ];
                            case 1:
                                _ref = _state.sent(), pathToBin = _ref.pathToBin, version = _ref.version;
                                tsconfigPath = this.tsserverInstancePerTsconfig ? (0, $j0dGC$typescript).findConfigFile(pFilePath, function(f) {
                                    return (0, $j0dGC$typescript).sys.fileExists(f);
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
                                newClient = new (0, $33e0bcf1de16974e$export$21f68d6aa461e875)(pathToBin, version, this.reportBusyWhile);
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
                return (0, $j0dGC$_1)(this, function(_state) {
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
                                (0, $j0dGC$_7)(tsconfigMap.values())
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
function $d86d165b76686502$var$isConfDiagBody(body) {
    return body && body.triggerFile && body.configFile;
}










function $206be3042dd17018$export$d21c11139c8fe8ee(codefixProvider) {
    return {
        grammarScopes: (0, $47ae2d5cb2e495d2$export$d9994fe0923974a5)(),
        priority: 0,
        getCodeActions: function(textEditor, range) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
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
                                            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                                                return (0, $j0dGC$_1)(this, function(_state) {
                                                    return [
                                                        2,
                                                        "description" in fix ? fix.description : fix.actionDescription
                                                    ];
                                                });
                                            })();
                                        },
                                        dispose: function() {},
                                        apply: function() {
                                            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                                                return (0, $j0dGC$_1)(this, function(_state) {
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








function $acdd57131752f306$export$6413bc8b6e281ffa(getClient) {
    return {
        grammarScopes: (0, $47ae2d5cb2e495d2$export$d9994fe0923974a5)(),
        priority: 100,
        highlight: function(editor, position) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var location, client, result;
                return (0, $j0dGC$_1)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!(0, $47ae2d5cb2e495d2$export$3aecee58e23ede2c)(editor)) return [
                                2
                            ];
                            location = (0, $47ae2d5cb2e495d2$export$f25e34a2b31a939c)(editor, position);
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
                                client.execute("documentHighlights", (0, $j0dGC$_11)((0, $j0dGC$_4)({}, location), {
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
                                Array.from($acdd57131752f306$var$getSpans(location.file, result.body))
                            ];
                    }
                });
            })();
        }
    };
}
function $acdd57131752f306$var$getSpans(file, data) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, fileInfo, err;
    return (0, $j0dGC$_1)(this, function(_state) {
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
                    (0, $j0dGC$_7)(fileInfo.highlightSpans.map((0, $ee2d752c6bad64f9$export$477d491a08b070ec)))
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












function $4278b589e5f5160c$export$2c9a28f937ef04fb(data, etch, codeRenderer) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var kind, tags, docs, codeText;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (data === undefined) return [
                        2,
                        null
                    ];
                    kind = etch.dom("div", {
                        className: "atom-typescript-datatip-tooltip-kind"
                    }, data.kind, $4278b589e5f5160c$var$formatKindModifiers(data.kindModifiers));
                    tags = data.tags ? data.tags.map(function(tag, idx) {
                        var tagClass = "atom-typescript-datatip-tooltip-doc-tag " + "atom-typescript-datatip-tooltip-doc-tag-name-".concat(tag.name);
                        return etch.dom("div", {
                            className: tagClass,
                            key: idx
                        }, etch.dom("span", {
                            className: "atom-typescript-datatip-tooltip-doc-tag-name"
                        }, tag.name), $4278b589e5f5160c$var$formatTagText(etch, tag.text));
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
function $4278b589e5f5160c$var$formatKindModifiers(etch, text) {
    if (text === undefined) return null;
    return etch.dom("span", {
        className: "atom-typescript-datatip-tooltip-kind-modifiers"
    }, text);
}
function $4278b589e5f5160c$var$formatTagText(etch, tagText) {
    if (tagText === undefined) return null;
    var _exec = (0, $j0dGC$_5)(/^\s*(\S*)([^]*)$/.exec(tagText), 3), firstWord = _exec[1], restOfText = _exec[2];
    return etch.dom("span", {
        className: "atom-typescript-datatip-tooltip-doc-tag-text"
    }, etch.dom("span", {
        className: "atom-typescript-datatip-tooltip-doc-tag-text-first-word"
    }, firstWord), restOfText);
}



// Note: a horrible hack to avoid dependency on React
var $a62b15b9bf6501f7$var$REACT_ELEMENT_SYMBOL = Symbol["for"]("react.element");
var $a62b15b9bf6501f7$var$etch = {
    dom: function(type, props) {
        for(var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            children[_key - 2] = arguments[_key];
        }
        if (children.length > 0) return {
            $$typeof: $a62b15b9bf6501f7$var$REACT_ELEMENT_SYMBOL,
            type: type,
            ref: null,
            props: (0, $j0dGC$_11)((0, $j0dGC$_4)({}, props), {
                children: children
            })
        };
        else return {
            $$typeof: $a62b15b9bf6501f7$var$REACT_ELEMENT_SYMBOL,
            type: type,
            ref: null,
            props: (0, $j0dGC$_4)({}, props)
        };
    }
};
var $a62b15b9bf6501f7$export$62181cd26290fa50 = /*#__PURE__*/ function() {
    "use strict";
    function TSDatatipProvider(getClient) {
        (0, $j0dGC$_2)(this, TSDatatipProvider);
        this.getClient = getClient;
        this.providerName = "TypeScript type tooltips";
        this.priority = 100;
        this.grammarScopes = (0, $47ae2d5cb2e495d2$export$d9994fe0923974a5)();
    }
    (0, $j0dGC$_3)(TSDatatipProvider, [
        {
            key: "datatip",
            value: function datatip(editor, bufferPt) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var filePath, client, result, data, tooltip, _;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                                    (0, $4278b589e5f5160c$export$2c9a28f937ef04fb)(data, $a62b15b9bf6501f7$var$etch, $a62b15b9bf6501f7$var$highlightCode)
                                ];
                            case 3:
                                tooltip = _state.sent();
                                return [
                                    2,
                                    {
                                        component: function() {
                                            return $a62b15b9bf6501f7$var$etch.dom("div", {
                                                className: "atom-typescript-datatip-tooltip"
                                            }, tooltip);
                                        },
                                        range: $j0dGC$Range.fromObject([
                                            (0, $ee2d752c6bad64f9$export$2b9d56ac2fba440c)(data.start),
                                            (0, $ee2d752c6bad64f9$export$2b9d56ac2fba440c)(data.end)
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
function $a62b15b9bf6501f7$var$highlightCode(code) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var fontFamily, html;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    fontFamily = atom.config.get("editor.fontFamily");
                    return [
                        4,
                        (0, $e452e33174581f1c$export$e4043f67d36cbb26)(code.replace(/\r?\n$/, ""), "source.ts")
                    ];
                case 1:
                    html = _state.sent();
                    return [
                        2,
                        $a62b15b9bf6501f7$var$etch.dom("div", {
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





function $bc2cbd8768a1aa8b$export$a9ca9b3a8941e92e(getClient) {
    return {
        name: "atom-typescript",
        priority: 0,
        grammarScopes: (0, $47ae2d5cb2e495d2$export$d9994fe0923974a5)(),
        wordRegExp: /([A-Za-z0-9_])+|['"`](\\.|[^'"`\\\\])*['"`]/g,
        getDefinition: function(editor, position) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var location, client, result;
                return (0, $j0dGC$_1)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!(0, $47ae2d5cb2e495d2$export$3aecee58e23ede2c)(editor)) return [
                                2
                            ];
                            location = (0, $47ae2d5cb2e495d2$export$f25e34a2b31a939c)(editor, position);
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
                                    definitions: result.body.map($bc2cbd8768a1aa8b$var$fileSpanToDefinition)
                                }
                            ];
                    }
                });
            })();
        }
    };
}
function $bc2cbd8768a1aa8b$var$fileSpanToDefinition(span) {
    var range = (0, $ee2d752c6bad64f9$export$477d491a08b070ec)(span);
    return {
        path: span.file,
        position: range.start,
        range: range,
        language: "TypeScript"
    };
}





function $7ab631458cefe15a$export$b797847259776697(getClient) {
    return {
        isEditorSupported: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
                    return [
                        2,
                        (0, $47ae2d5cb2e495d2$export$3aecee58e23ede2c)(editor)
                    ];
                });
            })();
        },
        findReferences: function(editor, position) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var location, client, result;
                return (0, $j0dGC$_1)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            location = (0, $47ae2d5cb2e495d2$export$f25e34a2b31a939c)(editor, position);
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
                                    references: result.body.refs.map($7ab631458cefe15a$var$refTsToIde)
                                }
                            ];
                    }
                });
            })();
        }
    };
}
function $7ab631458cefe15a$var$refTsToIde(ref) {
    return {
        uri: ref.file,
        range: (0, $ee2d752c6bad64f9$export$19d00dfc4e734f8b)(ref.start, ref.end),
        name: undefined
    };
}
















var $449f68c4d2ba210e$export$275be3d1a3f62fb = /*#__PURE__*/ function() {
    "use strict";
    function TsView(props) {
        (0, $j0dGC$_2)(this, TsView);
        this.props = props;
        $j0dGC$initialize(this);
    }
    (0, $j0dGC$_3)(TsView, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        this.props = (0, $j0dGC$_4)({}, this.props, props);
                        return [
                            2,
                            $j0dGC$update(this)
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
                return $j0dGC$dom("div", {
                    className: "editor editor-colors",
                    style: style,
                    innerHTML: this.props.highlightedText
                });
            }
        }
    ]);
    return TsView;
}();










var $a3783a40399b9047$export$31d5f5740e2c2887 = /*#__PURE__*/ function() {
    "use strict";
    function HighlightComponent(props) {
        (0, $j0dGC$_2)(this, HighlightComponent);
        this.props = props;
        this.matches = this.match(this.props);
        $j0dGC$initialize(this);
    }
    (0, $j0dGC$_3)(HighlightComponent, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.props = (0, $j0dGC$_4)({}, this.props, props);
                                this.matches = this.match(this.props);
                                return [
                                    4,
                                    $j0dGC$update(this)
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $j0dGC$destroy(this)
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
                return $j0dGC$dom("span", null, this.matches.map(function(m, i) {
                    return $j0dGC$dom("span", {
                        className: m.type,
                        key: i
                    }, m.text);
                }));
            }
        },
        {
            key: "match",
            value: function match(props) {
                if (props.query) return $a3783a40399b9047$export$d775a8cf3adcd3a0(props.label, props.query);
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
function $a3783a40399b9047$export$d775a8cf3adcd3a0(name, query) {
    var lastIndex = 0;
    var matchedChars = []; // Build up a set of matched chars to be more semantic
    var queryMatches = [];
    var matches = (0, $j0dGC$match)(name, query);
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







function $0be5325d1bf82077$export$12cb8c60c107136e(_0) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function(param) {
        var items, itemTemplate, itemFilterKey, didChangeSelection, panel, currentFocus;
        return (0, $j0dGC$_1)(this, function(_state) {
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
                                (0, $e61b31fac60530e8$export$8080b7556d9d6445)(select.update(props));
                            };
                            if (typeof items === "function") {
                                didChangeQuery = function(query) {
                                    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                                        var timeout, is;
                                        return (0, $j0dGC$_1)(this, function(_state) {
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
                            var select = new (0, $j0dGC$atomselectlist)({
                                items: [],
                                elementForItem: function(item) {
                                    return $j0dGC$render(itemTemplate(item, select));
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
                            if (typeof items !== "function") (0, $e61b31fac60530e8$export$8080b7556d9d6445)(Promise.resolve(items).then(function(is) {
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
var $011f9689c199e25f$var$commands = [];
function $011f9689c199e25f$export$35e8f4a3c2d7c0da(selector, command, desc) {
    $011f9689c199e25f$var$commands.push({
        selector: selector,
        command: command,
        desc: desc
    });
}
function $011f9689c199e25f$export$7a6092e2ae7e1845() {
    return $011f9689c199e25f$var$commands;
}


(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:find-references", function(deps) {
    return {
        description: "Find where symbol under text cursor is referenced",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var location, client, result;
                return (0, $j0dGC$_1)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            location = (0, $47ae2d5cb2e495d2$export$f25e34a2b31a939c)(editor);
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
                                $296b83751e460336$export$2904681fe8c977be(result, editor, deps.histGoForward)
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
function $296b83751e460336$export$2904681fe8c977be(result, editor, histGoForward) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var refs, res;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    refs = Promise.all(result.body.refs.map(function(ref) {
                        return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                            var _ref_contextStart, fileContents, context, fileHlText, _ref_contextStart_line, lineText;
                            return (0, $j0dGC$_1)(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            new Promise(function(resolve, reject) {
                                                return $j0dGC$readFile(ref.file, function(error, data) {
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
                                            (0, $e452e33174581f1c$export$e4043f67d36cbb26)(context.join("\n"), "source.tsx")
                                        ];
                                    case 2:
                                        fileHlText = _state.sent().split("\n");
                                        lineText = fileHlText[ref.start.line - ((_ref_contextStart_line = (_ref_contextStart = ref.contextStart) === null || _ref_contextStart === void 0 ? void 0 : _ref_contextStart.line) !== null && _ref_contextStart_line !== void 0 ? _ref_contextStart_line : 1)];
                                        return [
                                            2,
                                            (0, $j0dGC$_11)((0, $j0dGC$_4)({}, ref), {
                                                hlText: lineText
                                            })
                                        ];
                                }
                            });
                        })();
                    }));
                    return [
                        4,
                        (0, $0be5325d1bf82077$export$12cb8c60c107136e)({
                            items: refs,
                            itemTemplate: function(item, ctx) {
                                return $j0dGC$dom("li", null, $j0dGC$dom((0, $a3783a40399b9047$export$31d5f5740e2c2887), {
                                    label: atom.project.relativize(item.file),
                                    query: ctx.getFilterQuery()
                                }), $j0dGC$dom("div", {
                                    className: "pull-right"
                                }, "line: ", item.start.line), $j0dGC$dom((0, $449f68c4d2ba210e$export$275be3d1a3f62fb), {
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









(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:go-to-declaration", function(deps) {
    return {
        description: "Go to declaration of symbol under text cursor",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var location, client, result;
                return (0, $j0dGC$_1)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            location = (0, $47ae2d5cb2e495d2$export$f25e34a2b31a939c)(editor);
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
                                $bcfd5758b4b0a968$export$680a91dbc2dcff04(result, editor, deps.histGoForward)
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
function $bcfd5758b4b0a968$export$680a91dbc2dcff04(result, editor, histGoForward) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var res;
        return (0, $j0dGC$_1)(this, function(_state) {
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
                        (0, $0be5325d1bf82077$export$12cb8c60c107136e)({
                            items: result.body,
                            itemTemplate: function(item, ctx) {
                                return $j0dGC$dom("li", null, $j0dGC$dom((0, $a3783a40399b9047$export$31d5f5740e2c2887), {
                                    label: item.file,
                                    query: ctx.getFilterQuery()
                                }), $j0dGC$dom("div", {
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



function $006be3b9d96979d1$export$51c07c30fb16d966(getClient, histGoForward) {
    return {
        priority: 0,
        providerName: "typescript-hyperclick-provider",
        wordRegExp: /([A-Za-z0-9_])+|['"`](\\.|[^'"`\\\\])*['"`]/g,
        getSuggestionForWord: function(editor, _text, range) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var filePath;
                return (0, $j0dGC$_1)(this, function(_state) {
                    if (!(0, $47ae2d5cb2e495d2$export$3aecee58e23ede2c)(editor)) return [
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
                                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                                    var _result_body, location, client, result, resLoc, references;
                                    return (0, $j0dGC$_1)(this, function(_state) {
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
                                                if (!(((_result_body = result.body) === null || _result_body === void 0 ? void 0 : _result_body.length) === 1 && (resLoc === null || resLoc === void 0 ? void 0 : resLoc.start.line) === location.line && (resLoc === null || resLoc === void 0 ? void 0 : resLoc.start.offset) === location.offset)) return [
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
                                                    (0, $296b83751e460336$export$2904681fe8c977be)(references, editor, histGoForward)
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
                                                    (0, $bcfd5758b4b0a968$export$680a91dbc2dcff04)(result, editor, histGoForward)
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





function $1d67a428a312fc1b$export$2b92277a69331cbb(getClient) {
    return {
        name: "Atom-TypeScript",
        grammarScopes: (0, $47ae2d5cb2e495d2$export$d9994fe0923974a5)(),
        priority: 100,
        updateOnEdit: true,
        getOutline: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var filePath, client, navTreeResult, navTree;
                return (0, $j0dGC$_1)(this, function(_state) {
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
                                        $1d67a428a312fc1b$var$navTreeToOutline(navTree)
                                    ]
                                }
                            ];
                    }
                });
            })();
        }
    };
}
function $1d67a428a312fc1b$var$navTreeToOutline(navTree) {
    var ranges = navTree.spans.map((0, $ee2d752c6bad64f9$export$477d491a08b070ec));
    var range = ranges.reduce(function(prev, cur) {
        return cur.union(prev);
    });
    return {
        kind: $1d67a428a312fc1b$var$kindMap[navTree.kind],
        plainText: navTree.text,
        startPosition: range.start,
        endPosition: range.end,
        landingPosition: navTree.nameSpan ? (0, $ee2d752c6bad64f9$export$477d491a08b070ec)(navTree.nameSpan).start : undefined,
        children: navTree.childItems ? navTree.childItems.map($1d67a428a312fc1b$var$navTreeToOutline).sort($1d67a428a312fc1b$var$compareNodes) : []
    };
}
function $1d67a428a312fc1b$var$compareNodes(a, b) {
    var apos = a.landingPosition ? a.landingPosition : a.startPosition;
    var bpos = b.landingPosition ? b.landingPosition : b.startPosition;
    return apos.compare(bpos);
}
var $1d67a428a312fc1b$var$kindMap = {
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








var $813c06c89c431621$export$11ab8206b5e263e8 = /*#__PURE__*/ function() {
    "use strict";
    function TSSigHelpProvider(getClient) {
        var _this = this;
        (0, $j0dGC$_2)(this, TSSigHelpProvider);
        this.getClient = getClient;
        this.triggerCharacters = new Set([]);
        this.grammarScopes = (0, $47ae2d5cb2e495d2$export$d9994fe0923974a5)();
        this.priority = 100;
        this.disposables = new (0, $j0dGC$CompositeDisposable)();
        var triggerCharsDefault = new Set([
            "<",
            "(",
            ","
        ]);
        var triggerCharsDisabled = new Set([]);
        this.disposables.add(atom.config.observe("atom-typescript-updated.sigHelpDisplayOnChange", function(newVal) {
            _this.triggerCharacters = newVal ? triggerCharsDefault : triggerCharsDisabled;
        }));
    }
    (0, $j0dGC$_3)(TSSigHelpProvider, [
        {
            key: "dispose",
            value: function dispose() {
                this.disposables.dispose();
            }
        },
        {
            key: "getSignatureHelp",
            value: function getSignatureHelp(editor, pos) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var filePath, client, result, data, signatures, _;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                                signatures = data.items.map((0, $ee2d752c6bad64f9$export$9db02c2ec8f703d4));
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











function $843cfb4790d58d36$export$d94405aa3cc9bfda(codeAction) {
    return $j0dGC$dom("li", null, codeAction.description);
}




var $82009c0d32a0c9d0$export$536c67bf76d43cfb = /*#__PURE__*/ function() {
    "use strict";
    function AutocompleteProvider(getClient, applyEdits) {
        (0, $j0dGC$_2)(this, AutocompleteProvider);
        this.getClient = getClient;
        this.applyEdits = applyEdits;
        this.selector = (0, $47ae2d5cb2e495d2$export$d9994fe0923974a5)().map(function(x) {
            return x.includes(".") ? ".".concat(x) : x;
        }).join(", ");
        this.inclusionPriority = atom.config.get("atom-typescript-updated").autocompletionInclusionPriority;
        this.suggestionPriority = atom.config.get("atom-typescript-updated").autocompletionSuggestionPriority;
        this.excludeLowerPriority = atom.config.get("atom-typescript-updated").autocompletionExcludeLowerPriority;
    }
    (0, $j0dGC$_3)(AutocompleteProvider, [
        {
            key: "getSuggestions",
            value: function getSuggestions(opts) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var _this, location, prefix, triggerCharacter, suggestions, config, ignoreCase, longestFirst, score, filter, _;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                location = $82009c0d32a0c9d0$var$getLocationQuery(opts);
                                prefix = $82009c0d32a0c9d0$var$getPrefix(opts);
                                if (!location) return [
                                    2,
                                    []
                                ];
                                // Don't auto-show autocomplete if prefix is empty unless last character is '.'
                                triggerCharacter = $82009c0d32a0c9d0$var$getTrigger($82009c0d32a0c9d0$var$getLastNonWhitespaceChar(opts.editor.getBuffer(), opts.bufferPosition));
                                if (!prefix && !opts.activatedManually && !triggerCharacter) return [
                                    2,
                                    []
                                ];
                                // Don't show autocomplete if we're in a string.template and not in a template expression
                                if ($82009c0d32a0c9d0$var$containsScope(opts.scopeDescriptor.getScopesArray(), "string.template.") && !$82009c0d32a0c9d0$var$containsScope(opts.scopeDescriptor.getScopesArray(), "template.expression.")) return [
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
                                if (config.autocompletionUseFuzzyFilter) suggestions = $j0dGC$filter(suggestions, prefix, {
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
                                        var _val_displayText;
                                        return (_val_displayText = val.displayText) === null || _val_displayText === void 0 ? void 0 : _val_displayText.toLowerCase().includes(prefix.toLowerCase());
                                    } : function(val) {
                                        var _val_displayText;
                                        return (_val_displayText = val.displayText) === null || _val_displayText === void 0 ? void 0 : _val_displayText.includes(prefix);
                                    };
                                    suggestions = suggestions.filter(filter).sort(function(a, b) {
                                        return score(a.displayText) - score(b.displayText);
                                    });
                                }
                                return [
                                    2,
                                    suggestions.map(function(suggestion) {
                                        return (0, $j0dGC$_4)({
                                            replacementPrefix: suggestion.replacementRange ? opts.editor.getTextInBufferRange(suggestion.replacementRange) : prefix,
                                            location: location
                                        }, _this.getDetailsFromCache(suggestion), $82009c0d32a0c9d0$var$addCallableParens(opts, suggestion));
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                (0, $e61b31fac60530e8$export$8080b7556d9d6445)(function() {
                    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                        var action;
                        return (0, $j0dGC$_1)(this, function(_state) {
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
                                        (0, $0be5325d1bf82077$export$12cb8c60c107136e)({
                                            items: details.details.codeActions,
                                            itemTemplate: (0, $843cfb4790d58d36$export$d94405aa3cc9bfda),
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var _details_codeActions, reply, _reply_body, details, parts, rightLabel, actionDesc, description;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                                    this.lastSuggestions.client.execute("completionEntryDetails", (0, $j0dGC$_4)({
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
                                _reply_body = (0, $j0dGC$_5)(reply.body, 1), details = _reply_body[0];
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
                                actionDesc = suggestion.hasAction && ((_details_codeActions = details.codeActions) === null || _details_codeActions === void 0 ? void 0 : _details_codeActions.length) === 1 ? "".concat(details.codeActions[0].description, "\n\n") : "";
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
                                    (0, $j0dGC$_11)((0, $j0dGC$_4)({}, suggestion), {
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function(param) {
                    var prefix, location, triggerCharacter, activatedManually, lastLoc, lastCol, thisCol, client, suggestions;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                prefix = param.prefix, location = param.location, triggerCharacter = param.triggerCharacter, activatedManually = param.activatedManually;
                                if (this.lastSuggestions && !activatedManually) {
                                    lastLoc = this.lastSuggestions.location;
                                    lastCol = $82009c0d32a0c9d0$var$getNormalizedCol(this.lastSuggestions.prefix, lastLoc.offset);
                                    thisCol = $82009c0d32a0c9d0$var$getNormalizedCol(prefix, location.offset);
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
                                    $82009c0d32a0c9d0$var$getSuggestionsInternal({
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
function $82009c0d32a0c9d0$var$getSuggestionsInternal(_0) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function(param) {
        var client, location, triggerCharacter, _completions_body, completions, completions1;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    client = param.client, location = param.location, triggerCharacter = param.triggerCharacter;
                    if (!(parseInt(client.version.split(".")[0], 10) >= 3)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        client.execute("completionInfo", (0, $j0dGC$_4)({
                            includeExternalModuleExports: false,
                            includeInsertTextCompletions: true,
                            triggerCharacter: triggerCharacter
                        }, location))
                    ];
                case 1:
                    completions = _state.sent();
                    return [
                        2,
                        completions.body.entries.map($82009c0d32a0c9d0$var$completionEntryToSuggestion.bind(null, (_completions_body = completions.body) === null || _completions_body === void 0 ? void 0 : _completions_body.isMemberCompletion))
                    ];
                case 2:
                    return [
                        4,
                        client.execute("completions", (0, $j0dGC$_4)({
                            includeExternalModuleExports: false,
                            includeInsertTextCompletions: true
                        }, location))
                    ];
                case 3:
                    completions1 = _state.sent();
                    return [
                        2,
                        completions1.body.map($82009c0d32a0c9d0$var$completionEntryToSuggestion.bind(null, undefined))
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
var $82009c0d32a0c9d0$var$identifierMatch = RegExp("(?:(?![\\u{10000}-\\u{10FFFF}])[$_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}])(?:(?![\\u{10000}-\\u{10FFFF}])[$_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\u200C\\u200D\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])*$", "u");
// Decide what needs to be replaced in the editor buffer when inserting the completion
function $82009c0d32a0c9d0$var$getPrefix(opts) {
    // see https://github.com/TypeStrong/atom-typescript/issues/1528
    // for the motivating example.
    var line = opts.editor.getBuffer().getTextInRange([
        [
            opts.bufferPosition.row,
            0
        ],
        opts.bufferPosition
    ]);
    var idMatch = line.match($82009c0d32a0c9d0$var$identifierMatch);
    if (idMatch) return idMatch[0];
    else return "";
}
// When the user types each character in ".hello", we want to normalize the column such that it's
// the same for every invocation of the getSuggestions. In this case, it would be right after "."
function $82009c0d32a0c9d0$var$getNormalizedCol(prefix, col) {
    var length = prefix === "." ? 0 : prefix.length;
    return col - length;
}
function $82009c0d32a0c9d0$var$getLocationQuery(opts) {
    var path = opts.editor.getPath();
    if (path === undefined) return undefined;
    return {
        file: path,
        line: opts.bufferPosition.row + 1,
        offset: opts.bufferPosition.column + 1
    };
}
function $82009c0d32a0c9d0$var$getLastNonWhitespaceChar(buffer, pos) {
    var lastChar;
    var range = new $j0dGC$Range([
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
function $82009c0d32a0c9d0$var$containsScope(scopes, matchScope) {
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
function $82009c0d32a0c9d0$var$completionEntryToSuggestion(isMemberCompletion, entry) {
    return {
        displayText: entry.name,
        text: entry.insertText !== undefined ? entry.insertText : entry.name,
        leftLabel: entry.kind,
        replacementRange: entry.replacementSpan ? (0, $ee2d752c6bad64f9$export$477d491a08b070ec)(entry.replacementSpan) : undefined,
        type: $82009c0d32a0c9d0$var$kindMap[entry.kind],
        isMemberCompletion: isMemberCompletion,
        identifier: entry.source !== undefined ? {
            name: entry.name,
            source: entry.source
        } : entry.name,
        hasAction: entry.hasAction
    };
}
function $82009c0d32a0c9d0$var$parens(opts) {
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
function $82009c0d32a0c9d0$var$addCallableParens(opts, s) {
    if (atom.config.get("atom-typescript-updated.autocompleteParens") && [
        "function",
        "method"
    ].includes(s.leftLabel) && !$82009c0d32a0c9d0$var$parens(opts)) return (0, $j0dGC$_11)((0, $j0dGC$_4)({}, s), {
        snippet: "".concat(s.text, "($1)"),
        text: undefined
    });
    else return s;
}
var $82009c0d32a0c9d0$var$kindMap = {
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
var $82009c0d32a0c9d0$var$triggerCharactersMap = {
    ".": null,
    '"': null,
    "'": null,
    "`": null,
    "/": null,
    "@": null,
    "<": null,
    "#": null
};
var $82009c0d32a0c9d0$var$triggerCharacters = new Set(Object.keys($82009c0d32a0c9d0$var$triggerCharactersMap));
function $82009c0d32a0c9d0$var$getTrigger(prefix) {
    if (prefix === undefined) return undefined;
    if (!prefix) return undefined;
    var c = prefix.slice(-1);
    if ($82009c0d32a0c9d0$var$triggerCharacters.has(c)) return c;
    return undefined;
}

















(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:refactor-selection", function(deps) {
    return {
        description: "Get a list of applicable refactors to selected code",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var location, selection, client, fileRange, actions, selectedAction;
                return (0, $j0dGC$_1)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            location = (0, $47ae2d5cb2e495d2$export$f25e34a2b31a939c)(editor);
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
                                $ce87052f039e46c8$export$724868632c285078(client, fileRange)
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
                                (0, $0be5325d1bf82077$export$12cb8c60c107136e)({
                                    items: actions,
                                    itemTemplate: function(item, ctx) {
                                        return $j0dGC$dom("li", null, $j0dGC$dom((0, $a3783a40399b9047$export$31d5f5740e2c2887), {
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
                                $ce87052f039e46c8$export$5522d657b0b2f30(selectedAction, client, deps)
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
function $ce87052f039e46c8$export$724868632c285078(client, pointOrRange) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var responseApplicable, actions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator, _step, refactor, _iterator1, _step1, action;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        $ce87052f039e46c8$var$getApplicabeRefactors(client, pointOrRange)
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
function $ce87052f039e46c8$var$getApplicabeRefactors(client, pointOrRange) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var e;
        return (0, $j0dGC$_1)(this, function(_state) {
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
                        client.execute("getApplicableRefactors", (0, $j0dGC$_4)({
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
function $ce87052f039e46c8$export$5522d657b0b2f30(selectedAction, client, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var responseEdits, _responseEdits_body, edits, renameFilename, renameLocation, editor;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        client.execute("getEditsForRefactor", (0, $j0dGC$_11)((0, $j0dGC$_4)({}, selectedAction.refactorRange), {
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



var $8bcf7726b44fc4f6$export$9262ee226e3cab9d = /*#__PURE__*/ function() {
    "use strict";
    function CodefixProvider(clientResolver, errorPusher, applyEdits) {
        (0, $j0dGC$_2)(this, CodefixProvider);
        this.clientResolver = clientResolver;
        this.errorPusher = errorPusher;
        this.applyEdits = applyEdits;
        this.supportedFixes = new WeakMap();
    }
    (0, $j0dGC$_3)(CodefixProvider, [
        {
            key: "getFixableRanges",
            value: function getFixableRanges(textEditor, range) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var filePath, errors, client, supportedCodes, ranges;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                                    return (0, $ee2d752c6bad64f9$export$477d491a08b070ec)(error);
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var _results, filePath, client, supportedCodes, requests, fixes, results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, result, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, fix, refactors;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                                    (0, $ce87052f039e46c8$export$724868632c285078)(client, (0, $j0dGC$_4)({
                                        file: filePath
                                    }, (0, $ee2d752c6bad64f9$export$9978d8c48293dc72)(bufferPosition)))
                                ];
                            case 4:
                                refactors = _state.sent();
                                (_results = results).push.apply(_results, (0, $j0dGC$_6)(refactors));
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var client;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                                    (0, $ce87052f039e46c8$export$5522d657b0b2f30)(fix, client, {
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var codes, result;
                    return (0, $j0dGC$_1)(this, function(_state) {
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







function $f335a673678f02eb$export$c0ac1f0dd4073b70(codefixProvider) {
    return {
        grammarScopes: [
            "*"
        ],
        getIntentions: function(_0) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function(param) {
                var bufferPosition, textEditor;
                return (0, $j0dGC$_1)(this, function(_state) {
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
                                            (0, $e61b31fac60530e8$export$8080b7556d9d6445)(codefixProvider.applyFix(fix));
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
function $f335a673678f02eb$export$bbfa3896d0c562e(codefixProvider) {
    return {
        grammarScopes: [
            "*"
        ],
        getIntentions: function(_0) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function(param) {
                var visibleRange, textEditor;
                return (0, $j0dGC$_1)(this, function(_state) {
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













(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:build", function(deps) {
    return {
        description: "Compile all files in project related to current active text editor",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var file, client, projectInfo, files, filesSoFar, promises, results, error, err;
                return (0, $j0dGC$_1)(this, function(_state) {
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
                            promises = (0, $j0dGC$_6)(files.values()).map(function(f) {
                                return $967513901adc4a39$var$_finally(client.execute("compileOnSaveEmitFile", {
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
function $967513901adc4a39$var$_finally(promise, callback) {
    promise.then(callback, callback);
    return promise;
}






(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:check-all-files", function(deps) {
    return {
        description: "Typecheck all files in project related to current active text editor",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var _projectInfo_body_fileNames, file, client, projectInfo, files, max, disp, cancelTimeout, disp1;
                return (0, $j0dGC$_1)(this, function(_state) {
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
                            files = new Set((_projectInfo_body_fileNames = projectInfo.body.fileNames) === null || _projectInfo_body_fileNames === void 0 ? void 0 : _projectInfo_body_fileNames.filter(function(fn) {
                                return(// filter out obvious potholes
                                !fn.endsWith("tsconfig.json") && !fn.includes("".concat($j0dGC$sep, "node_modules").concat($j0dGC$sep)));
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



(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-workspace", "typescript:clear-errors", function(deps) {
    return {
        description: "Clear error messages",
        didDispatch: function() {
            deps.clearErrors();
        }
    };
});










(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:format-code", function(deps) {
    return {
        description: "Format code in currently active text editor",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var filePath, ranges, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, selection, end, client, edits, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, range, _edits, result, err;
                return (0, $j0dGC$_1)(this, function(_state) {
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
                                    if (!selection.isEmpty()) ranges.push((0, $ee2d752c6bad64f9$export$430a7b9c6c8900f6)(selection));
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
                                client.execute("format", (0, $j0dGC$_11)((0, $j0dGC$_4)({}, range), {
                                    file: filePath
                                }))
                            ];
                        case 4:
                            result = _state.sent();
                            if (result.body) (_edits = edits).push.apply(_edits, (0, $j0dGC$_6)(result.body));
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
                                $e1945497aae899e1$var$formatCode(editor, edits);
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
function $e1945497aae899e1$var$formatCode(editor, edits) {
    // The code edits need to be applied in reverse order
    for(var i = edits.length - 1; i >= 0; i--)editor.setTextInBufferRange((0, $ee2d752c6bad64f9$export$477d491a08b070ec)(edits[i]), edits[i].newText);
}








(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:initialize-config", function() {
    return {
        description: "Create tsconfig.json in the project related to currently-active text edtior",
        didDispatch: function(editor, abort) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var projectDirs, currentPath, pathToTsc, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, projectDir, err;
                return (0, $j0dGC$_1)(this, function(_state) {
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
                                (0, $72d690c724d8b3e8$export$369fb36245591db0)(currentPath, "tsc")
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
                                $4e4eb5f1842c7489$var$initConfig(pathToTsc, projectDir.getPath())
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
function $4e4eb5f1842c7489$var$initConfig(tsc, projectRoot) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var disp;
        return (0, $j0dGC$_1)(this, function(_state) {
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
                                var bnp = new (0, $j0dGC$BufferedNodeProcess)({
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





(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:organize-imports", function(deps) {
    return {
        description: "Organize module imports",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var filePath, client, result;
                return (0, $j0dGC$_1)(this, function(_state) {
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






(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:reload-projects", function(deps) {
    return {
        description: "Reload projects",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var path, client;
                return (0, $j0dGC$_1)(this, function(_state) {
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


















var $5dab35c82ec412f5$export$1224b0b157f2244c = /*#__PURE__*/ function() {
    "use strict";
    function MiniEditor(props) {
        (0, $j0dGC$_2)(this, MiniEditor);
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
    (0, $j0dGC$_3)(MiniEditor, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        this.element = atom.views.getView(this.model);
                        this.props = (0, $j0dGC$_4)({}, this.props, props);
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


var $858897a262ea86ed$var$RenameView = /*#__PURE__*/ function() {
    "use strict";
    function RenameView(props) {
        (0, $j0dGC$_2)(this, RenameView);
        this.props = props;
        $j0dGC$initialize(this);
    }
    (0, $j0dGC$_3)(RenameView, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.props = (0, $j0dGC$_4)({}, this.props, props);
                                return [
                                    4,
                                    $j0dGC$update(this)
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
                return $j0dGC$dom("div", {
                    className: "atomts-rename-view",
                    ref: "main"
                }, $j0dGC$dom("div", {
                    className: "block"
                }, $j0dGC$dom("div", null, $j0dGC$dom("span", {
                    ref: "title"
                }, this.props.title), $j0dGC$dom("span", {
                    className: "subtle-info-message"
                }, $j0dGC$dom("span", null, "Close this panel with "), $j0dGC$dom("span", {
                    className: "highlight"
                }, "esc"), $j0dGC$dom("span", null, " key. And commit with the "), $j0dGC$dom("span", {
                    className: "highlight"
                }, "enter"), $j0dGC$dom("span", null, " key."))), $j0dGC$dom("div", {
                    className: "find-container block"
                }, $j0dGC$dom("div", {
                    className: "editor-container"
                }, $j0dGC$dom((0, $5dab35c82ec412f5$export$1224b0b157f2244c), {
                    ref: "editor",
                    initialText: this.props.initialText,
                    selectAll: this.props.selectAll
                }))), this.renderValidationMessage()));
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $j0dGC$destroy(this)
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
                if (this.props.validationMessage !== undefined) return $j0dGC$dom("div", {
                    className: "highlight-error"
                }, this.props.validationMessage);
                return null;
            }
        }
    ]);
    return RenameView;
}();
function $858897a262ea86ed$export$530eb201df098d49(options) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var item, panel, currentFocus, disposables;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    item = new $858897a262ea86ed$var$RenameView({
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
                    disposables = new (0, $j0dGC$CompositeDisposable)();
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
                                        (0, $e61b31fac60530e8$export$8080b7556d9d6445)(item.update({
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



(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:rename-file", function(deps) {
    return {
        description: "Rename current file",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var location, newLocation, client, response;
                return (0, $j0dGC$_1)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            location = editor.getPath();
                            if (!location) return [
                                2
                            ];
                            return [
                                4,
                                (0, $858897a262ea86ed$export$530eb201df098d49)({
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
                                    $j0dGC$move(location, newLocation, function(err) {
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









(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:rename-refactor", function(deps) {
    return {
        description: "Rename symbol under text cursor everywhere it is used",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var location, client, response, _response_body, info, locs, newName;
                return (0, $j0dGC$_1)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            location = (0, $47ae2d5cb2e495d2$export$f25e34a2b31a939c)(editor);
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
                                (0, $858897a262ea86ed$export$530eb201df098d49)({
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
                                            return (0, $j0dGC$_11)((0, $j0dGC$_4)({}, loc), {
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





(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-workspace", "typescript:restart-all-servers", function(deps) {
    return {
        description: "Kill all tsserver instances. They will be auto-restarted",
        didDispatch: function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
                    deps.killAllServers();
                    return [
                        2
                    ];
                });
            })();
        }
    };
});





(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-workspace", "typescript:return-from-declaration", function(deps) {
    return {
        description: "If used `go-to-declaration`, return to previous text cursor position",
        didDispatch: function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
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
(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-workspace", "typescript:show-editor-position-history", function(deps) {
    return {
        description: "If used `go-to-declaration`, return to previous text cursor position",
        didDispatch: function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
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



(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:toggle-semantic-view", function(deps) {
    return {
        description: "Toggle semantic view outline",
        didDispatch: function() {
            deps.toggleSemanticViewController();
        }
    };
});





(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:show-tooltip", function(deps) {
    return {
        description: "Show type tooltip at current text cursor position",
        didDispatch: function(ed) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
                    return [
                        2,
                        deps.showTooltipAt(ed)
                    ];
                });
            })();
        }
    };
});





(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:show-signature-help", function(deps) {
    return {
        description: "Show signature help tooltip at current text cursor position",
        didDispatch: function(ed) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
                    return [
                        2,
                        deps.showSigHelpAt(ed)
                    ];
                });
            })();
        }
    };
});
(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:hide-signature-help", function(deps) {
    return {
        description: "Hide the currently visible signature help",
        didDispatch: function(ed, ignore) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
                    if (!deps.hideSigHelpAt(ed)) ignore();
                    return [
                        2
                    ];
                });
            })();
        }
    };
});
(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:signature-help-next", function(deps) {
    return {
        description: "Show next signature help if available",
        didDispatch: function(ed, ignore) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
                    if (!deps.rotateSigHelp(ed, 1)) ignore();
                    return [
                        2
                    ];
                });
            })();
        }
    };
});
(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:signature-help-prev", function(deps) {
    return {
        description: "Show previous signature help if available",
        didDispatch: function(ed, ignore) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
                    if (!deps.rotateSigHelp(ed, -1)) ignore();
                    return [
                        2
                    ];
                });
            })();
        }
    };
});





(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:toggle-file-symbols", function(deps) {
    return {
        description: "Toggle view for finding file symbols",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
                    deps.toggleFileSymbolsView(editor);
                    return [
                        2
                    ];
                });
            })();
        }
    };
});
(0, $011f9689c199e25f$export$35e8f4a3c2d7c0da)("atom-text-editor", "typescript:toggle-project-symbols", function(deps) {
    return {
        description: "Toggle view for finding file symbols",
        didDispatch: function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
                    deps.toggleProjectSymbolsView(editor);
                    return [
                        2
                    ];
                });
            })();
        }
    };
});


function $c2b50f0312d4c499$export$f647bfc0a5fe4336(deps) {
    var disp = new (0, $j0dGC$CompositeDisposable)();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var cmd = _step.value;
            if (cmd.selector === "atom-text-editor") {
                var d = cmd.desc(deps);
                disp.add(atom.commands.add(cmd.selector, cmd.command, (0, $j0dGC$_11)((0, $j0dGC$_4)({}, d), {
                    didDispatch: function(e) {
                        return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                            var editor, error;
                            return (0, $j0dGC$_1)(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        _state.trys.push([
                                            0,
                                            4,
                                            ,
                                            5
                                        ]);
                                        editor = e.currentTarget.getModel();
                                        if (!(0, $47ae2d5cb2e495d2$export$3aecee58e23ede2c)(editor)) return [
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
                                        if ((0, $47ae2d5cb2e495d2$export$bde40b56025b92b9)(editor)) atom.notifications.addWarning("Atom-TypeScript cancelled last command: Current editor has no file path", {
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
                                        $c2b50f0312d4c499$var$handle(error);
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
                disp.add(atom.commands.add(cmd.selector, cmd.command, (0, $j0dGC$_11)((0, $j0dGC$_4)({}, d1), {
                    didDispatch: function() {
                        return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                            var error;
                            return (0, $j0dGC$_1)(this, function(_state) {
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
                                        $c2b50f0312d4c499$var$handle(error);
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
        for(var _iterator = (0, $011f9689c199e25f$export$7a6092e2ae7e1845)()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
function $c2b50f0312d4c499$var$handle(err) {
    if (err.message === "Server stopped normally") console.warn("TypeScript server exited normally while executing a command", err);
    else atom.notifications.addFatalError("Something went wrong, see details below.", {
        detail: err.message,
        dismissable: true,
        stack: err.stack
    });
}

























var $501de4a2a344f687$export$28c660c63b792dea = /*#__PURE__*/ function() {
    "use strict";
    function Tooltip(props, children) {
        (0, $j0dGC$_2)(this, Tooltip);
        this.children = children;
        this.props = (0, $j0dGC$_11)((0, $j0dGC$_4)({}, props), {
            delay: {
                show: 0,
                hide: 0
            }
        });
        $j0dGC$initialize(this);
        this.tooltipDisposable = atom.tooltips.add(this.element, this.props);
    }
    (0, $j0dGC$_3)(Tooltip, [
        {
            key: "update",
            value: function update(props, children) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.props = (0, $j0dGC$_4)({}, this.props, props);
                                this.children = children;
                                return [
                                    4,
                                    $j0dGC$update(this)
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
                return $j0dGC$dom("div", {
                    className: "inline-block"
                }, this.children ? this.children : null);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $j0dGC$destroy(this)
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


var $d3897f954f2a12f1$export$d2110dce2e582144 = /*#__PURE__*/ function() {
    "use strict";
    function BuildStatus(props) {
        var _this = this;
        (0, $j0dGC$_2)(this, BuildStatus);
        this.hiddenBuildStatus = false;
        this.disposables = new (0, $j0dGC$CompositeDisposable)();
        this.buildStatusClicked = function() {
            if (!_this.props.buildStatus.success) atom.notifications.addError("Build failed", {
                detail: _this.props.buildStatus.message,
                dismissable: true
            });
        };
        this.props = (0, $j0dGC$_4)({}, props);
        this.setHideBuildStatus(atom.config.get("atom-typescript-updated").buildStatusTimeout);
        this.resetBuildStatusTimeout();
        $j0dGC$initialize(this);
        this.disposables.add(atom.config.onDidChange("atom-typescript-updated.buildStatusTimeout", function(param) {
            var newValue = param.newValue;
            _this.setHideBuildStatus(newValue);
            (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.update({}));
        }));
    }
    (0, $j0dGC$_3)(BuildStatus, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var successStateChanged;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                successStateChanged = props.buildStatus !== undefined && props.buildStatus.success !== this.props.buildStatus.success;
                                this.props = (0, $j0dGC$_4)({}, this.props, props);
                                if (successStateChanged) this.resetBuildStatusTimeout();
                                return [
                                    4,
                                    $j0dGC$update(this)
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
                if (this.hiddenBuildStatus) return $j0dGC$dom("span", null);
                var cls;
                var text;
                if (this.props.buildStatus.success) {
                    cls = "highlight-success";
                    text = "Emit Success";
                } else {
                    cls = "highlight-error";
                    text = "Emit Failed";
                }
                return $j0dGC$dom((0, $501de4a2a344f687$export$28c660c63b792dea), {
                    title: this.props.buildStatus.success ? "Build was successful" : "Build failed; click to show error message"
                }, $j0dGC$dom("span", {
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $j0dGC$destroy(this)
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
                if (value > 0) this.hideBuildStatus = (0, $j0dGC$debounce)(function() {
                    _this.hiddenBuildStatus = true;
                    (0, $e61b31fac60530e8$export$8080b7556d9d6445)($j0dGC$update(_this));
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











var $775b5c826513b8a6$export$ebf7874ab6a8fe0f = /*#__PURE__*/ function() {
    "use strict";
    function ConfigPath(props) {
        (0, $j0dGC$_2)(this, ConfigPath);
        this.props = (0, $j0dGC$_4)({}, props);
        $j0dGC$initialize(this);
    }
    (0, $j0dGC$_3)(ConfigPath, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.props = (0, $j0dGC$_4)({}, this.props, props);
                                return [
                                    4,
                                    $j0dGC$update(this)
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
                return $j0dGC$dom((0, $501de4a2a344f687$export$28c660c63b792dea), {
                    title: function() {
                        return _this.props.tsConfigPath.startsWith("/dev/null") ? "No tsconfig.json" : "Click to open ".concat(atom.project.relativize(_this.props.tsConfigPath));
                    }
                }, $j0dGC$dom("a", {
                    className: "inline-block",
                    href: "",
                    on: {
                        click: function(evt) {
                            evt.preventDefault();
                            _this.openConfigPath();
                        }
                    }
                }, this.props.tsConfigPath.startsWith("/dev/null") ? "No project" : (0, $j0dGC$dirname)($775b5c826513b8a6$var$getFilePathRelativeToAtomProject(this.props.tsConfigPath))));
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $j0dGC$destroy(this)
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
                if (!this.props.tsConfigPath.startsWith("/dev/null")) (0, $e61b31fac60530e8$export$8080b7556d9d6445)(atom.workspace.open(this.props.tsConfigPath));
                else atom.notifications.addInfo("No tsconfig for current file");
            }
        }
    ]);
    return ConfigPath;
}();
/**
 * converts "c:\dev\somethin\bar.ts" to "~something\bar".
 */ function $775b5c826513b8a6$var$getFilePathRelativeToAtomProject(filePath) {
    return "~" + atom.project.relativize(filePath);
}



var $0cc2a0b6b51e3bbe$export$e46d185d0654294e = /*#__PURE__*/ function() {
    "use strict";
    function StatusPanel() {
        var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        (0, $j0dGC$_2)(this, StatusPanel);
        this.props = (0, $j0dGC$_4)({
            visible: true,
            pending: [],
            progress: {
                max: 0,
                value: 0
            }
        }, props);
        $j0dGC$initialize(this);
    }
    (0, $j0dGC$_3)(StatusPanel, [
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.props = (0, $j0dGC$_4)({}, this.props, props);
                                return [
                                    4,
                                    $j0dGC$update(this)
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
                return $j0dGC$dom("ts-status-panel", {
                    className: this.props.visible ? "" : "hide"
                }, this.renderVersion(), this.renderPending(), this.renderConfigPath(), this.renderStatus(), this.renderProgress());
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    $j0dGC$destroy(this)
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
                (0, $e61b31fac60530e8$export$8080b7556d9d6445)(this.destroy());
            }
        },
        {
            key: "show",
            value: function show() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                if (this.props.clientVersion !== undefined) return $j0dGC$dom((0, $501de4a2a344f687$export$28c660c63b792dea), {
                    title: "Active TypeScript version"
                }, this.props.clientVersion);
                return null;
            }
        },
        {
            key: "renderPending",
            value: function renderPending() {
                if (this.props.pending.length > 0) return $j0dGC$dom((0, $501de4a2a344f687$export$28c660c63b792dea), {
                    title: "Pending Requests: <ul>".concat(this.props.pending.map(function(param) {
                        var title = param.title;
                        return "<li>".concat(title, "</li>");
                    }).join(""), "</ul>"),
                    html: true
                }, $j0dGC$dom("span", {
                    ref: "pendingCounter"
                }, this.props.pending.length.toString()), $j0dGC$dom("span", {
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
                if (this.props.tsConfigPath !== undefined) return $j0dGC$dom((0, $775b5c826513b8a6$export$ebf7874ab6a8fe0f), {
                    tsConfigPath: this.props.tsConfigPath
                });
                return null;
            }
        },
        {
            key: "renderStatus",
            value: function renderStatus() {
                if (this.props.buildStatus) return $j0dGC$dom((0, $d3897f954f2a12f1$export$d2110dce2e582144), {
                    buildStatus: this.props.buildStatus
                });
                return null;
            }
        },
        {
            key: "renderProgress",
            value: function renderProgress() {
                if (this.props.progress.value < this.props.progress.max) return $j0dGC$dom("progress", {
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












var $995468ca3443543d$export$37b735b3f7a16aff = /*#__PURE__*/ function() {
    "use strict";
    function EditorPositionHistoryManager() {
        var prevCursorPositions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        (0, $j0dGC$_2)(this, EditorPositionHistoryManager);
        this.prevCursorPositions = prevCursorPositions;
    }
    (0, $j0dGC$_3)(EditorPositionHistoryManager, [
        {
            key: "goBack",
            value: function goBack() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var position;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var location, maxItems;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        location = (0, $47ae2d5cb2e495d2$export$f25e34a2b31a939c)(currentEditor);
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var res;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (0, $0be5325d1bf82077$export$12cb8c60c107136e)({
                                        items: this.getHistory().slice().reverse().map(function(item, idx) {
                                            return (0, $j0dGC$_11)((0, $j0dGC$_4)({}, item), {
                                                idx: idx
                                            });
                                        }),
                                        itemTemplate: function(item, ctx) {
                                            return $j0dGC$dom("li", {
                                                className: "two-lines"
                                            }, $j0dGC$dom("div", {
                                                className: "primary-line"
                                            }, $j0dGC$dom((0, $a3783a40399b9047$export$31d5f5740e2c2887), {
                                                label: item.file,
                                                query: ctx.getFilterQuery()
                                            })), $j0dGC$dom("div", {
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var editor;
                    return (0, $j0dGC$_1)(this, function(_state) {
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














var $e677de7395b03093$export$65a8f6d9bbe649f0 = /*#__PURE__*/ function() {
    "use strict";
    function OccurenceController(getClient, editor) {
        var _this = this;
        (0, $j0dGC$_2)(this, OccurenceController);
        this.getClient = getClient;
        this.editor = editor;
        this.disposables = new (0, $j0dGC$CompositeDisposable)();
        this.occurrenceMarkers = [];
        this.disposed = false;
        var debouncedUpdate;
        var didChangeTimeout;
        var changeDelay;
        var shouldHighlight = false;
        this.disposables.add(atom.config.observe("atom-typescript-updated.occurrenceHighlightDebounceTimeout", function(val) {
            debouncedUpdate = (0, $j0dGC$debounce)(function() {
                (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.update());
            }, val);
            changeDelay = val * 3.5;
        }), editor.onDidChangeCursorPosition(function() {
            if (didChangeTimeout === undefined) debouncedUpdate();
            else shouldHighlight = true;
        }), editor.onDidChangePath(function() {
            return debouncedUpdate();
        }), editor.onDidChangeGrammar(function() {
            return debouncedUpdate();
        }), editor.onDidChange(function() {
            if (didChangeTimeout !== undefined) clearTimeout(didChangeTimeout);
            didChangeTimeout = window.setTimeout(function() {
                if (shouldHighlight) {
                    debouncedUpdate();
                    shouldHighlight = false;
                }
                didChangeTimeout = undefined;
            }, changeDelay);
        }));
    }
    (0, $j0dGC$_3)(OccurenceController, [
        {
            key: "dispose",
            value: function dispose() {
                if (this.disposed) return;
                this.disposed = true;
                this.disposables.dispose();
                this.clearMarkers();
            }
        },
        {
            key: "clearMarkers",
            value: function clearMarkers() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.occurrenceMarkers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var marker = _step.value;
                        marker.destroy();
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
                this.occurrenceMarkers = [];
            }
        },
        {
            key: "update",
            value: function update() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var filePath, client, pos, result, newOccurrenceMarkers, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, m, e;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (this.disposed) return [
                                    2
                                ];
                                if (!(0, $47ae2d5cb2e495d2$export$3aecee58e23ede2c)(this.editor)) {
                                    this.clearMarkers();
                                    return [
                                        2
                                    ];
                                }
                                filePath = this.editor.getPath();
                                if (filePath === undefined) return [
                                    2
                                ];
                                return [
                                    4,
                                    this.getClient(filePath)
                                ];
                            case 1:
                                client = _state.sent();
                                if (this.disposed) return [
                                    2
                                ];
                                pos = this.editor.getLastCursor().getBufferPosition();
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    4,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    client.execute("documentHighlights", {
                                        file: filePath,
                                        line: pos.row + 1,
                                        offset: pos.column + 1,
                                        filesToSearch: [
                                            filePath
                                        ]
                                    })
                                ];
                            case 3:
                                result = _state.sent();
                                if (this.disposed) return [
                                    2
                                ];
                                newOccurrenceMarkers = Array.from(this.getNewOccurrenceMarkers(result.body));
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = this.occurrenceMarkers[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        m = _step.value;
                                        if (!newOccurrenceMarkers.includes(m)) m.destroy();
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
                                this.occurrenceMarkers = newOccurrenceMarkers;
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                e = _state.sent();
                                if (window.atom_typescript_debug) console.error(e);
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
                }).call(this);
            }
        },
        {
            key: "getNewOccurrenceMarkers",
            value: function getNewOccurrenceMarkers(data) {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, fileInfo, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _this, _loop, _iterator1, _step1, err, err;
                return (0, $j0dGC$_1)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                12,
                                13,
                                14
                            ]);
                            _iterator = data[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                11
                            ];
                            fileInfo = _step.value;
                            if (fileInfo.file !== this.editor.getPath()) return [
                                3,
                                10
                            ];
                            _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            _state.label = 3;
                        case 3:
                            _state.trys.push([
                                3,
                                8,
                                9,
                                10
                            ]);
                            _loop = function() {
                                var span, range, oldMarker, marker;
                                return (0, $j0dGC$_1)(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            span = _step1.value;
                                            range = (0, $ee2d752c6bad64f9$export$477d491a08b070ec)(span);
                                            oldMarker = _this.occurrenceMarkers.find(function(m) {
                                                return m.getBufferRange().isEqual(range);
                                            });
                                            if (!oldMarker) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                oldMarker
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                3,
                                                4
                                            ];
                                        case 2:
                                            marker = _this.editor.markBufferRange(range);
                                            _this.editor.decorateMarker(marker, {
                                                type: "highlight",
                                                "class": "atom-typescript-occurrence"
                                            });
                                            return [
                                                4,
                                                marker
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
                            };
                            _iterator1 = fileInfo.highlightSpans[Symbol.iterator]();
                            _state.label = 4;
                        case 4:
                            if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                                3,
                                7
                            ];
                            _this = this;
                            return [
                                5,
                                (0, $j0dGC$_7)(_loop())
                            ];
                        case 5:
                            _state.sent();
                            _state.label = 6;
                        case 6:
                            _iteratorNormalCompletion1 = true;
                            return [
                                3,
                                4
                            ];
                        case 7:
                            return [
                                3,
                                10
                            ];
                        case 8:
                            err = _state.sent();
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                            return [
                                3,
                                10
                            ];
                        case 9:
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
                        case 10:
                            _iteratorNormalCompletion = true;
                            return [
                                3,
                                2
                            ];
                        case 11:
                            return [
                                3,
                                14
                            ];
                        case 12:
                            err = _state.sent();
                            _didIteratorError = true;
                            _iteratorError = err;
                            return [
                                3,
                                14
                            ];
                        case 13:
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
                        case 14:
                            return [
                                2
                            ];
                    }
                });
            }
        }
    ]);
    return OccurenceController;
}();


var $ee0f03a1eb887499$export$c92097d412f660e6 = /*#__PURE__*/ function() {
    "use strict";
    function OccurrenceManager(getClient) {
        var _this = this;
        (0, $j0dGC$_2)(this, OccurrenceManager);
        this.disposables = new (0, $j0dGC$CompositeDisposable)();
        this.disposables.add(atom.workspace.observeTextEditors(function(editor) {
            var controller = new (0, $e677de7395b03093$export$65a8f6d9bbe649f0)(getClient, editor);
            _this.disposables.add(controller, editor.onDidDestroy(function() {
                _this.disposables.remove(controller);
                controller.dispose();
            }));
        }));
    }
    (0, $j0dGC$_3)(OccurrenceManager, [
        {
            key: "dispose",
            value: function dispose() {
                this.disposables.dispose();
            }
        }
    ]);
    return OccurrenceManager;
}();


// Inspiration : https://atom.io/packages/ide-haskell
// and https://atom.io/packages/ide-flow
























// screen position from mouse event -- with <3 from Atom-Haskell
function $035ed48997f43bbd$export$4852cabf8dc8bdd1(editor, event) {
    var sp = atom.views.getView(editor).getComponent().screenPositionForMouseEvent(event);
    if (isNaN(sp.row) || isNaN(sp.column)) return;
    return editor.bufferPositionForScreenPosition(sp);
}
function $035ed48997f43bbd$export$af1f9fcad4e99e85(element, parent, box, pos) {
    var offset = 10;
    var left = box.right;
    var right = false;
    var top;
    var whiteSpace = "";
    // need to reset any absolute positioning to get element width and height
    element.style.left = "";
    element.style.top = "";
    element.style.right = "";
    element.style.bottom = "";
    var clientWidth = parent.clientWidth;
    var sty = getComputedStyle(element);
    var offsetWidth = parseInt(sty.width, 10);
    var offsetHeight = parseInt(sty.height, 10);
    // X axis adjust
    if (left + offsetWidth >= clientWidth) left = clientWidth - offsetWidth - offset;
    if (left < 0) {
        whiteSpace = "pre-wrap";
        left = offset;
        right = offset;
    }
    if (pos === "bottom") {
        var clientHeight = parent.clientHeight;
        top = box.bottom;
        // Y axis adjust
        if (top + offsetHeight >= clientHeight) top = box.top - offsetHeight;
    } else if (pos === "top") {
        top = box.top - offsetHeight;
        // Y axis adjust
        if (top < 0) top = box.bottom;
    }
    element.style.left = "".concat(left, "px");
    element.style.top = "".concat(top, "px");
    if (right !== false) element.style.right = "".concat(right, "px");
    if (whiteSpace) element.style.whiteSpace = whiteSpace;
}



var $15ee3a3e2b468d7c$export$e25b256a886d7ca4 = /*#__PURE__*/ function() {
    "use strict";
    function TooltipView(parent) {
        (0, $j0dGC$_2)(this, TooltipView);
        this.parent = parent;
        this.props = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        $j0dGC$initialize(this);
    }
    (0, $j0dGC$_3)(TooltipView, [
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        return [
                            2,
                            $j0dGC$destroy(this)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var _props_sigHelp, _props_sigHelp1, _this_props_sigHelp;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (((_props_sigHelp = props.sigHelp) === null || _props_sigHelp === void 0 ? void 0 : _props_sigHelp.selectedItemIndex) !== undefined && ((_props_sigHelp1 = props.sigHelp) === null || _props_sigHelp1 === void 0 ? void 0 : _props_sigHelp1.selectedItemIndex) !== ((_this_props_sigHelp = this.props.sigHelp) === null || _this_props_sigHelp === void 0 ? void 0 : _this_props_sigHelp.selectedItemIndex)) this.props.visibleItem = undefined;
                                this.props = (0, $j0dGC$_4)({}, this.props, props);
                                if (this.props.sigHelp === undefined) this.props.visibleItem = undefined;
                                else if (this.props.visibleItem !== undefined) {
                                    this.props.visibleItem = this.props.visibleItem % this.props.sigHelp.items.length;
                                    if (this.props.visibleItem < 0) this.props.visibleItem += this.props.sigHelp.items.length;
                                }
                                return [
                                    4,
                                    $j0dGC$update(this)
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
            key: "writeAfterUpdate",
            value: function writeAfterUpdate() {
                (0, $035ed48997f43bbd$export$af1f9fcad4e99e85)(this.element, this.parent, this.props, atom.config.get("atom-typescript-updated").sigHelpPosition);
            }
        },
        {
            key: "render",
            value: function render() {
                return $j0dGC$dom("div", {
                    className: "atom-typescript-tooltip tooltip",
                    key: this.sigHelpHash()
                }, $j0dGC$dom("div", {
                    className: "tooltip-inner"
                }, this.tooltipContents()));
            }
        },
        {
            key: "sigHelpHash",
            value: function sigHelpHash() {
                if (!this.props.sigHelp) return undefined;
                var _this_props_sigHelp_applicableSpan = this.props.sigHelp.applicableSpan, start = _this_props_sigHelp_applicableSpan.start, end = _this_props_sigHelp_applicableSpan.end;
                return "".concat(start.line, ":").concat(start.offset, "-").concat(end.line, ":").concat(end.offset);
            }
        },
        {
            key: "tooltipContents",
            value: function tooltipContents() {
                var _this = this;
                if (!this.props.sigHelp) return "\u2026";
                var sigHelp = this.props.sigHelp;
                var visibleItem = this.props.visibleItem !== undefined ? this.props.visibleItem : sigHelp.selectedItemIndex;
                var count = sigHelp.items.length;
                var classes = [
                    "atom-typescript-tooltip-signature-help"
                ];
                if (count > 1) classes.push("atom-typescript-tooltip-signature-help-changable");
                function className(idx) {
                    var newclasses = [];
                    if (idx === sigHelp.selectedItemIndex) newclasses.push("atom-typescript-tooltip-signature-help-selected");
                    if (idx === visibleItem) newclasses.push("atom-typescript-tooltip-signature-help-visible");
                    return (0, $j0dGC$_6)(classes).concat((0, $j0dGC$_6)(newclasses)).join(" ");
                }
                return sigHelp.items.map(function(sig, idx) {
                    return $j0dGC$dom("div", {
                        className: className(idx),
                        key: idx
                    }, $j0dGC$dom("div", null, (0, $ee2d752c6bad64f9$export$c2a999eb584410f0)(sig.prefixDisplayParts), _this.renderSigHelpParams(sig.parameters, sigHelp.argumentIndex), (0, $ee2d752c6bad64f9$export$c2a999eb584410f0)(sig.suffixDisplayParts), $j0dGC$dom("div", {
                        className: "atom-typescript-tooltip-signature-help-documentation"
                    }, (0, $ee2d752c6bad64f9$export$c2a999eb584410f0)(sig.documentation))));
                });
            }
        },
        {
            key: "renderSigHelpParams",
            value: function renderSigHelpParams(params, selIdx) {
                return params.map(function(p, i) {
                    return $j0dGC$dom("span", {
                        className: "atom-typescript-tooltip-signature-help-parameter",
                        key: i
                    }, i > 0 ? ", " : null, $j0dGC$dom("span", {
                        className: i === selIdx ? "atom-typescript-tooltip-signature-help-selected" : undefined
                    }, (0, $ee2d752c6bad64f9$export$c2a999eb584410f0)(p.displayParts)));
                });
            }
        }
    ]);
    return TooltipView;
}();


var $c2c0fd9659f2fc1a$export$ad76ea7b944b0d8 = /*#__PURE__*/ function() {
    "use strict";
    function TooltipController(deps, editor, bufferPt) {
        var _this = this;
        (0, $j0dGC$_2)(this, TooltipController);
        this.deps = deps;
        this.editor = editor;
        this.cancelled = false;
        this.disposables = new $j0dGC$CompositeDisposable();
        var rawView = atom.views.getView(this.editor);
        this.view = new (0, $15ee3a3e2b468d7c$export$e25b256a886d7ca4)(rawView);
        rawView.appendChild(this.view.element);
        var debouncedUpdate = (0, $j0dGC$debounce)(this.updateTooltip.bind(this), 100, {
            leading: true
        });
        this.disposables.add(this.editor.onDidChangeCursorPosition(function(evt) {
            bufferPt = evt.newBufferPosition;
            (0, $e61b31fac60530e8$export$8080b7556d9d6445)(debouncedUpdate(bufferPt));
        }), rawView.onDidChangeScrollTop(function() {
            setImmediate(function() {
                return _this.updateTooltipPosition(bufferPt);
            });
        }), rawView.onDidChangeScrollLeft(function() {
            setImmediate(function() {
                return _this.updateTooltipPosition(bufferPt);
            });
        }));
        (0, $e61b31fac60530e8$export$8080b7556d9d6445)(this.updateTooltip(bufferPt));
    }
    (0, $j0dGC$_3)(TooltipController, [
        {
            key: "isDisposed",
            value: function isDisposed() {
                return this.cancelled;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                if (this.cancelled) return;
                this.cancelled = true;
                this.disposables.dispose();
                (0, $e61b31fac60530e8$export$8080b7556d9d6445)(this.view.destroy());
            }
        },
        {
            key: "rotateSigHelp",
            value: function rotateSigHelp(shift) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var _this_view_props, visibleItem, sigHelp, curVisItem;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_view_props = this.view.props, visibleItem = _this_view_props.visibleItem, sigHelp = _this_view_props.sigHelp;
                                curVisItem = visibleItem !== undefined ? visibleItem : (sigHelp === null || sigHelp === void 0 ? void 0 : sigHelp.selectedItemIndex) !== undefined ? sigHelp === null || sigHelp === void 0 ? void 0 : sigHelp.selectedItemIndex : 0;
                                return [
                                    4,
                                    this.view.update({
                                        visibleItem: curVisItem + shift
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
            key: "updateTooltip",
            value: function updateTooltip(bufferPt) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var tooltipRect, msg;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (this.cancelled) return [
                                    2
                                ];
                                try {
                                    tooltipRect = this.computeTooltipPosition(bufferPt);
                                } catch (e) {
                                    console.warn(e);
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    this.getMessage(bufferPt)
                                ];
                            case 1:
                                msg = _state.sent();
                                if (this.cancelled) return [
                                    2
                                ];
                                if (!msg) {
                                    this.dispose();
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    this.view.update((0, $j0dGC$_11)((0, $j0dGC$_4)({}, tooltipRect), {
                                        sigHelp: msg
                                    }))
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
            key: "updateTooltipPosition",
            value: function updateTooltipPosition(bufferPt) {
                if (this.cancelled) return;
                var tooltipRect = this.computeTooltipPosition(bufferPt);
                (0, $e61b31fac60530e8$export$8080b7556d9d6445)(this.view.update((0, $j0dGC$_4)({}, tooltipRect)));
            }
        },
        {
            key: "computeTooltipPosition",
            value: function computeTooltipPosition(bufferPt) {
                var rawView = atom.views.getView(this.editor);
                var pixelPos = rawView.pixelPositionForBufferPosition(bufferPt);
                var lines = rawView.querySelector(".lines");
                var linesRect = lines.getBoundingClientRect();
                var lineH = this.editor.getLineHeightInPixels();
                var parentRect = rawView.getBoundingClientRect();
                var Y = pixelPos.top + linesRect.top - parentRect.top + lineH / 2;
                var X = pixelPos.left + linesRect.left - parentRect.left;
                var offset = lineH * 0.7;
                return {
                    left: X,
                    right: X,
                    top: Y - offset,
                    bottom: Y + offset
                };
            }
        },
        {
            key: "getMessage",
            value: function getMessage(bufferPt) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var filePath, client, result, _;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(0, $47ae2d5cb2e495d2$export$3aecee58e23ede2c)(this.editor)) return [
                                    2
                                ];
                                filePath = this.editor.getPath();
                                if (filePath === undefined) return [
                                    2
                                ];
                                return [
                                    4,
                                    this.deps.getClient(filePath)
                                ];
                            case 1:
                                client = _state.sent();
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    4,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    client.execute("signatureHelp", {
                                        file: filePath,
                                        line: bufferPt.row + 1,
                                        offset: bufferPt.column + 1
                                    })
                                ];
                            case 3:
                                result = _state.sent();
                                return [
                                    2,
                                    result.body
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
    return TooltipController;
}();


var $94922988c5ae5d45$export$de743bb5ce1c9811 = /*#__PURE__*/ function() {
    "use strict";
    function SigHelpManager(deps) {
        var _this = this;
        (0, $j0dGC$_2)(this, SigHelpManager);
        this.deps = deps;
        this.subscriptions = new $j0dGC$CompositeDisposable();
        this.editorMap = new WeakMap();
        this.stoppedChanging = function(editor) {
            return function(event) {
                if (!atom.config.get("atom-typescript-updated.sigHelpDisplayOnChange")) return;
                var filePath = editor.getPath();
                if (filePath === undefined) return;
                var pos = editor.getLastCursor().getBufferPosition();
                var _event_changes_filter = (0, $j0dGC$_5)(event.changes.filter(function(x) {
                    return x.newRange.containsPoint(pos);
                }), 1), ch = _event_changes_filter[0];
                if (ch && ch.newText.match(/[<(,]/) !== null) (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.showTooltip(editor, pos));
            };
        };
        this.subscriptions.add(atom.workspace.observeTextEditors(function(editor) {
            var disp = new $j0dGC$CompositeDisposable();
            disp.add(editor.onDidDestroy(function() {
                disp.dispose();
                _this.subscriptions.remove(disp);
                var controller = _this.editorMap.get(editor);
                if (controller) controller.dispose();
            }), editor.onDidStopChanging(_this.stoppedChanging(editor)));
            _this.subscriptions.add(disp);
        }));
    }
    (0, $j0dGC$_3)(SigHelpManager, [
        {
            key: "dispose",
            value: function dispose() {
                this.subscriptions.dispose();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = atom.workspace.getTextEditors()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var editor = _step.value;
                        var controller = this.editorMap.get(editor);
                        if (controller) controller.dispose();
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
        },
        {
            key: "showTooltipAt",
            value: function showTooltipAt(editor) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var pt;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        pt = editor.getLastCursor().getBufferPosition();
                        return [
                            2,
                            this.showTooltip(editor, pt)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "rotateSigHelp",
            value: function rotateSigHelp(editor, shift) {
                var controller = this.editorMap.get(editor);
                if (controller && !controller.isDisposed()) {
                    (0, $e61b31fac60530e8$export$8080b7556d9d6445)(controller.rotateSigHelp(shift));
                    return true;
                } else return false;
            }
        },
        {
            key: "hideTooltipAt",
            value: function hideTooltipAt(editor) {
                var controller = this.editorMap.get(editor);
                if (controller && !controller.isDisposed()) {
                    controller.dispose();
                    return true;
                } else return false;
            }
        },
        {
            key: "showTooltip",
            value: function showTooltip(editor, pos) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var controller;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        controller = this.editorMap.get(editor);
                        if (!controller || controller.isDisposed()) this.editorMap.set(editor, new (0, $c2c0fd9659f2fc1a$export$ad76ea7b944b0d8)(this.deps, editor, pos));
                        return [
                            2
                        ];
                    });
                }).call(this);
            }
        }
    ]);
    return SigHelpManager;
}();


// Inspiration : https://atom.io/packages/ide-haskell
// and https://atom.io/packages/ide-flow








function $d0a97c2059c6b680$export$63174c828edd6ff8(element, event, selector, callback) {
    var bound = function(evt) {
        var sel = evt.target.closest(selector);
        if (sel && element.contains(sel)) callback(evt);
    };
    element.addEventListener(event, bound);
    return new (0, $j0dGC$Disposable)(function() {
        element.removeEventListener(event, bound);
    });
}

















var $482f918d461710b8$export$e25b256a886d7ca4 = /*#__PURE__*/ function() {
    "use strict";
    function TooltipView() {
        (0, $j0dGC$_2)(this, TooltipView);
        this.tooltip = null;
        this.props = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        $j0dGC$etch1.initialize(this);
    }
    (0, $j0dGC$_3)(TooltipView, [
        {
            key: "destroy",
            value: function destroy() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        return [
                            2,
                            $j0dGC$etch1.destroy(this)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "update",
            value: function update(props) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var _;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.props = (0, $j0dGC$_4)({}, this.props, props);
                                _ = this;
                                return [
                                    4,
                                    (0, $4278b589e5f5160c$export$2c9a28f937ef04fb)(this.props.info, $j0dGC$etch1, function(x) {
                                        return $j0dGC$etch1.dom("div", {
                                            className: "atom-typescript-tooltip-tooltip-code"
                                        }, x);
                                    })
                                ];
                            case 1:
                                _.tooltip = _state.sent();
                                return [
                                    4,
                                    $j0dGC$etch1.update(this)
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
            key: "writeAfterUpdate",
            value: function writeAfterUpdate() {
                (0, $035ed48997f43bbd$export$af1f9fcad4e99e85)(this.element, document.body, this.props, atom.config.get("atom-typescript-updated").tooltipPosition);
            }
        },
        {
            key: "render",
            value: function render() {
                return $j0dGC$etch1.dom("div", {
                    className: "atom-typescript-tooltip tooltip"
                }, $j0dGC$etch1.dom("div", {
                    className: "tooltip-inner"
                }, this.tooltip));
            }
        }
    ]);
    return TooltipView;
}();


var $32ec3b1967ab1971$export$ad76ea7b944b0d8 = /*#__PURE__*/ function() {
    "use strict";
    function TooltipController(getClient, editor, e, bufferPt) {
        (0, $j0dGC$_2)(this, TooltipController);
        this.getClient = getClient;
        this.cancelled = false;
        (0, $e61b31fac60530e8$export$8080b7556d9d6445)(this.initialize(editor, e, bufferPt));
    }
    (0, $j0dGC$_3)(TooltipController, [
        {
            key: "dispose",
            value: function dispose() {
                this.cancelled = true;
                if (this.view) {
                    (0, $e61b31fac60530e8$export$8080b7556d9d6445)(this.view.destroy());
                    this.view = undefined;
                }
            }
        },
        {
            key: "initialize",
            value: function initialize(editor, e, bufferPt) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var rawView, curCharPixelPt, nextCharPixelPt, offset, tooltipRect, msg;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                rawView = atom.views.getView(editor);
                                try {
                                    curCharPixelPt = rawView.pixelPositionForBufferPosition(bufferPt);
                                    nextCharPixelPt = rawView.pixelPositionForBufferPosition(bufferPt.traverse([
                                        0,
                                        1
                                    ]));
                                } catch (e) {
                                    console.warn(e);
                                    return [
                                        2
                                    ];
                                }
                                if (curCharPixelPt.left >= nextCharPixelPt.left) return [
                                    2
                                ];
                                // find out show position
                                offset = editor.getLineHeightInPixels() * 0.7;
                                tooltipRect = {
                                    left: e.clientX,
                                    right: e.clientX,
                                    top: e.clientY - offset,
                                    bottom: e.clientY + offset
                                };
                                return [
                                    4,
                                    this.getMessage(editor, bufferPt)
                                ];
                            case 1:
                                msg = _state.sent();
                                if (this.cancelled) return [
                                    2
                                ];
                                if (!(msg !== undefined)) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    this.showTooltip(tooltipRect, msg)
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
            key: "getMessage",
            value: function getMessage(editor, bufferPt) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var result, client, filePath, _;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.getClient(editor)
                                ];
                            case 1:
                                client = _state.sent();
                                if (!client) return [
                                    2
                                ];
                                filePath = editor.getPath();
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    4,
                                    ,
                                    5
                                ]);
                                if (filePath === undefined) return [
                                    2
                                ];
                                return [
                                    4,
                                    client.execute("quickinfo", {
                                        file: filePath,
                                        line: bufferPt.row + 1,
                                        offset: bufferPt.column + 1
                                    })
                                ];
                            case 3:
                                result = _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                _ = _state.sent();
                                return [
                                    2
                                ];
                            case 5:
                                return [
                                    2,
                                    result.body
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "showTooltip",
            value: function showTooltip(tooltipRect, info) {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.view = new (0, $482f918d461710b8$export$e25b256a886d7ca4)();
                                document.body.appendChild(this.view.element);
                                return [
                                    4,
                                    this.view.update((0, $j0dGC$_11)((0, $j0dGC$_4)({}, tooltipRect), {
                                        info: info
                                    }))
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
    ]);
    return TooltipController;
}();



var $31f5665072708b9b$export$3cf29e47efa41626 = /*#__PURE__*/ function() {
    "use strict";
    function TooltipManager(getClientInternal) {
        var _this = this;
        (0, $j0dGC$_2)(this, TooltipManager);
        this.getClientInternal = getClientInternal;
        this.subscriptions = new $j0dGC$CompositeDisposable();
        this.editorMap = new WeakMap();
        this.getClient = function(editor) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var filePath;
                return (0, $j0dGC$_1)(this, function(_state) {
                    // Only on ".ts" files
                    filePath = editor.getPath();
                    if (filePath === undefined) return [
                        2
                    ];
                    if (!$47ae2d5cb2e495d2$export$3aecee58e23ede2c(editor)) return [
                        2
                    ];
                    // We only create a "program" once the file is persisted to disk
                    if (!(0, $j0dGC$fs).existsSync(filePath)) return [
                        2
                    ];
                    return [
                        2,
                        this.getClientInternal(filePath)
                    ];
                });
            }).call(_this);
        };
        /** clears the timeout && the tooltip */ this.clearExprTypeTimeout = function() {
            if (_this.exprTypeTimeout !== undefined) {
                clearTimeout(_this.exprTypeTimeout);
                _this.exprTypeTimeout = undefined;
            }
            _this.hideExpressionType();
        };
        this.trackMouseMovement = function(editor) {
            var lastExprTypeBufferPt;
            return function(e) {
                var bufferPt = (0, $035ed48997f43bbd$export$4852cabf8dc8bdd1)(editor, e);
                if (!bufferPt) return;
                if (lastExprTypeBufferPt && lastExprTypeBufferPt.isEqual(bufferPt) && _this.pendingTooltip) return;
                lastExprTypeBufferPt = bufferPt;
                _this.clearExprTypeTimeout();
                _this.exprTypeTimeout = window.setTimeout(function() {
                    return _this.showExpressionType(editor, e, bufferPt);
                }, atom.config.get("atom-typescript-updated").tooltipDelay);
            };
        };
        this.subscriptions.add(atom.workspace.observeTextEditors(function(editor) {
            var rawView = atom.views.getView(editor);
            var lines = rawView.querySelector(".lines");
            _this.editorMap.set(editor, {
                rawView: rawView,
                lines: lines
            });
            var disp = new $j0dGC$CompositeDisposable();
            disp.add((0, $d0a97c2059c6b680$export$63174c828edd6ff8)(rawView, "mousemove", ".scroll-view", _this.trackMouseMovement(editor)), (0, $d0a97c2059c6b680$export$63174c828edd6ff8)(rawView, "mouseout", ".scroll-view", _this.clearExprTypeTimeout), (0, $d0a97c2059c6b680$export$63174c828edd6ff8)(rawView, "keydown", ".scroll-view", _this.clearExprTypeTimeout), rawView.onDidChangeScrollTop(_this.clearExprTypeTimeout), rawView.onDidChangeScrollLeft(_this.clearExprTypeTimeout), editor.onDidDestroy(function() {
                disp.dispose();
                _this.subscriptions.remove(disp);
                _this.clearExprTypeTimeout();
            }));
            _this.subscriptions.add(disp);
        }));
    }
    (0, $j0dGC$_3)(TooltipManager, [
        {
            key: "dispose",
            value: function dispose() {
                this.subscriptions.dispose();
                this.clearExprTypeTimeout();
            }
        },
        {
            key: "showExpressionAt",
            value: function showExpressionAt(editor) {
                var pt = editor.getLastCursor().getBufferPosition();
                var view = atom.views.getView(editor);
                var px;
                try {
                    px = view.pixelPositionForBufferPosition(pt);
                } catch (e) {
                    console.warn(e);
                    return;
                }
                this.showExpressionType(editor, this.mousePositionForPixelPosition(editor, px), pt);
            }
        },
        {
            key: "mousePositionForPixelPosition",
            value: function mousePositionForPixelPosition(editor, p) {
                var rawView = atom.views.getView(editor);
                var lines = rawView.querySelector(".lines");
                var linesRect = lines.getBoundingClientRect();
                return {
                    clientY: p.top + linesRect.top + editor.getLineHeightInPixels() / 2,
                    clientX: p.left + linesRect.left
                };
            }
        },
        {
            key: "showExpressionType",
            value: function showExpressionType(editor, e, bufferPt) {
                if (this.pendingTooltip) this.pendingTooltip.dispose();
                this.pendingTooltip = new (0, $32ec3b1967ab1971$export$ad76ea7b944b0d8)(this.getClient, editor, e, bufferPt);
            }
        },
        {
            key: "hideExpressionType",
            value: function hideExpressionType() {
                if (!this.pendingTooltip) return;
                this.pendingTooltip.dispose();
                this.pendingTooltip = undefined;
            }
        }
    ]);
    return TooltipManager;
}();










var $bbbe7b214522b8df$export$951a8e3d4c79262 = /*#__PURE__*/ function() {
    "use strict";
    function SemanticViewController(getClient) {
        var _this = this;
        (0, $j0dGC$_2)(this, SemanticViewController);
        this.getClient = getClient;
        this.subscriptions = new (0, $j0dGC$CompositeDisposable)();
        var pane = atom.workspace.paneForURI((0, $cea6b8bc91af2731$export$c5c441a5719d665b));
        if (pane) this.view = pane.itemForURI((0, $cea6b8bc91af2731$export$c5c441a5719d665b));
        if (this.view) (0, $e61b31fac60530e8$export$8080b7556d9d6445)(this.view.setGetClient(this.getClient));
        this.subscriptions.add(new (0, $j0dGC$Disposable)(function() {
            if (_this.view) {
                atom.workspace.hide(_this.view);
                (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.view.destroy());
            }
        }), atom.config.observe("atom-typescript-updated.showSemanticView", function(val) {
            if (val) (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.show());
            else _this.hide();
        }));
    }
    (0, $j0dGC$_3)(SemanticViewController, [
        {
            key: "dispose",
            value: function dispose() {
                this.subscriptions.dispose();
            }
        },
        {
            key: "toggle",
            value: function toggle() {
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!this.view) return [
                                    3,
                                    2
                                ];
                                this.view = (0, $cea6b8bc91af2731$export$a3a95952d8506109).create({
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















var $9f17059b29ad2ecc$export$3288d34c523a1192 = /*#__PURE__*/ function() {
    "use strict";
    function Tag(props) {
        (0, $j0dGC$_2)(this, Tag);
        this.position = props.position;
        this.name = props.name;
        this.type = props.type;
        this.parent = props.parent;
        this.file = props.file;
    }
    (0, $j0dGC$_3)(Tag, null, [
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


function $845445e9858d490b$export$3d887693d0007350(filePath, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var navtree;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        $845445e9858d490b$var$getNavTree(filePath, deps)
                    ];
                case 1:
                    navtree = _state.sent();
                    if (navtree && navtree.childItems) // NOTE omit root NavigationTree tree element (which corresponds to the file itself)
                    return [
                        2,
                        Array.from($845445e9858d490b$var$parseNavTree(navtree.childItems))
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
function $845445e9858d490b$export$84b9b1d45a7e55b8(filePath, search, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var navtree;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        $845445e9858d490b$var$getNavTo(filePath, search, deps)
                    ];
                case 1:
                    navtree = _state.sent();
                    if (navtree) return [
                        2,
                        Array.from($845445e9858d490b$var$parseNavTo(navtree))
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
function $845445e9858d490b$var$parseNavTree(navTree, parent) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, tag, err;
    return (0, $j0dGC$_1)(this, function(_state) {
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
                tag = (0, $9f17059b29ad2ecc$export$3288d34c523a1192).fromNavTree(item, parent);
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
                    (0, $j0dGC$_7)($845445e9858d490b$var$parseNavTree(item.childItems, tag))
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
function $845445e9858d490b$var$parseNavTo(navTree, parent) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, err;
    return (0, $j0dGC$_1)(this, function(_state) {
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
                    (0, $9f17059b29ad2ecc$export$3288d34c523a1192).fromNavto(item, parent)
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
function $845445e9858d490b$var$getNavTree(filePath, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var client, navtreeResult, e;
        return (0, $j0dGC$_1)(this, function(_state) {
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
function $845445e9858d490b$var$getNavTo(filePath, search, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var client, navtoResult, e;
        return (0, $j0dGC$_1)(this, function(_state) {
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




function $d31fcc512247a658$export$1d50c664485a457a(tag, editor, histGoForward) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        return (0, $j0dGC$_1)(this, function(_state) {
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
function $d31fcc512247a658$export$f52e1de408b9499d(editor) {
    var editorElement = atom.views.getView(editor);
    var scrollTop = editorElement.getScrollTop();
    return {
        bufferRanges: editor.getSelectedBufferRanges(),
        scrollTop: scrollTop
    };
}
function $d31fcc512247a658$export$f514d2bb3b6ad37e(editor, param) {
    var bufferRanges = param.bufferRanges, scrollTop = param.scrollTop;
    var editorElement = atom.views.getView(editor);
    editor.setSelectedBufferRanges(bufferRanges);
    editorElement.setScrollTop(scrollTop);
}


function $b376d786bdfd8420$export$e03c1c3201ee8bb7(editor, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var filePath, initialState, tag;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    filePath = editor.getPath();
                    if (!(filePath !== undefined)) return [
                        3,
                        4
                    ];
                    if (atom.config.get("symbols-view.quickJumpToFileSymbol")) initialState = $d31fcc512247a658$export$f52e1de408b9499d(editor);
                    return [
                        4,
                        (0, $0be5325d1bf82077$export$12cb8c60c107136e)({
                            items: (0, $845445e9858d490b$export$3d887693d0007350)(filePath, deps),
                            itemTemplate: function(param, ctx) {
                                var name = param.name, position = param.position;
                                return $j0dGC$dom("li", {
                                    className: "two-lines"
                                }, $j0dGC$dom("div", {
                                    className: "primary-line"
                                }, $j0dGC$dom((0, $a3783a40399b9047$export$31d5f5740e2c2887), {
                                    label: name,
                                    query: ctx.getFilterQuery()
                                })), $j0dGC$dom("div", {
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
                        $d31fcc512247a658$export$1d50c664485a457a(tag, editor, deps.histGoForward)
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    if (initialState) $d31fcc512247a658$export$f514d2bb3b6ad37e(editor, initialState);
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    })();
}









function $d9ac089b9417e13d$export$e03c1c3201ee8bb7(editor, deps) {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var filePath, tag;
        return (0, $j0dGC$_1)(this, function(_state) {
            switch(_state.label){
                case 0:
                    filePath = editor.getPath();
                    if (!(filePath !== undefined)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        (0, $0be5325d1bf82077$export$12cb8c60c107136e)({
                            items: function(search) {
                                return (0, $845445e9858d490b$export$84b9b1d45a7e55b8)(filePath, search, deps);
                            },
                            itemTemplate: function(param, ctx) {
                                var name = param.name, position = param.position, file = param.file;
                                var relfile = atom.project.relativize(file);
                                return $j0dGC$dom("li", {
                                    className: "two-lines"
                                }, $j0dGC$dom("div", {
                                    className: "primary-line"
                                }, $j0dGC$dom((0, $a3783a40399b9047$export$31d5f5740e2c2887), {
                                    label: name,
                                    query: ctx.getFilterQuery()
                                })), $j0dGC$dom("div", {
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
                        $d31fcc512247a658$export$1d50c664485a457a(tag, editor, deps.histGoForward)
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


var $dd2f950237a8b876$export$bf8eec42fec7719 = /*#__PURE__*/ function() {
    "use strict";
    function SymbolsViewController(deps) {
        (0, $j0dGC$_2)(this, SymbolsViewController);
        this.deps = deps;
    }
    (0, $j0dGC$_3)(SymbolsViewController, [
        {
            key: "toggleFileView",
            value: function toggleFileView1(editor) {
                (0, $e61b31fac60530e8$export$8080b7556d9d6445)((0, $b376d786bdfd8420$export$e03c1c3201ee8bb7)(editor, this.deps));
            }
        },
        {
            key: "toggleProjectView",
            value: function toggleProjectView1(editor) {
                (0, $e61b31fac60530e8$export$8080b7556d9d6445)((0, $d9ac089b9417e13d$export$e03c1c3201ee8bb7)(editor, this.deps));
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










var $2923d5837bbcb0ae$export$a4d36ae2cf2e8cd = /*#__PURE__*/ function() {
    "use strict";
    function ErrorPusher() {
        (0, $j0dGC$_2)(this, ErrorPusher);
        this.errors = new Map();
        this.fileGrammars = new Map();
        this.pushErrors = (0, $j0dGC$debounce)(this.pushErrors.bind(this), 100);
    }
    (0, $j0dGC$_3)(ErrorPusher, [
        {
            key: "getErrorsInRange",
            value: function getErrorsInRange(filePath, range) {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, prefixed, errors, err;
                return (0, $j0dGC$_1)(this, function(_state) {
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
                            errors = prefixed.get($j0dGC$normalize(filePath));
                            if (!errors) return [
                                3,
                                4
                            ];
                            return [
                                5,
                                (0, $j0dGC$_7)(errors.filter(function(err) {
                                    return (0, $ee2d752c6bad64f9$export$477d491a08b070ec)(err).intersectsWith(range);
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
                return (0, $j0dGC$_1)(this, function(_state) {
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
                            errors = prefixed.get($j0dGC$normalize(filePath));
                            if (!errors) return [
                                3,
                                4
                            ];
                            return [
                                5,
                                (0, $j0dGC$_7)(errors.filter(function(err) {
                                    return (0, $ee2d752c6bad64f9$export$477d491a08b070ec)(err).containsPoint(loc);
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
                prefixed.set($j0dGC$normalize(filePath), errors);
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
                                var _step_value = (0, $j0dGC$_5)(_step1.value, 2), filePath = _step_value[0], diagnostics = _step_value[1];
                                var ed = atom.workspace.getTextEditors().find(function(x) {
                                    return x.getPath() === filePath;
                                });
                                var scopeName = ed ? ed.getGrammar().scopeName : _this.selectGrammar(filePath);
                                if ($2923d5837bbcb0ae$var$config("suppressAllDiagnostics", scopeName)) return "continue";
                                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(var _iterator = diagnostics[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        var diagnostic = _step.value;
                                        if ($2923d5837bbcb0ae$var$config("ignoredDiagnosticCodes", scopeName).includes("".concat(diagnostic.code))) continue;
                                        if ($2923d5837bbcb0ae$var$config("ignoreUnusedSuggestionDiagnostics", scopeName) && diagnostic.reportsUnnecessary) continue;
                                        if (diagnostic.category === "suggestion" && $2923d5837bbcb0ae$var$config("ignoredSuggestionDiagnostics", scopeName).includes("".concat(diagnostic.code))) continue;
                                        if ($2923d5837bbcb0ae$var$config("ignoreNonSuggestionSuggestionDiagnostics", scopeName) && diagnostic.category === "suggestion" && !(0, $ee2d752c6bad64f9$export$8b10423be8ce987b)(diagnostic.code, (0, $ee2d752c6bad64f9$export$70bfa4f5700cfeae).Suggestion)) continue;
                                        // Add a bit of extra validation that we have the necessary locations since linter v2
                                        // does not allow range-less messages anymore. This happens with configFileDiagnostics.
                                        var start = diagnostic.start, end = diagnostic.end;
                                        if (!start || !end) start = end = {
                                            line: 1,
                                            offset: 1
                                        };
                                        result.push({
                                            severity: _this.getSeverity($2923d5837bbcb0ae$var$config("unusedAsInfo", scopeName), diagnostic),
                                            excerpt: diagnostic.text,
                                            location: {
                                                file: filePath,
                                                position: (0, $ee2d752c6bad64f9$export$19d00dfc4e734f8b)(start, end)
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
function $2923d5837bbcb0ae$var$config(option, scope) {
    return atom.config.get("atom-typescript-updated.".concat(option), {
        scope: [
            scope
        ]
    });
}
















var $c78024eeed3bc40b$export$6932e15e784422f9 = /*#__PURE__*/ function() {
    "use strict";
    function TypescriptBuffer(buffer, deps) {
        var _this = this;
        (0, $j0dGC$_2)(this, TypescriptBuffer);
        this.buffer = buffer;
        this.deps = deps;
        this.events = new $j0dGC$Emitter();
        this.compileOnSave = false;
        this.subscriptions = new $j0dGC$CompositeDisposable();
        this.on = this.events.on.bind(this.events);
        this.dispose = function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
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
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
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
                            (0, $e61b31fac60530e8$export$8080b7556d9d6445)(this.getErr({
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
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var client, file;
                return (0, $j0dGC$_1)(this, function(_state) {
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
            (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.close().then(function() {
                _this.openPromise = _this.open(newPath);
            }));
        };
        this.onDidSave = function() {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
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
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var _this_state, client, filePath;
                return (0, $j0dGC$_1)(this, function(_state) {
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
            debouncedGetErr = (0, $j0dGC$debounce)(function() {
                (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.getErr({
                    allFiles: false,
                    delay: 0
                }));
            }, val);
        }), buffer.onDidChangePath(this.onDidChangePath), buffer.onDidDestroy(function() {
            (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.dispose());
        }), buffer.onDidSave(function() {
            (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.onDidSave());
        }), buffer.onDidStopChanging(function(param) {
            var changes = param.changes;
            if (changes.length > 0) _this.deps.reportBuildStatus(undefined);
        }), buffer.onDidChangeText(function(arg) {
            // NOTE: we don't need to worry about interleaving here,
            // because onDidChangeText pushes all changes at once
            (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.onDidChangeText(arg));
            debouncedGetErr();
        }));
        this.openPromise = this.open(this.buffer.getPath());
    }
    (0, $j0dGC$_3)(TypescriptBuffer, [
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var files;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!this.state) return [
                                    2
                                ];
                                files = opts.allFiles ? Array.from((0, $47ae2d5cb2e495d2$export$d121654372a91687)()) : [
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var _this_state, client, filePath, result, fileNames, promises, saved;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                                fileNames = (0, $j0dGC$flatten)(result.body.map(function(project) {
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var error, e;
                    return (0, $j0dGC$_1)(this, function(_state) {
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var _this, client, result;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                if (!(filePath !== undefined && (0, $47ae2d5cb2e495d2$export$225e59ca209a506)(filePath))) return [
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
                                    subscriptions: new $j0dGC$CompositeDisposable()
                                };
                                this.state.subscriptions.add(client.on("restarted", function() {
                                    return (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.init());
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
                                this.state.configFile = new $j0dGC$File(result.body.configFileName);
                                return [
                                    4,
                                    this.readConfigFile()
                                ];
                            case 4:
                                _state.sent();
                                this.state.subscriptions.add(this.state.configFile.onDidChange(function() {
                                    return (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.readConfigFile());
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
                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                    var options, cfg;
                    return (0, $j0dGC$_1)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!this.state || !this.state.configFile) return [
                                    2
                                ];
                                options = (0, $ee2d752c6bad64f9$export$bad43d745a81bbd5)(this.state.configFile.getPath());
                                this.compileOnSave = options.compileOnSave;
                                cfg = atom.config.get("atom-typescript-updated");
                                return [
                                    4,
                                    this.state.client.execute("configure", {
                                        file: this.state.filePath,
                                        formatOptions: options.formatCodeOptions,
                                        preferences: (0, $j0dGC$_4)({
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
$c78024eeed3bc40b$export$6932e15e784422f9.bufferMap = new WeakMap();


var $ffa8edc637117fbb$export$a0bbaae59860162e = /*#__PURE__*/ function() {
    "use strict";
    function TypescriptEditorPane(editor, opts) {
        var _this = this;
        (0, $j0dGC$_2)(this, TypescriptEditorPane);
        this.editor = editor;
        this.opts = opts;
        this.subscriptions = new (0, $j0dGC$CompositeDisposable)();
        this.isTypescript = false;
        this.destroy = function() {
            TypescriptEditorPane.editorMap["delete"](_this.editor);
            atom.views.getView(_this.editor).classList.remove("typescript-editor");
            _this.subscriptions.dispose();
            (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.buffer.dispose());
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
            _this.isTypescript = (0, $47ae2d5cb2e495d2$export$3aecee58e23ede2c)(_this.editor);
            if (_this.isTypescript) atom.views.getView(_this.editor).classList.add("typescript-editor");
            else atom.views.getView(_this.editor).classList.remove("typescript-editor");
        };
        this.buffer = (0, $c78024eeed3bc40b$export$6932e15e784422f9).create(editor.getBuffer(), opts);
        this.subscriptions.add(this.buffer.on("opened", this.onOpened));
        this.checkIfTypescript();
        this.subscriptions.add(editor.onDidChangePath(this.checkIfTypescript), editor.onDidChangeGrammar(this.checkIfTypescript), editor.onDidDestroy(this.destroy), editor.onDidSave(function() {
            if (atom.config.get("atom-typescript-updated.checkAllFilesOnSave")) atom.commands.dispatch(atom.views.getView(editor), "typescript:check-all-files");
        }));
    }
    (0, $j0dGC$_3)(TypescriptEditorPane, [
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
$ffa8edc637117fbb$export$a0bbaae59860162e.editorMap = new WeakMap();


var $c495706121dd3643$export$f2c0a16002429d72 = /*#__PURE__*/ function() {
    "use strict";
    function PluginManager(state) {
        var _this = this;
        (0, $j0dGC$_2)(this, PluginManager);
        this.usingBuiltinTooltipManager = true;
        this.usingBuiltinSigHelpManager = true;
        this.pending = new Set();
        this.clearErrors = function() {
            _this.errorPusher.clear();
        };
        this.clearFileErrors = function(filePath) {
            _this.errorPusher.clearFileErrors(filePath);
        };
        this.getClient = function(filePath) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
                    return [
                        2,
                        this.clientResolver.get(filePath)
                    ];
                });
            }).call(_this);
        };
        this.killAllServers = function() {
            (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.clientResolver.restartAllServers());
        };
        this.withBuffer = function(filePath, action) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var normalizedFilePath, ed, buffer;
                return (0, $j0dGC$_1)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            normalizedFilePath = $j0dGC$normalize(filePath);
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
                                $j0dGC$TextBuffer.load(normalizedFilePath)
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
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var event;
                return (0, $j0dGC$_1)(this, function(_state) {
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
            (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.statusPanel.update({
                progress: progress
            }));
        };
        this.reportBuildStatus = function(buildStatus) {
            (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.statusPanel.update({
                buildStatus: buildStatus
            }));
        };
        this.reportClientInfo = function(info) {
            (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.statusPanel.update(info));
        };
        this.applyEdits = function(edits) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                var _this;
                return (0, $j0dGC$_1)(this, function(_state) {
                    _this = this;
                    return [
                        2,
                        void Promise.all(edits.map(function(edit) {
                            return _this.withBuffer(edit.fileName, function(buffer) {
                                return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                                    return (0, $j0dGC$_1)(this, function(_state) {
                                        buffer.transact(function() {
                                            var changes = edit.textChanges.map(function(e) {
                                                return {
                                                    range: (0, $ee2d752c6bad64f9$export$477d491a08b070ec)(e),
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
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!this.usingBuiltinTooltipManager) return [
                                3,
                                1
                            ];
                            this.tooltipManager.showExpressionAt(ed);
                            return [
                                3,
                                3
                            ];
                        case 1:
                            return [
                                4,
                                atom.commands.dispatch(atom.views.getView(ed), "datatip:toggle")
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
        this.showSigHelpAt = function(ed) {
            return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
                return (0, $j0dGC$_1)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!this.usingBuiltinSigHelpManager) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                this.sigHelpManager.showTooltipAt(ed)
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
                                atom.commands.dispatch(atom.views.getView(ed), "signature-help:show")
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
            }).call(_this);
        };
        this.hideSigHelpAt = function(ed) {
            if (_this.usingBuiltinSigHelpManager) return _this.sigHelpManager.hideTooltipAt(ed);
            else return false;
        };
        this.rotateSigHelp = function(ed, shift) {
            if (_this.usingBuiltinSigHelpManager) return _this.sigHelpManager.rotateSigHelp(ed, shift);
            else return false;
        };
        this.histGoForward = function(ed, opts) {
            return _this.editorPosHist.goForward(ed, opts);
        };
        this.drawPending = (0, $j0dGC$throttle)(function(pending) {
            return (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.statusPanel.update({
                pending: pending
            }));
        }, 100, {
            leading: false
        });
        this.subscriptions = new (0, $j0dGC$CompositeDisposable)();
        this.clientResolver = new (0, $d86d165b76686502$export$dceb19333e080e82)(this.reportBusyWhile);
        this.subscriptions.add(this.clientResolver);
        this.statusPanel = new (0, $0cc2a0b6b51e3bbe$export$e46d185d0654294e)();
        this.subscriptions.add(this.statusPanel);
        this.errorPusher = new (0, $2923d5837bbcb0ae$export$a4d36ae2cf2e8cd)();
        this.subscriptions.add(this.errorPusher);
        this.codefixProvider = new (0, $8bcf7726b44fc4f6$export$9262ee226e3cab9d)(this.clientResolver, this.errorPusher, this.applyEdits);
        this.subscriptions.add(this.codefixProvider);
        this.semanticViewController = new (0, $bbbe7b214522b8df$export$951a8e3d4c79262)(this.getClient);
        this.subscriptions.add(this.semanticViewController);
        this.editorPosHist = new (0, $995468ca3443543d$export$37b735b3f7a16aff)(state && state.editorPosHistState);
        this.subscriptions.add(this.editorPosHist);
        this.symbolsViewController = new (0, $dd2f950237a8b876$export$bf8eec42fec7719)({
            histGoForward: this.histGoForward,
            getClient: this.getClient
        });
        this.subscriptions.add(this.symbolsViewController);
        this.tooltipManager = new (0, $31f5665072708b9b$export$3cf29e47efa41626)(this.getClient);
        this.subscriptions.add(this.tooltipManager);
        this.sigHelpManager = new (0, $94922988c5ae5d45$export$de743bb5ce1c9811)({
            getClient: this.getClient
        });
        this.subscriptions.add(this.sigHelpManager);
        this.occurrenceManager = new (0, $ee0f03a1eb887499$export$c92097d412f660e6)(this.getClient);
        this.subscriptions.add(this.occurrenceManager);
        this.typescriptPaneFactory = (0, $ffa8edc637117fbb$export$a0bbaae59860162e).createFactory({
            clearFileErrors: this.clearFileErrors,
            getClient: this.getClient,
            reportBuildStatus: this.reportBuildStatus,
            reportClientInfo: this.reportClientInfo
        });
        this.subscribeEditors();
        // Register the commands
        this.subscriptions.add((0, $c2b50f0312d4c499$export$f647bfc0a5fe4336)({
            getClient: this.getClient,
            applyEdits: this.applyEdits,
            clearErrors: this.clearErrors,
            killAllServers: this.killAllServers,
            reportProgress: this.reportProgress,
            reportBuildStatus: this.reportBuildStatus,
            toggleSemanticViewController: function() {
                (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.semanticViewController.toggle());
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
    (0, $j0dGC$_3)(PluginManager, [
        {
            key: "destroy",
            value: function destroy() {
                this.subscriptions.dispose();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = atom.workspace.getTextEditors()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var ed = _step.value;
                        var pane = (0, $ffa8edc637117fbb$export$a0bbaae59860162e).lookupPane(ed);
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
                var disp = new $j0dGC$Disposable(function() {
                    tile.destroy();
                });
                this.subscriptions.add(disp);
                return disp;
            }
        },
        {
            key: "consumeDatatipService",
            value: function consumeDatatipService(datatip) {
                if (atom.config.get("atom-typescript-updated").preferBuiltinTooltips) return;
                var disp = datatip.addProvider(new (0, $a62b15b9bf6501f7$export$62181cd26290fa50)(this.getClient));
                this.subscriptions.add(disp);
                this.tooltipManager.dispose();
                this.usingBuiltinTooltipManager = false;
                return disp;
            }
        },
        {
            key: "consumeSigHelpService",
            value: function consumeSigHelpService(registry) {
                if (atom.config.get("atom-typescript-updated").preferBuiltinSigHelp) return;
                var provider = new (0, $813c06c89c431621$export$11ab8206b5e263e8)(this.getClient);
                var disp = registry(provider);
                this.subscriptions.add(disp, provider);
                this.sigHelpManager.dispose();
                this.usingBuiltinSigHelpManager = false;
                return disp;
            }
        },
        {
            key: "consumeBusySignal",
            value: function consumeBusySignal(busySignalService) {
                var _this = this;
                if (atom.config.get("atom-typescript-updated").preferBuiltinBusySignal) return;
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
                    new (0, $82009c0d32a0c9d0$export$536c67bf76d43cfb)(this.getClient, this.applyEdits)
                ];
            }
        },
        {
            key: "provideIntentions",
            value: function provideIntentions() {
                return (0, $f335a673678f02eb$export$c0ac1f0dd4073b70)(this.codefixProvider);
            }
        },
        {
            key: "provideIntentionsHighlight",
            value: function provideIntentionsHighlight() {
                return (0, $f335a673678f02eb$export$bbfa3896d0c562e)(this.codefixProvider);
            }
        },
        {
            key: "provideCodeActions",
            value: function provideCodeActions() {
                return (0, $206be3042dd17018$export$d21c11139c8fe8ee)(this.codefixProvider);
            }
        },
        {
            key: "provideHyperclick",
            value: function provideHyperclick() {
                return (0, $006be3b9d96979d1$export$51c07c30fb16d966)(this.getClient, this.histGoForward);
            }
        },
        {
            key: "provideReferences",
            value: function provideReferences() {
                return (0, $7ab631458cefe15a$export$b797847259776697)(this.getClient);
            }
        },
        {
            key: "provideOutlines",
            value: function provideOutlines() {
                return (0, $1d67a428a312fc1b$export$2b92277a69331cbb)(this.getClient);
            }
        },
        {
            key: "provideDefinitions",
            value: function provideDefinitions() {
                if (atom.config.get("atom-typescript-updated").disableAtomIdeDefinitions) return;
                return (0, $bc2cbd8768a1aa8b$export$a9ca9b3a8941e92e)(this.getClient);
            }
        },
        {
            key: "provideCodeHighlight",
            value: function provideCodeHighlight() {
                if (atom.config.get("atom-typescript-updated").preferBuiltinOccurrenceHighlight) return;
                this.occurrenceManager.dispose();
                return (0, $acdd57131752f306$export$6413bc8b6e281ffa)(this.getClient);
            }
        },
        {
            key: "subscribeEditors",
            value: function subscribeEditors() {
                var _this = this;
                this.subscriptions.add(atom.workspace.observeTextEditors(function(editor) {
                    _this.typescriptPaneFactory(editor);
                }), atom.workspace.onDidChangeActiveTextEditor(function(ed) {
                    if (ed && (0, $47ae2d5cb2e495d2$export$3aecee58e23ede2c)(ed)) {
                        (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.statusPanel.show());
                        var tep = (0, $ffa8edc637117fbb$export$a0bbaae59860162e).lookupPane(ed);
                        if (tep) tep.didActivate();
                    } else (0, $e61b31fac60530e8$export$8080b7556d9d6445)(_this.statusPanel.hide());
                }));
            }
        }
    ]);
    return PluginManager;
}();


var $4e74d3c17e31b8db$var$pluginManager;
function $4e74d3c17e31b8db$export$234c45b355edd85b(state) {
    (0, $j0dGC$etch).setScheduler(atom.views);
    $4e74d3c17e31b8db$var$pluginManager = new (0, $c495706121dd3643$export$f2c0a16002429d72)(state);
    setImmediate(function() {
        return (0, $e61b31fac60530e8$export$8080b7556d9d6445)($4e74d3c17e31b8db$var$checkAndInstallDependencies());
    });
}
function $4e74d3c17e31b8db$var$checkAndInstallDependencies() {
    return (/*#__PURE__*/ 0, /*#__PURE__*/ $j0dGC$_)(function() {
        var packagesProvidingUIServices;
        return (0, $j0dGC$_1)(this, function(_state) {
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
                        $j0dGC$install("atom-typescript-updated", true)
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
function $4e74d3c17e31b8db$export$e96c1edfdaf2d1db() {
    if ($4e74d3c17e31b8db$var$pluginManager) $4e74d3c17e31b8db$var$pluginManager.destroy();
    $4e74d3c17e31b8db$var$pluginManager = undefined;
}
function $4e74d3c17e31b8db$export$dfdc1655ccc5b9cb() {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.serialize();
    else return undefined;
}
function $4e74d3c17e31b8db$export$a44ae7a0ffe32de(serialized) {
    return (0, $cea6b8bc91af2731$export$a3a95952d8506109).create(serialized.data);
}
function $4e74d3c17e31b8db$export$7513da91a6067379(register) {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.consumeLinter(register);
}
function $4e74d3c17e31b8db$export$a51a2902ac3affa7(statusBar) {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.consumeStatusBar(statusBar);
}
function $4e74d3c17e31b8db$export$ca7950270ff61d66(datatipService) {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.consumeDatatipService(datatipService);
}
function $4e74d3c17e31b8db$export$3ceee8b9bf304299(registry) {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.consumeSigHelpService(registry);
}
function $4e74d3c17e31b8db$export$29fa66c1419daddc(busySignalService) {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.consumeBusySignal(busySignalService);
}
function $4e74d3c17e31b8db$export$71db97b929e8341b() {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.provideAutocomplete();
}
function $4e74d3c17e31b8db$export$3781320452d1dce8() {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.provideIntentions();
}
function $4e74d3c17e31b8db$export$6f2bf0ac3e405d7b() {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.provideIntentionsHighlight();
}
function $4e74d3c17e31b8db$export$7990dc4c350e7387() {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.provideCodeActions();
}
function $4e74d3c17e31b8db$export$1c7ef754fc81a243() {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.provideHyperclick();
}
function $4e74d3c17e31b8db$export$e32ae1c830f39f16() {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.provideReferences();
}
function $4e74d3c17e31b8db$export$cec97b3152a9a2a4() {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.provideOutlines();
}
function $4e74d3c17e31b8db$export$60b479b2c6dcce92() {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.provideDefinitions();
}
function $4e74d3c17e31b8db$export$67b00a253126c08e() {
    if ($4e74d3c17e31b8db$var$pluginManager) return $4e74d3c17e31b8db$var$pluginManager.provideCodeHighlight();
}


export {$4e74d3c17e31b8db$export$234c45b355edd85b as activate, $4e74d3c17e31b8db$export$e96c1edfdaf2d1db as deactivate, $4e74d3c17e31b8db$export$dfdc1655ccc5b9cb as serialize, $4e74d3c17e31b8db$export$a44ae7a0ffe32de as deserializeSemanticView, $4e74d3c17e31b8db$export$7513da91a6067379 as consumeLinter, $4e74d3c17e31b8db$export$a51a2902ac3affa7 as consumeStatusBar, $4e74d3c17e31b8db$export$ca7950270ff61d66 as consumeDatatipService, $4e74d3c17e31b8db$export$3ceee8b9bf304299 as consumeSignatureHelp, $4e74d3c17e31b8db$export$29fa66c1419daddc as consumeBusySignal, $4e74d3c17e31b8db$export$71db97b929e8341b as provideAutocomplete, $4e74d3c17e31b8db$export$3781320452d1dce8 as provideIntentions, $4e74d3c17e31b8db$export$6f2bf0ac3e405d7b as provideIntentionsHighlight, $4e74d3c17e31b8db$export$7990dc4c350e7387 as provideCodeActions, $4e74d3c17e31b8db$export$1c7ef754fc81a243 as provideHyperclick, $4e74d3c17e31b8db$export$e32ae1c830f39f16 as provideReferences, $4e74d3c17e31b8db$export$cec97b3152a9a2a4 as provideOutlines, $4e74d3c17e31b8db$export$60b479b2c6dcce92 as provideDefinitions, $4e74d3c17e31b8db$export$67b00a253126c08e as provideCodeHighlight};
//# sourceMappingURL=main.js.map
