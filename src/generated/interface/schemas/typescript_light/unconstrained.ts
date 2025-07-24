import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/resolved"

// **** TYPES

export type _T_Expression = _i_core._T_State_Group<null, 
    | readonly ['array literal', _i_core._T_List<null, _T_Expression>]
    | readonly ['arrow function', {
        readonly 'parameters': _i_core._T_List<null, {
            readonly 'name': string
            readonly 'type': _pt.Optional_Value<_T_Type>
        }>
        readonly 'return type': _pt.Optional_Value<_T_Type>
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['block', _T_Statements]
            | readonly ['expression', _T_Expression]
        >
    }]
    | readonly ['call', {
        readonly 'arguments': _i_core._T_List<null, _T_Expression>
        readonly 'function selection': _T_Expression
    }]
    | readonly ['false', null]
    | readonly ['null', null]
    | readonly ['number literal', number]
    | readonly ['object literal', {
        readonly 'properties': _i_core._T_Dictionary<null, _T_Expression>
    }]
    | readonly ['string literal', _T_String_Literal]
    | readonly ['true', null]
>

export type _T_Statements = _i_core._T_List<null, _i_core._T_State_Group<null, 
    | readonly ['import', {
        readonly 'from': string
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['named', {
                readonly 'specifiers': _i_core._T_Dictionary<null, string>
            }]
            | readonly ['namespace', string]
        >
    }]
    | readonly ['module declaration', {
        readonly 'block': _T_Statements
        readonly 'export': boolean
        readonly 'name': string
    }]
    | readonly ['type alias declaration', {
        readonly 'export': boolean
        readonly 'name': string
        readonly 'parameters': _i_core._T_List<null, string>
        readonly 'type': _T_Type
    }]
    | readonly ['variable', {
        readonly 'const': boolean
        readonly 'export': boolean
        readonly 'expression': _pt.Optional_Value<_T_Expression>
        readonly 'name': string
        readonly 'type': _pt.Optional_Value<_T_Type>
    }]
>>

export type _T_String_Literal = {
    readonly 'delimiter': _i_core._T_State_Group<null, 
        | readonly ['apostrophe', null]
        | readonly ['quote', null]
    >
    readonly 'value': string
}

export type _T_Type = _i_core._T_State_Group<null, 
    | readonly ['boolean', null]
    | readonly ['function', {
        readonly 'parameters': _i_core._T_List<null, {
            readonly 'name': string
            readonly 'type': _pt.Optional_Value<_T_Type>
        }>
        readonly 'return': _T_Type
        readonly 'type parameters': _i_core._T_List<null, string>
    }]
    | readonly ['literal type', _T_String_Literal]
    | readonly ['null', null]
    | readonly ['number', null]
    | readonly ['string', null]
    | readonly ['tuple', {
        readonly 'elements': _i_core._T_List<null, _T_Type>
        readonly 'readonly': boolean
    }]
    | readonly ['type literal', {
        readonly 'properties': _i_core._T_Dictionary<null, {
            readonly 'readonly': boolean
            readonly 'type': _T_Type
        }>
    }]
    | readonly ['type reference', {
        readonly 'start': string
        readonly 'tail': _i_core._T_List<null, string>
        readonly 'type arguments': _i_core._T_List<null, _T_Type>
    }]
    | readonly ['union', _i_core._T_List<null, _T_Type>]
    | readonly ['void', null]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Expression = _T_Expression

export type Statements = _T_Statements

export type String_Literal = _T_String_Literal

