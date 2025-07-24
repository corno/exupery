import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/poormans_parser"

// **** TYPES

export type _T_Expression<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['array literal', _i_core._T_List<G_Source, _T_Expression<G_Source>>]
    | readonly ['arrow function', {
        readonly 'parameters': _i_core._T_List<G_Source, {
            readonly 'name': string
            readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
        }>
        readonly 'return type': _pt.Optional_Value<_T_Type<G_Source>>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['block', _T_Statements<G_Source>]
            | readonly ['expression', _T_Expression<G_Source>]
        >
    }]
    | readonly ['call', {
        readonly 'arguments': _i_core._T_List<G_Source, _T_Expression<G_Source>>
        readonly 'function selection': _T_Expression<G_Source>
    }]
    | readonly ['false', null]
    | readonly ['null', null]
    | readonly ['number literal', number]
    | readonly ['object literal', {
        readonly 'properties': _i_core._T_Dictionary<G_Source, _T_Expression<G_Source>>
    }]
    | readonly ['string literal', _T_String_Literal<G_Source>]
    | readonly ['true', null]
>

export type _T_Statements<G_Source> = _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
    | readonly ['import', {
        readonly 'from': string
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['named', {
                readonly 'specifiers': _i_core._T_Dictionary<G_Source, string>
            }]
            | readonly ['namespace', string]
        >
    }]
    | readonly ['module declaration', {
        readonly 'block': _T_Statements<G_Source>
        readonly 'export': boolean
        readonly 'name': string
    }]
    | readonly ['type alias declaration', {
        readonly 'export': boolean
        readonly 'name': string
        readonly 'parameters': _i_core._T_List<G_Source, string>
        readonly 'type': _T_Type<G_Source>
    }]
    | readonly ['variable', {
        readonly 'const': boolean
        readonly 'export': boolean
        readonly 'expression': _pt.Optional_Value<_T_Expression<G_Source>>
        readonly 'name': string
        readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
    }]
>>

export type _T_String_Literal<G_Source> = {
    readonly 'delimiter': _i_core._T_State_Group<G_Source, 
        | readonly ['apostrophe', null]
        | readonly ['quote', null]
    >
    readonly 'value': string
}

export type _T_Type<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['boolean', null]
    | readonly ['function', {
        readonly 'parameters': _i_core._T_List<G_Source, {
            readonly 'name': string
            readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
        }>
        readonly 'return': _T_Type<G_Source>
        readonly 'type parameters': _i_core._T_List<G_Source, string>
    }]
    | readonly ['literal type', _T_String_Literal<G_Source>]
    | readonly ['null', null]
    | readonly ['number', null]
    | readonly ['string', null]
    | readonly ['tuple', {
        readonly 'elements': _i_core._T_List<G_Source, _T_Type<G_Source>>
        readonly 'readonly': boolean
    }]
    | readonly ['type literal', {
        readonly 'properties': _i_core._T_Dictionary<G_Source, {
            readonly 'readonly': boolean
            readonly 'type': _T_Type<G_Source>
        }>
    }]
    | readonly ['type reference', {
        readonly 'start': string
        readonly 'tail': _i_core._T_List<G_Source, string>
        readonly 'type arguments': _i_core._T_List<G_Source, _T_Type<G_Source>>
    }]
    | readonly ['union', _i_core._T_List<G_Source, _T_Type<G_Source>>]
    | readonly ['void', null]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Expression<G_Source> = _T_Expression<G_Source>

export type Statements<G_Source> = _T_Statements<G_Source>

export type String_Literal<G_Source> = _T_String_Literal<G_Source>

