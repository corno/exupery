
import * as s_in from "../../generated/interface/schemas/interface/resolved"


import * as t_fountain_pen_block_to_semi_lines from "pareto-fountain-pen/dist/transformations/block/semi_lines"
import * as t_fountain_pen_semi_lines_to_lines from "pareto-fountain-pen/dist/transformations/semi_lines/lines"

import * as _typescript from "./typescript"

import { $$ as x } from "../typescript/operations/create_identifier"
import { impure } from "pareto-standard-operations"
import { pure } from "pareto-standard-operations"

const op = {
    // 'join lists': impure.list['join texts'],
    'dictionary to list, sorted by code point': impure.dictionary['to list, sorted by code point'],
    'create valid file name': impure.text['create valid file name'],
    'repeat text': impure.text.repeat,
    'join list of texts': pure.text['join list of texts'],
    'flatten list': pure.list.flatten,
    'flatten dictionary': pure.dictionary.flatten,
    'create identifier': x,
}


export const Module_Set = (
    $: s_in.Module_Set,
    $p: {
        'indentation': string
    }
) => t_fountain_pen_semi_lines_to_lines.Directory(
    t_fountain_pen_block_to_semi_lines.Directory(_typescript.Module_Set($)),
    {
        'indentation': $p.indentation,
    }
)