export type Type = _T_Type

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Expression {
    
    export namespace SG {
        
        export namespace array_literal {
            
            export namespace L {
            }
            export type L = _T_Expression
        }
        export type array_literal = _i_core._T_List<null, _T_Expression>
        
        export namespace arrow_function {
            
            export namespace parameters {
                
                export namespace L {
                    export type name = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O = _T_Type
                    }
                    export type _type = _pt.Optional_Value<_T_Type>
                }
                export type L = {
                    readonly 'name': string
                    readonly 'type': _pt.Optional_Value<_T_Type>
                }
            }
            export type parameters = _i_core._T_List<null, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }>
            
            export namespace return_type {
                
                export namespace O {
                }
                export type O = _T_Type
            }
            export type return_type = _pt.Optional_Value<_T_Type>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace block {
                    }
                    export type block = _T_Statements
                    
                    export namespace expression {
                    }
                    export type expression = _T_Expression
                }
                export type SG = 
                    | readonly ['block', _T_Statements]
                    | readonly ['expression', _T_Expression]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['block', _T_Statements]
                | readonly ['expression', _T_Expression]
            >
        }
        export type arrow_function = {
            readonly 'parameters': _i_core._T_List<null, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }>
            readonly 'return type': _pt.Optional_Value<_T_Type>
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['block', _T_Statements]
                | readonly ['expression', _T_Expression]
            >
        }
        
        export namespace call {
            
            export namespace _arguments {
                
                export namespace L {
                }
                export type L = _T_Expression
            }
            export type _arguments = _i_core._T_List<null, _T_Expression>
            
            export namespace function_selection {
            }
            export type function_selection = _T_Expression
        }
        export type call = {
            readonly 'arguments': _i_core._T_List<null, _T_Expression>
            readonly 'function selection': _T_Expression
        }
        export type _false = null
        export type _null = null
        export type number_literal = number
        
        export namespace object_literal {
            
            export namespace properties {
                
                export namespace D {
                }
                export type D = _T_Expression
            }
            export type properties = _i_core._T_Dictionary<null, _T_Expression>
        }
        export type object_literal = {
            readonly 'properties': _i_core._T_Dictionary<null, _T_Expression>
        }
        
        export namespace string_literal {
        }
        export type string_literal = _T_String_Literal
        export type _true = null
    }
    export type SG = 
        | readonly ['array literal', _i_core._T_List<null, _T_Expression>]
        | readonly ['arrow function', {
            readonly 'parameters': _i_core._T_List<null, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }>
            readonly 'return type': _pt.Optional_Value<_T_Type>
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['block', _T_Statements]
                | readonly ['expression', _T_Expression]
            >
        }]
        | readonly ['call', {
            readonly 'arguments': _i_core._T_List<null, _T_Expression>
            readonly 'function selection': _T_Expression
        }]
        | readonly ['false', null]
        | readonly ['null', null]
        | readonly ['number literal', number]
        | readonly ['object literal', {
            readonly 'properties': _i_core._T_Dictionary<null, _T_Expression>
        }]
        | readonly ['string literal', _T_String_Literal]
        | readonly ['true', null]
}

export namespace _T_Statements {
    
    export namespace L {
        
        export namespace SG {
            
            export namespace _import {
                export type _from = string
                
                export namespace _type {
                    
                    export namespace SG {
                        
                        export namespace named {
                            
                            export namespace specifiers {
                                export type D = string
                            }
                            export type specifiers = _i_core._T_Dictionary<null, string>
                        }
                        export type named = {
                            readonly 'specifiers': _i_core._T_Dictionary<null, string>
                        }
                        export type namespace = string
                    }
                    export type SG = 
                        | readonly ['named', {
                            readonly 'specifiers': _i_core._T_Dictionary<null, string>
                        }]
                        | readonly ['namespace', string]
                }
                export type _type = _i_core._T_State_Group<null, 
                    | readonly ['named', {
                        readonly 'specifiers': _i_core._T_Dictionary<null, string>
                    }]
                    | readonly ['namespace', string]
                >
            }
            export type _import = {
                readonly 'from': string
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['named', {
                        readonly 'specifiers': _i_core._T_Dictionary<null, string>
                    }]
                    | readonly ['namespace', string]
                >
            }
            
            export namespace module_declaration {
                
                export namespace block {
                }
                export type block = _T_Statements
                export type _export = boolean
                export type name = string
            }
            export type module_declaration = {
                readonly 'block': _T_Statements
                readonly 'export': boolean
                readonly 'name': string
            }
            
            export namespace type_alias_declaration {
                export type _export = boolean
                export type name = string
                
                export namespace parameters {
                    export type L = string
                }
                export type parameters = _i_core._T_List<null, string>
                
                export namespace _type {
                }
                export type _type = _T_Type
            }
            export type type_alias_declaration = {
                readonly 'export': boolean
                readonly 'name': string
                readonly 'parameters': _i_core._T_List<null, string>
                readonly 'type': _T_Type
            }
            
            export namespace variable {
                export type _const = boolean
                export type _export = boolean
                
                export namespace expression {
                    
                    export namespace O {
                    }
                    export type O = _T_Expression
                }
                export type expression = _pt.Optional_Value<_T_Expression>
                export type name = string
                