export type Type<G_Source> = _T_Type<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Expression {
    
    export namespace SG {
        
        export namespace array_literal {
            
            export namespace L {
            }
            export type L<G_Source> = _T_Expression<G_Source>
        }
        export type array_literal<G_Source> = _i_core._T_List<G_Source, _T_Expression<G_Source>>
        
        export namespace arrow_function {
            
            export namespace parameters {
                
                export namespace L {
                    export type name<G_Source> = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O<G_Source> = _T_Type<G_Source>
                    }
                    export type _type<G_Source> = _pt.Optional_Value<_T_Type<G_Source>>
                }
                export type L<G_Source> = {
                    readonly 'name': string
                    readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
                }
            }
            export type parameters<G_Source> = _i_core._T_List<G_Source, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }>
            
            export namespace return_type {
                
                export namespace O {
                }
                export type O<G_Source> = _T_Type<G_Source>
            }
            export type return_type<G_Source> = _pt.Optional_Value<_T_Type<G_Source>>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace block {
                    }
                    export type block<G_Source> = _T_Statements<G_Source>
                    
                    export namespace expression {
                    }
                    export type expression<G_Source> = _T_Expression<G_Source>
                }
                export type SG<G_Source> = 
                    | readonly ['block', _T_Statements<G_Source>]
                    | readonly ['expression', _T_Expression<G_Source>]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['block', _T_Statements<G_Source>]
                | readonly ['expression', _T_Expression<G_Source>]
            >
        }
        export type arrow_function<G_Source> = {
            readonly 'parameters': _i_core._T_List<G_Source, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }>
            readonly 'return type': _pt.Optional_Value<_T_Type<G_Source>>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['block', _T_Statements<G_Source>]
                | readonly ['expression', _T_Expression<G_Source>]
            >
        }
        
        export namespace call {
            
            export namespace _arguments {
                
                export namespace L {
                }
                export type L<G_Source> = _T_Expression<G_Source>
            }
            export type _arguments<G_Source> = _i_core._T_List<G_Source, _T_Expression<G_Source>>
            
            export namespace function_selection {
            }
            export type function_selection<G_Source> = _T_Expression<G_Source>
        }
        export type call<G_Source> = {
            readonly 'arguments': _i_core._T_List<G_Source, _T_Expression<G_Source>>
            readonly 'function selection': _T_Expression<G_Source>
        }
        export type _false<G_Source> = null
        export type _null<G_Source> = null
        export type number_literal<G_Source> = number
        
        export namespace object_literal {
            
            export namespace properties {
                
                export namespace D {
                }
                export type D<G_Source> = _T_Expression<G_Source>
            }
            export type properties<G_Source> = _i_core._T_Dictionary<G_Source, _T_Expression<G_Source>>
        }
        export type object_literal<G_Source> = {
            readonly 'properties': _i_core._T_Dictionary<G_Source, _T_Expression<G_Source>>
        }
        
        export namespace string_literal {
        }
        export type string_literal<G_Source> = _T_String_Literal<G_Source>
        export type _true<G_Source> = null
    }
    export type SG<G_Source> = 
        | readonly ['array literal', _i_core._T_List<G_Source, _T_Expression<G_Source>>]
        | readonly ['arrow function', {
            readonly 'parameters': _i_core._T_List<G_Source, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }>
            readonly 'return type': _pt.Optional_Value<_T_Type<G_Source>>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['block', _T_Statements<G_Source>]
                | readonly ['expression', _T_Expression<G_Source>]
            >
        }]
        | readonly ['call', {
            readonly 'arguments': _i_core._T_List<G_Source, _T_Expression<G_Source>>
            readonly 'function selection': _T_Expression<G_Source>
        }]
        | readonly ['false', null]
        | readonly ['null', null]
        | readonly ['number literal', number]
        | readonly ['object literal', {
            readonly 'properties': _i_core._T_Dictionary<G_Source, _T_Expression<G_Source>>
        }]
        | readonly ['string literal', _T_String_Literal<G_Source>]
        | readonly ['true', null]
}

export namespace _T_Statements {
    
    export namespace L {
        
        export namespace SG {
            
            export namespace _import {
                export type _from<G_Source> = string
                
                export namespace _type {
                    
                    export namespace SG {
                        
                        export namespace named {
                            
