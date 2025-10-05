import * as _ea from 'exupery-core-alg'

import { $$ as op_to_character_list } from "exupery-standard-library/dist/text/to_character_list"
import { $$ as op_join_list_of_texts } from "pareto-standard-operations/dist/pure/text/join_list_of_texts"
import { $$ as op_integer_serialize } from "exupery-standard-library/dist/integer/serialize"

export const $$ = ($: string[]): string => {
    const the_string = op_join_list_of_texts(_ea.array_literal($))
    if (the_string === "") {
        return "_empty"
    }
    const reserved_keywords = _ea.dictionary_literal({
        //Reserved Words
        "arguments": null,
        "break": null,
        "case": null,
        "catch": null,
        "class": null,
        "const": null,
        "continue": null,
        "debugger": null,
        "default": null,
        "delete": null,
        "do": null,
        "else": null,
        "enum": null,
        "export": null,
        "extends": null,
        "false": null,
        "finally": null,
        "for": null,
        "function": null,
        "if": null,
        "import": null,
        "in": null,
        "instanceof": null,
        "new": null,
        "null": null,
        "return": null,
        "super": null,
        "switch": null,
        "this": null,
        "throw": null,
        "true": null,
        "try": null,
        "typeof": null,
        "var": null,
        "void": null,
        "while": null,
        "with": null,
        //Strict Mode Reserved Words
        "as": null,
        "implements": null,
        "interface": null,
        "let": null,
        "package": null,
        "private": null,
        "protected": null,
        "public": null,
        "static": null,
        "yield": null,
        //Contextual Keywords
        "any": null,
        "boolean": null,
        "constructor": null,
        "declare": null,
        "get": null,
        "module": null,
        "require": null,
        "number": null,
        "set": null,
        "string": null,
        "symbol": null,
        "type": null,
        "from": null,
        "of": null,
        //???
        "unknown": null,
        "object": null,
        "never": null,
    })
    if (reserved_keywords.__get_entry(the_string).transform(
        () => true,
        () => false,
    )) {
        return _ea.build_text(($i) => {
            $i['add snippet']("_")
            $i['add snippet'](the_string)
        })
    }

    return _ea.build_text(($i) => {
        const characters = op_to_character_list(the_string)
        const length = characters.__get_length()

        let position = 0

        const consume_character = () => {
            position += 1
        }

        const get_current_character = (): null | number => {
            if (position === length) {
                return null
            }
            return characters.__get_element_at(position).transform(
                ($) => $,
                () => null
            )
        }

        while (true) {
            const current_character = get_current_character()
            if (current_character === null) {
                return
            }

            if (position === 0) {
                //first character
                if (current_character >= 48 && current_character <= 57) {
                    //begins with 0-9

                    $i['add snippet']("_")
                    $i['add character'](current_character)
                }
            }
            if (false
                || (current_character >= 48 && current_character <= 57) //0-9
                || (current_character >= 65 && current_character <= 90) //A-Z
                || (current_character >= 97 && current_character <= 122)//a-z
            ) {
                //normal character
                $i['add character'](current_character)
                consume_character()
            } else {
                const consume_and_add = ($: string) => {
                    consume_character()
                    $i['add snippet']($)
                }
                switch (current_character) {
                    case 32: consume_and_add("_"); break; // Space
                    case 33: consume_and_add("$ex_"); break; // Exclamation (!)
                    case 34: consume_and_add("$qo_"); break; // Double Quote (")
                    case 35: consume_and_add("$ha_"); break; // Hash (#)
                    case 36: consume_and_add("$$_"); break; // Dollar ($)
                    case 37: consume_and_add("$pt_"); break; // Percent (%)
                    case 38: consume_and_add("$am_"); break; // Ampersand (&)
                    case 39: consume_and_add("$ap_"); break; // Apostrophe (')
                    case 40: consume_and_add("$po_"); break; // Open Parenthesis (()
                    case 41: consume_and_add("$pc_"); break; // Close Parenthesis ())
                    case 42: consume_and_add("$sr_"); break; // Asterisk (*)
                    case 43: consume_and_add("$pl_"); break; // Plus (+)
                    case 44: consume_and_add("$cm_"); break; // Comma (,)
                    case 45: consume_and_add("$mi_"); break; // Minus (-)
                    case 46: consume_and_add("$pe_"); break; // Period (.)
                    case 47: consume_and_add("$sl_"); break; // Slash (/)
                    case 58: consume_and_add("$cl_"); break; // Colon (:)
                    case 59: consume_and_add("$sc_"); break; // Semicolon (;)
                    case 60: consume_and_add("$st_"); break; // Less Than (<)
                    case 61: consume_and_add("$eq_"); break; // Equals (=)
                    case 62: consume_and_add("$gt_"); break; // Greater Than (>)
                    case 63: consume_and_add("$qu_"); break; // Question Mark (?)
                    case 64: consume_and_add("$at_"); break; // At (@)
                    case 91: consume_and_add("$bo_"); break; // Open Bracket ([)
                    case 92: consume_and_add("$bs_"); break; // Backslash (\)
                    case 93: consume_and_add("$bc_"); break; // Close Bracket (])
                    case 94: consume_and_add("$ca_"); break; // Caret (^)
                    case 95: consume_and_add("$_"); break; // Underscore (_)
                    case 96: consume_and_add("$bt_"); break; // Backtick (`)
                    case 123: consume_and_add("$co_"); break; // Open Curly Brace ({)
                    case 124: consume_and_add("$vb_"); break; // Vertical Bar (|)
                    case 125: consume_and_add("$cc_"); break; // Close Curly Brace (})
                    case 126: consume_and_add("$ti_"); break; // Tilde (~)
                    default: _ea.panic("unhandled character: \"", op_integer_serialize(current_character), "\"");
                }
            }
        }
    })
}