                export namespace _type {
                    
                    export namespace O {
                    }
                    export type O = _T_Type
                }
                export type _type = _pt.Optional_Value<_T_Type>
            }
            export type variable = {
                readonly 'const': boolean
                readonly 'export': boolean
                readonly 'expression': _pt.Optional_Value<_T_Expression>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }
        }
        export type SG = 
            | readonly ['import', {
                readonly 'from': string
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['named', {
                        readonly 'specifiers': _i_core._T_Dictionary<null, string>
                    }]
                    | readonly ['namespace', string]
                >
            }]
            | readonly ['module declaration', {
                readonly 'block': _T_Statements
                readonly 'export': boolean
                readonly 'name': string
            }]
            | readonly ['type alias declaration', {
                readonly 'export': boolean
                readonly 'name': string
                readonly 'parameters': _i_core._T_List<null, string>
                readonly 'type': _T_Type
            }]
            | readonly ['variable', {
                readonly 'const': boolean
                readonly 'export': boolean
                readonly 'expression': _pt.Optional_Value<_T_Expression>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['import', {
            readonly 'from': string
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['named', {
                    readonly 'specifiers': _i_core._T_Dictionary<null, string>
                }]
                | readonly ['namespace', string]
            >
        }]
        | readonly ['module declaration', {
            readonly 'block': _T_Statements
            readonly 'export': boolean
            readonly 'name': string
        }]
        | readonly ['type alias declaration', {
            readonly 'export': boolean
            readonly 'name': string
            readonly 'parameters': _i_core._T_List<null, string>
            readonly 'type': _T_Type
        }]
        | readonly ['variable', {
            readonly 'const': boolean
            readonly 'export': boolean
            readonly 'expression': _pt.Optional_Value<_T_Expression>
            readonly 'name': string
            readonly 'type': _pt.Optional_Value<_T_Type>
        }]
    >
}

export namespace _T_String_Literal {
    
    export namespace delimiter {
        
        export namespace SG {
            export type apostrophe = null
            export type quote = null
        }
        export type SG = 
            | readonly ['apostrophe', null]
            | readonly ['quote', null]
    }
    export type delimiter = _i_core._T_State_Group<null, 
        | readonly ['apostrophe', null]
        | readonly ['quote', null]
    >
    export type value = string
}

export namespace _T_Type {
    
    export namespace SG {
        export type _boolean = null
        
        export namespace _function {
            
            export namespace parameters {
                
                export namespace L {
                    export type name = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O = _T_Type
                    }
                    export type _type = _pt.Optional_Value<_T_Type>
                }
                export type L = {
                    readonly 'name': string
                    readonly 'type': _pt.Optional_Value<_T_Type>
                }
            }
            export type parameters = _i_core._T_List<null, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }>
            
            export namespace _return {
            }
            export type _return = _T_Type
            
            export namespace type_parameters {
                export type L = string
            }
            export type type_parameters = _i_core._T_List<null, string>
        }
        export type _function = {
            readonly 'parameters': _i_core._T_List<null, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }>
            readonly 'return': _T_Type
            readonly 'type parameters': _i_core._T_List<null, string>
        }
        
        export namespace literal_type {
        }
        export type literal_type = _T_String_Literal
        export type _null = null
        export type _number = null
        export type _string = null
        
        export namespace tuple {
            
            export namespace elements {
                
                export namespace L {
                }
                export type L = _T_Type
            }
            export type elements = _i_core._T_List<null, _T_Type>
            export type readonly = boolean
        }
        export type tuple = {
            readonly 'elements': _i_core._T_List<null, _T_Type>
            readonly 'readonly': boolean
        }
        
        export namespace type_literal {
            
            export namespace properties {
                
                export namespace D {
                    export type readonly = boolean
                    
                    export namespace _type {
                    }
                    export type _type = _T_Type
                }
                export type D = {
                    readonly 'readonly': boolean
                    readonly 'type': _T_Type
                }
            }
            export type properties = _i_core._T_Dictionary<null, {
                readonly 'readonly': boolean
                readonly 'type': _T_Type
            }>
        }
        export type type_literal = {
            readonly 'properties': _i_core._T_Dictionary<null, {
                readonly 'readonly': boolean
                readonly 'type': _T_Type
            }>
        }
        