                            export namespace specifiers {
                                export type D<G_Source> = string
                            }
                            export type specifiers<G_Source> = _i_core._T_Dictionary<G_Source, string>
                        }
                        export type named<G_Source> = {
                            readonly 'specifiers': _i_core._T_Dictionary<G_Source, string>
                        }
                        export type namespace<G_Source> = string
                    }
                    export type SG<G_Source> = 
                        | readonly ['named', {
                            readonly 'specifiers': _i_core._T_Dictionary<G_Source, string>
                        }]
                        | readonly ['namespace', string]
                }
                export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                    | readonly ['named', {
                        readonly 'specifiers': _i_core._T_Dictionary<G_Source, string>
                    }]
                    | readonly ['namespace', string]
                >
            }
            export type _import<G_Source> = {
                readonly 'from': string
                readonly 'type': _i_core._T_State_Group<G_Source, 
                    | readonly ['named', {
                        readonly 'specifiers': _i_core._T_Dictionary<G_Source, string>
                    }]
                    | readonly ['namespace', string]
                >
            }
            
            export namespace module_declaration {
                
                export namespace block {
                }
                export type block<G_Source> = _T_Statements<G_Source>
                export type _export<G_Source> = boolean
                export type name<G_Source> = string
            }
            export type module_declaration<G_Source> = {
                readonly 'block': _T_Statements<G_Source>
                readonly 'export': boolean
                readonly 'name': string
            }
            
            export namespace type_alias_declaration {
                export type _export<G_Source> = boolean
                export type name<G_Source> = string
                
                export namespace parameters {
                    export type L<G_Source> = string
                }
                export type parameters<G_Source> = _i_core._T_List<G_Source, string>
                
                export namespace _type {
                }
                export type _type<G_Source> = _T_Type<G_Source>
            }
            export type type_alias_declaration<G_Source> = {
                readonly 'export': boolean
                readonly 'name': string
                readonly 'parameters': _i_core._T_List<G_Source, string>
                readonly 'type': _T_Type<G_Source>
            }
            
            export namespace variable {
                export type _const<G_Source> = boolean
                export type _export<G_Source> = boolean
                
                export namespace expression {
                    
                    export namespace O {
                    }
                    export type O<G_Source> = _T_Expression<G_Source>
                }
                export type expression<G_Source> = _pt.Optional_Value<_T_Expression<G_Source>>
                export type name<G_Source> = string
                
                export namespace _type {
                    
                    export namespace O {
                    }
                    export type O<G_Source> = _T_Type<G_Source>
                }
                export type _type<G_Source> = _pt.Optional_Value<_T_Type<G_Source>>
            }
            export type variable<G_Source> = {
                readonly 'const': boolean
                readonly 'export': boolean
                readonly 'expression': _pt.Optional_Value<_T_Expression<G_Source>>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }
        }
        export type SG<G_Source> = 
            | readonly ['import', {
                readonly 'from': string
                readonly 'type': _i_core._T_State_Group<G_Source, 
                    | readonly ['named', {
                        readonly 'specifiers': _i_core._T_Dictionary<G_Source, string>
                    }]
                    | readonly ['namespace', string]
                >
            }]
            | readonly ['module declaration', {
                readonly 'block': _T_Statements<G_Source>
                readonly 'export': boolean
                readonly 'name': string
            }]
            | readonly ['type alias declaration', {
                readonly 'export': boolean
                readonly 'name': string
                readonly 'parameters': _i_core._T_List<G_Source, string>
                readonly 'type': _T_Type<G_Source>
            }]
            | readonly ['variable', {
                readonly 'const': boolean
                readonly 'export': boolean
                readonly 'expression': _pt.Optional_Value<_T_Expression<G_Source>>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }]
    }
    export type L<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['import', {
            readonly 'from': string
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['named', {
                    readonly 'specifiers': _i_core._T_Dictionary<G_Source, string>
                }]
                | readonly ['namespace', string]
            >
        }]
        | readonly ['module declaration', {
            readonly 'block': _T_Statements<G_Source>
            readonly 'export': boolean
            readonly 'name': string
        }]
        | readonly ['type alias declaration', {
            readonly 'export': boolean
            readonly 'name': string
            readonly 'parameters': _i_core._T_List<G_Source, string>
            readonly 'type': _T_Type<G_Source>
        }]
        | readonly ['variable', {
            readonly 'const': boolean
            readonly 'export': boolean
            readonly 'expression': _pt.Optional_Value<_T_Expression<G_Source>>
            readonly 'name': string
            readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
        }]
    >
}

