

import * as s_in from "../../generated/interface/schemas/implementation/resolved"
import * as s_out from "pareto-fountain-pen/dist/generated/interface/schemas/lines/unconstrained"

import * as _interface from "../interface/typescript"

import * as t_fountain_pen_block_to_semi_lines from "pareto-fountain-pen/dist/transformations/block/semi_lines"
import * as t_fountain_pen_semi_lines_to_lines from "pareto-fountain-pen/dist/transformations/semi_lines/lines"

import * as _typescript from "./typescript"

export const Module_Set = (
    $: s_in.Module_Set,
    $p: {
        'indentation': string
        'phase': 'development' | 'production'
    }
): s_out.Directory => t_fountain_pen_semi_lines_to_lines.Directory(
    t_fountain_pen_block_to_semi_lines.Directory(_typescript.Module_Set(
        $,
        {
            'phase': $p.phase
        }
    )),
    {
        'indentation': $p.indentation,
    }
)