        export namespace type_reference {
            export type start = string
            
            export namespace tail {
                export type L = string
            }
            export type tail = _i_core._T_List<null, string>
            
            export namespace type_arguments {
                
                export namespace L {
                }
                export type L = _T_Type
            }
            export type type_arguments = _i_core._T_List<null, _T_Type>
        }
        export type type_reference = {
            readonly 'start': string
            readonly 'tail': _i_core._T_List<null, string>
            readonly 'type arguments': _i_core._T_List<null, _T_Type>
        }
        
        export namespace union {
            
            export namespace L {
            }
            export type L = _T_Type
        }
        export type union = _i_core._T_List<null, _T_Type>
        export type _void = null
    }
    export type SG = 
        | readonly ['boolean', null]
        | readonly ['function', {
            readonly 'parameters': _i_core._T_List<null, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }>
            readonly 'return': _T_Type
            readonly 'type parameters': _i_core._T_List<null, string>
        }]
        | readonly ['literal type', _T_String_Literal]
        | readonly ['null', null]
        | readonly ['number', null]
        | readonly ['string', null]
        | readonly ['tuple', {
            readonly 'elements': _i_core._T_List<null, _T_Type>
            readonly 'readonly': boolean
        }]
        | readonly ['type literal', {
            readonly 'properties': _i_core._T_Dictionary<null, {
                readonly 'readonly': boolean
                readonly 'type': _T_Type
            }>
        }]
        | readonly ['type reference', {
            readonly 'start': string
            readonly 'tail': _i_core._T_List<null, string>
            readonly 'type arguments': _i_core._T_List<null, _T_Type>
        }]
        | readonly ['union', _i_core._T_List<null, _T_Type>]
        | readonly ['void', null]
}

// *** ALIASES FOR NESTED TYPES

export namespace Expression {
    
    export namespace SG {
        
        export namespace array_literal {
            
            export namespace L {
            }
            export type L = _T_Expression
        }
        export type array_literal = _i_core._T_List<null, _T_Expression>
        
        export namespace arrow_function {
            
            export namespace parameters {
                
                export namespace L {
                    export type name = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O = _T_Type
                    }
                    export type _type = _pt.Optional_Value<_T_Type>
                }
                export type L = {
                    readonly 'name': string
                    readonly 'type': _pt.Optional_Value<_T_Type>
                }
            }
            export type parameters = _i_core._T_List<null, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }>
            
            export namespace return_type {
                
                export namespace O {
                }
                export type O = _T_Type
            }
            export type return_type = _pt.Optional_Value<_T_Type>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace block {
                    }
                    export type block = _T_Statements
                    
                    export namespace expression {
                    }
                    export type expression = _T_Expression
                }
                export type SG = 
                    | readonly ['block', _T_Statements]
                    | readonly ['expression', _T_Expression]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['block', _T_Statements]
                | readonly ['expression', _T_Expression]
            >
        }
        export type arrow_function = {
            readonly 'parameters': _i_core._T_List<null, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }>
            readonly 'return type': _pt.Optional_Value<_T_Type>
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['block', _T_Statements]
                | readonly ['expression', _T_Expression]
            >
        }
        
        export namespace call {
            
            export namespace _arguments {
                
                export namespace L {
                }
                export type L = _T_Expression
            }
            export type _arguments = _i_core._T_List<null, _T_Expression>
            
            export namespace function_selection {
            }
            export type function_selection = _T_Expression
        }
        export type call = {
            readonly 'arguments': _i_core._T_List<null, _T_Expression>
            readonly 'function selection': _T_Expression
        }
        export type _false = null
        export type _null = null
        export type number_literal = number
        
        export namespace object_literal {
            
            export namespace properties {
                
                export namespace D {
                }
                export type D = _T_Expression
            }
            export type properties = _i_core._T_Dictionary<null, _T_Expression>
        }
        export type object_literal = {
            readonly 'properties': _i_core._T_Dictionary<null, _T_Expression>
        }
        
        export namespace string_literal {
        }
        export type string_literal = _T_String_Literal
        export type _true = null
    }
    export type SG = 
        | readonly ['array literal', _i_core._T_List<null, _T_Expression>]
        | readonly ['arrow function', {
            readonly 'parameters': _i_core._T_List<null, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }>
            readonly 'return type': _pt.Optional_Value<_T_Type>
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['block', _T_Statements]
                | readonly ['expression', _T_Expression]
            >
        }]
        | readonly ['call', {
            readonly 'arguments': _i_core._T_List<null, _T_Expression>
            readonly 'function selection': _T_Expression
        }]
        | readonly ['false', null]
        | readonly ['null', null]
        | readonly ['number literal', number]
        | readonly ['object literal', {
            readonly 'properties': _i_core._T_Dictionary<null, _T_Expression>
        }]
        | readonly ['string literal', _T_String_Literal]
        | readonly ['true', null]
}