export namespace _T_String_Literal {
    
    export namespace delimiter {
        
        export namespace SG {
            export type apostrophe<G_Source> = null
            export type quote<G_Source> = null
        }
        export type SG<G_Source> = 
            | readonly ['apostrophe', null]
            | readonly ['quote', null]
    }
    export type delimiter<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['apostrophe', null]
        | readonly ['quote', null]
    >
    export type value<G_Source> = string
}

export namespace _T_Type {
    
    export namespace SG {
        export type _boolean<G_Source> = null
        
        export namespace _function {
            
            export namespace parameters {
                
                export namespace L {
                    export type name<G_Source> = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O<G_Source> = _T_Type<G_Source>
                    }
                    export type _type<G_Source> = _pt.Optional_Value<_T_Type<G_Source>>
                }
                export type L<G_Source> = {
                    readonly 'name': string
                    readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
                }
            }
            export type parameters<G_Source> = _i_core._T_List<G_Source, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }>
            
            export namespace _return {
            }
            export type _return<G_Source> = _T_Type<G_Source>
            
            export namespace type_parameters {
                export type L<G_Source> = string
            }
            export type type_parameters<G_Source> = _i_core._T_List<G_Source, string>
        }
        export type _function<G_Source> = {
            readonly 'parameters': _i_core._T_List<G_Source, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }>
            readonly 'return': _T_Type<G_Source>
            readonly 'type parameters': _i_core._T_List<G_Source, string>
        }
        
        export namespace literal_type {
        }
        export type literal_type<G_Source> = _T_String_Literal<G_Source>
        export type _null<G_Source> = null
        export type _number<G_Source> = null
        export type _string<G_Source> = null
        
        export namespace tuple {
            
            export namespace elements {
                
                export namespace L {
                }
                export type L<G_Source> = _T_Type<G_Source>
            }
            export type elements<G_Source> = _i_core._T_List<G_Source, _T_Type<G_Source>>
            export type readonly<G_Source> = boolean
        }
        export type tuple<G_Source> = {
            readonly 'elements': _i_core._T_List<G_Source, _T_Type<G_Source>>
            readonly 'readonly': boolean
        }
        
        export namespace type_literal {
            
            export namespace properties {
                
                export namespace D {
                    export type readonly<G_Source> = boolean
                    
                    export namespace _type {
                    }
                    export type _type<G_Source> = _T_Type<G_Source>
                }
                export type D<G_Source> = {
                    readonly 'readonly': boolean
                    readonly 'type': _T_Type<G_Source>
                }
            }
            export type properties<G_Source> = _i_core._T_Dictionary<G_Source, {
                readonly 'readonly': boolean
                readonly 'type': _T_Type<G_Source>
            }>
        }
        export type type_literal<G_Source> = {
            readonly 'properties': _i_core._T_Dictionary<G_Source, {
                readonly 'readonly': boolean
                readonly 'type': _T_Type<G_Source>
            }>
        }
        
        export namespace type_reference {
            export type start<G_Source> = string
            
            export namespace tail {
                export type L<G_Source> = string
            }
            export type tail<G_Source> = _i_core._T_List<G_Source, string>
            
            export namespace type_arguments {
                
                export namespace L {
                }
                export type L<G_Source> = _T_Type<G_Source>
            }
            export type type_arguments<G_Source> = _i_core._T_List<G_Source, _T_Type<G_Source>>
        }
        export type type_reference<G_Source> = {
            readonly 'start': string
            readonly 'tail': _i_core._T_List<G_Source, string>
            readonly 'type arguments': _i_core._T_List<G_Source, _T_Type<G_Source>>
        }
        
        export namespace union {
            
            export namespace L {
            }
            export type L<G_Source> = _T_Type<G_Source>
        }
        export type union<G_Source> = _i_core._T_List<G_Source, _T_Type<G_Source>>
        export type _void<G_Source> = null
    }
    export type SG<G_Source> = 
        | readonly ['boolean', null]
        | readonly ['function', {
            readonly 'parameters': _i_core._T_List<G_Source, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }>
            readonly 'return': _T_Type<G_Source>
            readonly 'type parameters': _i_core._T_List<G_Source, string>
        }]
        | readonly ['literal type', _T_String_Literal<G_Source>]
        | readonly ['null', null]
        | readonly ['number', null]
        | readonly ['string', null]
        | readonly ['tuple', {
            readonly 'elements': _i_core._T_List<G_Source, _T_Type<G_Source>>
            readonly 'readonly': boolean
        }]
        | readonly ['type literal', {
            readonly 'properties': _i_core._T_Dictionary<G_Source, {
                readonly 'readonly': boolean
                readonly 'type': _T_Type<G_Source>
            }>
        }]
        | readonly ['type reference', {
            readonly 'start': string
            readonly 'tail': _i_core._T_List<G_Source, string>
            readonly 'type arguments': _i_core._T_List<G_Source, _T_Type<G_Source>>
        }]
        | readonly ['union', _i_core._T_List<G_Source, _T_Type<G_Source>>]
        | readonly ['void', null]
}

