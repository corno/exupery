import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { Signature } from "../../../../interface/algorithms/operations/impure/text/serialize_backticked_string"


export const $$ = ($: string): string => {
    return _ea.build_text(($i) => {
        _ea.text_to_character_list($).__for_each(($) => {
            if ($ === 36) { // $
                $i['add snippet'](`$$`)
            } else if ($ === 95) { // _
                $i['add snippet'](`$_`)
            } else if ($ === 32) { // space
                $i['add snippet'](`_`)    
            } else {
                $i['add character']($)
            }
        })
    })
}