export namespace Statements {
    
    export namespace L {
        
        export namespace SG {
            
            export namespace _import {
                export type _from = string
                
                export namespace _type {
                    
                    export namespace SG {
                        
                        export namespace named {
                            
                            export namespace specifiers {
                                export type D = string
                            }
                            export type specifiers = _i_core._T_Dictionary<null, string>
                        }
                        export type named = {
                            readonly 'specifiers': _i_core._T_Dictionary<null, string>
                        }
                        export type namespace = string
                    }
                    export type SG = 
                        | readonly ['named', {
                            readonly 'specifiers': _i_core._T_Dictionary<null, string>
                        }]
                        | readonly ['namespace', string]
                }
                export type _type = _i_core._T_State_Group<null, 
                    | readonly ['named', {
                        readonly 'specifiers': _i_core._T_Dictionary<null, string>
                    }]
                    | readonly ['namespace', string]
                >
            }
            export type _import = {
                readonly 'from': string
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['named', {
                        readonly 'specifiers': _i_core._T_Dictionary<null, string>
                    }]
                    | readonly ['namespace', string]
                >
            }
            
            export namespace module_declaration {
                
                export namespace block {
                }
                export type block = _T_Statements
                export type _export = boolean
                export type name = string
            }
            export type module_declaration = {
                readonly 'block': _T_Statements
                readonly 'export': boolean
                readonly 'name': string
            }
            
            export namespace type_alias_declaration {
                export type _export = boolean
                export type name = string
                
                export namespace parameters {
                    export type L = string
                }
                export type parameters = _i_core._T_List<null, string>
                
                export namespace _type {
                }
                export type _type = _T_Type
            }
            export type type_alias_declaration = {
                readonly 'export': boolean
                readonly 'name': string
                readonly 'parameters': _i_core._T_List<null, string>
                readonly 'type': _T_Type
            }
            
            export namespace variable {
                export type _const = boolean
                export type _export = boolean
                
                export namespace expression {
                    
                    export namespace O {
                    }
                    export type O = _T_Expression
                }
                export type expression = _pt.Optional_Value<_T_Expression>
                export type name = string
                
                export namespace _type {
                    
                    export namespace O {
                    }
                    export type O = _T_Type
                }
                export type _type = _pt.Optional_Value<_T_Type>
            }
            export type variable = {
                readonly 'const': boolean
                readonly 'export': boolean
                readonly 'expression': _pt.Optional_Value<_T_Expression>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }
        }
        export type SG = 
            | readonly ['import', {
                readonly 'from': string
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['named', {
                        readonly 'specifiers': _i_core._T_Dictionary<null, string>
                    }]
                    | readonly ['namespace', string]
                >
            }]
            | readonly ['module declaration', {
                readonly 'block': _T_Statements
                readonly 'export': boolean
                readonly 'name': string
            }]
            | readonly ['type alias declaration', {
                readonly 'export': boolean
                readonly 'name': string
                readonly 'parameters': _i_core._T_List<null, string>
                readonly 'type': _T_Type
            }]
            | readonly ['variable', {
                readonly 'const': boolean
                readonly 'export': boolean
                readonly 'expression': _pt.Optional_Value<_T_Expression>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['import', {
            readonly 'from': string
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['named', {
                    readonly 'specifiers': _i_core._T_Dictionary<null, string>
                }]
                | readonly ['namespace', string]
            >
        }]
        | readonly ['module declaration', {
            readonly 'block': _T_Statements
            readonly 'export': boolean
            readonly 'name': string
        }]
        | readonly ['type alias declaration', {
            readonly 'export': boolean
            readonly 'name': string
            readonly 'parameters': _i_core._T_List<null, string>
            readonly 'type': _T_Type
        }]
        | readonly ['variable', {
            readonly 'const': boolean
            readonly 'export': boolean
            readonly 'expression': _pt.Optional_Value<_T_Expression>
            readonly 'name': string
            readonly 'type': _pt.Optional_Value<_T_Type>
        }]
    >
}

export namespace String_Literal {
    
    export namespace delimiter {
        
        export namespace SG {
            export type apostrophe = null
            export type quote = null
        }
        export type SG = 
            | readonly ['apostrophe', null]
            | readonly ['quote', null]
    }
    export type delimiter = _i_core._T_State_Group<null, 
        | readonly ['apostrophe', null]
        | readonly ['quote', null]
    >
    export type value = string
}

export namespace Type {
    
    export namespace SG {
        export type _boolean = null
        
        export namespace _function {
            
            export namespace parameters {
                
                export namespace L {
                    export type name = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O = _T_Type
                    }
                    export type _type = _pt.Optional_Value<_T_Type>
                }
                export type L = {
                    readonly 'name': string
                    readonly 'type': _pt.Optional_Value<_T_Type>
                }
            }
            export type parameters = _i_core._T_List<null, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }>
            
            export namespace _return {
            }
            export type _return = _T_Type
            
            export namespace type_parameters {
                export type L = string
            }
            export type type_parameters = _i_core._T_List<null, string>
        }
        export type _function = {
            readonly 'parameters': _i_core._T_List<null, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }>
            readonly 'return': _T_Type
            readonly 'type parameters': _i_core._T_List<null, string>
        }
        