// *** ALIASES FOR NESTED TYPES

export namespace Expression {
    
    export namespace SG {
        
        export namespace array_literal {
            
            export namespace L {
            }
            export type L<G_Source> = _T_Expression<G_Source>
        }
        export type array_literal<G_Source> = _i_core._T_List<G_Source, _T_Expression<G_Source>>
        
        export namespace arrow_function {
            
            export namespace parameters {
                
                export namespace L {
                    export type name<G_Source> = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O<G_Source> = _T_Type<G_Source>
                    }
                    export type _type<G_Source> = _pt.Optional_Value<_T_Type<G_Source>>
                }
                export type L<G_Source> = {
                    readonly 'name': string
                    readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
                }
            }
            export type parameters<G_Source> = _i_core._T_List<G_Source, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }>
            
            export namespace return_type {
                
                export namespace O {
                }
                export type O<G_Source> = _T_Type<G_Source>
            }
            export type return_type<G_Source> = _pt.Optional_Value<_T_Type<G_Source>>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace block {
                    }
                    export type block<G_Source> = _T_Statements<G_Source>
                    
                    export namespace expression {
                    }
                    export type expression<G_Source> = _T_Expression<G_Source>
                }
                export type SG<G_Source> = 
                    | readonly ['block', _T_Statements<G_Source>]
                    | readonly ['expression', _T_Expression<G_Source>]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['block', _T_Statements<G_Source>]
                | readonly ['expression', _T_Expression<G_Source>]
            >
        }
        export type arrow_function<G_Source> = {
            readonly 'parameters': _i_core._T_List<G_Source, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }>
            readonly 'return type': _pt.Optional_Value<_T_Type<G_Source>>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['block', _T_Statements<G_Source>]
                | readonly ['expression', _T_Expression<G_Source>]
            >
        }
        
        export namespace call {
            
            export namespace _arguments {
                
                export namespace L {
                }
                export type L<G_Source> = _T_Expression<G_Source>
            }
            export type _arguments<G_Source> = _i_core._T_List<G_Source, _T_Expression<G_Source>>
            
            export namespace function_selection {
            }
            export type function_selection<G_Source> = _T_Expression<G_Source>
        }
        export type call<G_Source> = {
            readonly 'arguments': _i_core._T_List<G_Source, _T_Expression<G_Source>>
            readonly 'function selection': _T_Expression<G_Source>
        }
        export type _false<G_Source> = null
        export type _null<G_Source> = null
        export type number_literal<G_Source> = number
        
        export namespace object_literal {
            
            export namespace properties {
                
                export namespace D {
                }
                export type D<G_Source> = _T_Expression<G_Source>
            }
            export type properties<G_Source> = _i_core._T_Dictionary<G_Source, _T_Expression<G_Source>>
        }
        export type object_literal<G_Source> = {
            readonly 'properties': _i_core._T_Dictionary<G_Source, _T_Expression<G_Source>>
        }
        
        export namespace string_literal {
        }
        export type string_literal<G_Source> = _T_String_Literal<G_Source>
        export type _true<G_Source> = null
    }
    export type SG<G_Source> = 
        | readonly ['array literal', _i_core._T_List<G_Source, _T_Expression<G_Source>>]
        | readonly ['arrow function', {
            readonly 'parameters': _i_core._T_List<G_Source, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }>
            readonly 'return type': _pt.Optional_Value<_T_Type<G_Source>>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['block', _T_Statements<G_Source>]
                | readonly ['expression', _T_Expression<G_Source>]
            >
        }]
        | readonly ['call', {
            readonly 'arguments': _i_core._T_List<G_Source, _T_Expression<G_Source>>
            readonly 'function selection': _T_Expression<G_Source>
        }]
        | readonly ['false', null]
        | readonly ['null', null]
        | readonly ['number literal', number]
        | readonly ['object literal', {
            readonly 'properties': _i_core._T_Dictionary<G_Source, _T_Expression<G_Source>>
        }]
        | readonly ['string literal', _T_String_Literal<G_Source>]
        | readonly ['true', null]
}

