import * as _p from 'pareto-core-serializer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/typescript_light/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const String_Literal: _i_signatures._T_String_Literal = ($, $p) => _i_serialize.Document(
    _i_marshall.String_Literal(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Statements: _i_signatures._T_Statements = ($, $p) => _i_serialize.Document(
    _i_marshall.Statements(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Expression: _i_signatures._T_Expression = ($, $p) => _i_serialize.Document(
    _i_marshall.Expression(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Type: _i_signatures._T_Type = ($, $p) => _i_serialize.Document(
    _i_marshall.Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Group: _i_signatures._T_Group = ($, $p) => _i_serialize.Document(
    _i_marshall.Group(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Block: _i_signatures._T_Block = ($, $p) => _i_serialize.Document(
    _i_marshall.Block(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Group_Part: _i_signatures._T_Group_Part = ($, $p) => _i_serialize.Document(
    _i_marshall.Group_Part(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Block_Part: _i_signatures._T_Block_Part = ($, $p) => _i_serialize.Document(
    _i_marshall.Block_Part(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Lines: _i_signatures._T_Lines = ($, $p) => _i_serialize.Document(
    _i_marshall.Lines(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Directory: _i_signatures._T_Directory = ($, $p) => _i_serialize.Document(
    _i_marshall.Directory(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
