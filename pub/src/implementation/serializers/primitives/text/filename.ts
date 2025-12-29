import * as _pt from 'pareto-core-serializer'
import * as _pinternals from 'pareto-core-internals'

export const $$ = ($: string): string => {
    return _pt.build_text(($i) => {
        _pinternals.text_to_character_list($).__for_each(($) => {
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