export namespace Statements {
    
    export namespace L {
        
        export namespace SG {
            
            export namespace _import {
                export type _from<G_Source> = string
                
                export namespace _type {
                    
                    export namespace SG {
                        
                        export namespace named {
                            
                            export namespace specifiers {
                                export type D<G_Source> = string
                            }
                            export type specifiers<G_Source> = _i_core._T_Dictionary<G_Source, string>
                        }
                        export type named<G_Source> = {
                            readonly 'specifiers': _i_core._T_Dictionary<G_Source, string>
                        }
                        export type namespace<G_Source> = string
                    }
                    export type SG<G_Source> = 
                        | readonly ['named', {
                            readonly 'specifiers': _i_core._T_Dictionary<G_Source, string>
                        }]
                        | readonly ['namespace', string]
                }
                export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                    | readonly ['named', {
                        readonly 'specifiers': _i_core._T_Dictionary<G_Source, string>
                    }]
                    | readonly ['namespace', string]
                >
            }
            export type _import<G_Source> = {
                readonly 'from': string
                readonly 'type': _i_core._T_State_Group<G_Source, 
                    | readonly ['named', {
                        readonly 'specifiers': _i_core._T_Dictionary<G_Source, string>
                    }]
                    | readonly ['namespace', string]
                >
            }
            
            export namespace module_declaration {
                
                export namespace block {
                }
                export type block<G_Source> = _T_Statements<G_Source>
                export type _export<G_Source> = boolean
                export type name<G_Source> = string
            }
            export type module_declaration<G_Source> = {
                readonly 'block': _T_Statements<G_Source>
                readonly 'export': boolean
                readonly 'name': string
            }
            
            export namespace type_alias_declaration {
                export type _export<G_Source> = boolean
                export type name<G_Source> = string
                
                export namespace parameters {
                    export type L<G_Source> = string
                }
                export type parameters<G_Source> = _i_core._T_List<G_Source, string>
                
