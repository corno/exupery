import * as _p from 'pareto-core-serializer'
import * as _pi from 'pareto-core-interface'

export type Signature = _pi.Text_Serializer

//dependencies
import { $$ as s_escaped_character } from "pareto-standard-operations/dist/implementation/manual/primitives/text/serializers/escaped_character"

export const $$: Signature = ($) => '"'
    + s_escaped_character(
        $,
        {
            'character code': 34, // "
            'escape character code': 92, // \
        }
    )
    + '"'