        export namespace literal_type {
        }
        export type literal_type = _T_String_Literal
        export type _null = null
        export type _number = null
        export type _string = null
        
        export namespace tuple {
            
            export namespace elements {
                
                export namespace L {
                }
                export type L = _T_Type
            }
            export type elements = _i_core._T_List<null, _T_Type>
            export type readonly = boolean
        }
        export type tuple = {
            readonly 'elements': _i_core._T_List<null, _T_Type>
            readonly 'readonly': boolean
        }
        
        export namespace type_literal {
            
            export namespace properties {
                
                export namespace D {
                    export type readonly = boolean
                    
                    export namespace _type {
                    }
                    export type _type = _T_Type
                }
                export type D = {
                    readonly 'readonly': boolean
                    readonly 'type': _T_Type
                }
            }
            export type properties = _i_core._T_Dictionary<null, {
                readonly 'readonly': boolean
                readonly 'type': _T_Type
            }>
        }
        export type type_literal = {
            readonly 'properties': _i_core._T_Dictionary<null, {
                readonly 'readonly': boolean
                readonly 'type': _T_Type
            }>
        }
        
        export namespace type_reference {
            export type start = string
            
            export namespace tail {
                export type L = string
            }
            export type tail = _i_core._T_List<null, string>
            
            export namespace type_arguments {
                
                export namespace L {
                }
                export type L = _T_Type
            }
            export type type_arguments = _i_core._T_List<null, _T_Type>
        }
        export type type_reference = {
            readonly 'start': string
            readonly 'tail': _i_core._T_List<null, string>
            readonly 'type arguments': _i_core._T_List<null, _T_Type>
        }
        
        export namespace union {
            
            export namespace L {
            }
            export type L = _T_Type
        }
        export type union = _i_core._T_List<null, _T_Type>
        export type _void = null
    }
    export type SG = 
        | readonly ['boolean', null]
        | readonly ['function', {
            readonly 'parameters': _i_core._T_List<null, {
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_T_Type>
            }>
            readonly 'return': _T_Type
            readonly 'type parameters': _i_core._T_List<null, string>
        }]
        | readonly ['literal type', _T_String_Literal]
        | readonly ['null', null]
        | readonly ['number', null]
        | readonly ['string', null]
        | readonly ['tuple', {
            readonly 'elements': _i_core._T_List<null, _T_Type>
            readonly 'readonly': boolean
        }]
        | readonly ['type literal', {
            readonly 'properties': _i_core._T_Dictionary<null, {
                readonly 'readonly': boolean
                readonly 'type': _T_Type
            }>
        }]
        | readonly ['type reference', {
            readonly 'start': string
            readonly 'tail': _i_core._T_List<null, string>
            readonly 'type arguments': _i_core._T_List<null, _T_Type>
        }]
        | readonly ['union', _i_core._T_List<null, _T_Type>]
        | readonly ['void', null]
}