                export namespace _type {
                }
                export type _type<G_Source> = _T_Type<G_Source>
            }
            export type type_alias_declaration<G_Source> = {
                readonly 'export': boolean
                readonly 'name': string
                readonly 'parameters': _i_core._T_List<G_Source, string>
                readonly 'type': _T_Type<G_Source>
            }
            
            export namespace variable {
                export type _const<G_Source> = boolean
                export type _export<G_Source> = boolean
                
                export namespace expression {
                    
                    export namespace O {
                    }
                    export type O<G_Source> = _T_Expression<G_Source>
                }
                export type expression<G_Source> = _pt.Optional_Value<_T_Expression<G_Source>>
                export type name<G_Source> = string
                
                export namespace _type {
                    
                    export namespace O {
                    }
                    export type O<G_Source> = _T_Type<G_Source>
                }
                export type _type<G_Source> = _pt.Optional_Value<_T_Type<G_Source>>
            }
            export type variable<G_Source> = {
                readonly 'const': boolean
                readonly 'export': boolean
                readonly 'expression': _pt.Optional_Value<_T_Expression<G_Source>>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }
        }
        export type SG<G_Source> = 
            | readonly ['import', {
                readonly 'from': string
                readonly 'type': _i_core._T_State_Group<G_Source, 
                    | readonly ['named', {
                        readonly 'specifiers': _i_core._T_Dictionary<G_Source, string>
                    }]
                    | readonly ['namespace', string]
                >
            }]
            | readonly ['module declaration', {
                readonly 'block': _T_Statements<G_Source>
                readonly 'export': boolean
                readonly 'name': string
            }]
            | readonly ['type alias declaration', {
                readonly 'export': boolean
                readonly 'name': string
                readonly 'parameters': _i_core._T_List<G_Source, string>
                readonly 'type': _T_Type<G_Source>
            }]
            | readonly ['variable', {
                readonly 'const': boolean
                readonly 'export': boolean
                readonly 'expression': _pt.Optional_Value<_T_Expression<G_Source>>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }]
    }
    export type L<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['import', {
            readonly 'from': string
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['named', {
                    readonly 'specifiers': _i_core._T_Dictionary<G_Source, string>
                }]
                | readonly ['namespace', string]
            >
        }]
        | readonly ['module declaration', {
            readonly 'block': _T_Statements<G_Source>
            readonly 'export': boolean
            readonly 'name': string
        }]
        | readonly ['type alias declaration', {
            readonly 'export': boolean
            readonly 'name': string
            readonly 'parameters': _i_core._T_List<G_Source, string>
            readonly 'type': _T_Type<G_Source>
        }]
        | readonly ['variable', {
            readonly 'const': boolean
            readonly 'export': boolean
            readonly 'expression': _pt.Optional_Value<_T_Expression<G_Source>>
            readonly 'name': string
            readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
        }]
    >
}

export namespace String_Literal {
    
    export namespace delimiter {
        
        export namespace SG {
            export type apostrophe<G_Source> = null
            export type quote<G_Source> = null
        }
        export type SG<G_Source> = 
            | readonly ['apostrophe', null]
            | readonly ['quote', null]
    }
    export type delimiter<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['apostrophe', null]
        | readonly ['quote', null]
    >
    export type value<G_Source> = string
}

export namespace Type {
    
    export namespace SG {
        export type _boolean<G_Source> = null
        
        export namespace _function {
            
            export namespace parameters {
                
                export namespace L {
                    export type name<G_Source> = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O<G_Source> = _T_Type<G_Source>
                    }
                    export type _type<G_Source> = _pt.Optional_Value<_T_Type<G_Source>>
                }
                export type L<G_Source> = {
                    readonly 'name': string
                    readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
                }
            }
            export type parameters<G_Source> = _i_core._T_List<G_Source, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }>
            
            export namespace _return {
            }
            export type _return<G_Source> = _T_Type<G_Source>
            
            export namespace type_parameters {
                export type L<G_Source> = string
            }
            export type type_parameters<G_Source> = _i_core._T_List<G_Source, string>
        }
        export type _function<G_Source> = {
            readonly 'parameters': _i_core._T_List<G_Source, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }>
            readonly 'return': _T_Type<G_Source>
            readonly 'type parameters': _i_core._T_List<G_Source, string>
        }
        
        export namespace literal_type {
        }
        export type literal_type<G_Source> = _T_String_Literal<G_Source>
        export type _null<G_Source> = null
        export type _number<G_Source> = null
        export type _string<G_Source> = null
        
        export namespace tuple {
            
            export namespace elements {
                
                export namespace L {
                }
                export type L<G_Source> = _T_Type<G_Source>
            }
            export type elements<G_Source> = _i_core._T_List<G_Source, _T_Type<G_Source>>
            export type readonly<G_Source> = boolean
        }
        export type tuple<G_Source> = {
            readonly 'elements': _i_core._T_List<G_Source, _T_Type<G_Source>>
            readonly 'readonly': boolean
        }
        
        export namespace type_literal {
            
            export namespace properties {
                
                export namespace D {
                    export type readonly<G_Source> = boolean
                    
                    export namespace _type {
                    }
                    export type _type<G_Source> = _T_Type<G_Source>
                }
                export type D<G_Source> = {
                    readonly 'readonly': boolean
                    readonly 'type': _T_Type<G_Source>
                }
            }
            export type properties<G_Source> = _i_core._T_Dictionary<G_Source, {
                readonly 'readonly': boolean
                readonly 'type': _T_Type<G_Source>
            }>
        }
        export type type_literal<G_Source> = {
            readonly 'properties': _i_core._T_Dictionary<G_Source, {
                readonly 'readonly': boolean
                readonly 'type': _T_Type<G_Source>
            }>
        }
        
        export namespace type_reference {
            export type start<G_Source> = string
            
            export namespace tail {
                export type L<G_Source> = string
            }
            export type tail<G_Source> = _i_core._T_List<G_Source, string>
            
            export namespace type_arguments {
                
                export namespace L {
                }
                export type L<G_Source> = _T_Type<G_Source>
            }
            export type type_arguments<G_Source> = _i_core._T_List<G_Source, _T_Type<G_Source>>
        }
        export type type_reference<G_Source> = {
            readonly 'start': string
            readonly 'tail': _i_core._T_List<G_Source, string>
            readonly 'type arguments': _i_core._T_List<G_Source, _T_Type<G_Source>>
        }
        
        export namespace union {
            
            export namespace L {
            }
            export type L<G_Source> = _T_Type<G_Source>
        }
        export type union<G_Source> = _i_core._T_List<G_Source, _T_Type<G_Source>>
        export type _void<G_Source> = null
    }
    export type SG<G_Source> = 
        | readonly ['boolean', null]
        | readonly ['function', {
            readonly 'parameters': _i_core._T_List<G_Source, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type<G_Source>>
            }>
            readonly 'return': _T_Type<G_Source>
            readonly 'type parameters': _i_core._T_List<G_Source, string>
        }]
        | readonly ['literal type', _T_String_Literal<G_Source>]
        | readonly ['null', null]
        | readonly ['number', null]
        | readonly ['string', null]
        | readonly ['tuple', {
            readonly 'elements': _i_core._T_List<G_Source, _T_Type<G_Source>>
            readonly 'readonly': boolean
        }]
        | readonly ['type literal', {
            readonly 'properties': _i_core._T_Dictionary<G_Source, {
                readonly 'readonly': boolean
                readonly 'type': _T_Type<G_Source>
            }>
        }]
        | readonly ['type reference', {
            readonly 'start': string
            readonly 'tail': _i_core._T_List<G_Source, string>
            readonly 'type arguments': _i_core._T_List<G_Source, _T_Type<G_Source>>
        }]
        | readonly ['union', _i_core._T_List<G_Source, _T_Type<G_Source>>]
        | readonly ['void', null]
}
