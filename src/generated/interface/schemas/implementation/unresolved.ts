import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/unresolved"
import * as _i_imports_interface from "../interface/unresolved"

// **** TYPES

export type _T_Initialization<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['block', {
        readonly 'initialization': _T_Initialization<G_Source>
        readonly 'temp ordered variables': _i_core._T_List<G_Source, {
            readonly 'initialization': _T_Initialization<G_Source>
            readonly 'name': string
            readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
        }>
        readonly 'variables': _T_Variables<G_Source>
    }]
    | readonly ['change context', {
        readonly 'initialization': _T_Initialization<G_Source>
        readonly 'new context': _T_Selection<G_Source>
    }]
    | readonly ['literal', {
        readonly 'value': _T_Literal<G_Source>
    }]
    | readonly ['selection', _T_Selection<G_Source>]
    | readonly ['transformation', {
        readonly 'source': _T_Selection<G_Source>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['array', _i_core._T_State_Group<G_Source, 
                | readonly ['map', _T_Initialization<G_Source>]
            >]
            | readonly ['boolean', _i_core._T_State_Group<G_Source, 
                | readonly ['not', null]
                | readonly ['transform', {
                    readonly 'if false': _T_Initialization<G_Source>
                    readonly 'if true': _T_Initialization<G_Source>
                }]
            >]
            | readonly ['dictionary', _i_core._T_State_Group<G_Source, 
                | readonly ['map', _T_Initialization<G_Source>]
            >]
            | readonly ['function', _i_core._T_State_Group<G_Source, 
                | readonly ['call', {
                    readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                    readonly 'context': _T_Initialization<G_Source>
                }]
            >]
            | readonly ['optional', _i_core._T_State_Group<G_Source, 
                | readonly ['map', _T_Initialization<G_Source>]
                | readonly ['transform', {
                    readonly 'if not set': _T_Initialization<G_Source>
                    readonly 'if set': _T_Initialization<G_Source>
                    readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                }]
            >]
            | readonly ['tagged union', _i_core._T_State_Group<G_Source, 
                | readonly ['switch', {
                    readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                    readonly 'type': _i_core._T_State_Group<G_Source, 
                        | readonly ['full', {
                            readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                        }]
                        | readonly ['partial', {
                            readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                            readonly 'default': _T_Initialization<G_Source>
                        }]
                    >
                }]
            >]
        >
    }]
>

export type _T_Literal<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['array', _i_core._T_List<G_Source, _T_Initialization<G_Source>>]
    | readonly ['boolean', _i_core._T_State_Group<G_Source, 
        | readonly ['false', null]
        | readonly ['true', null]
    >]
    | readonly ['dictionary', _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>]
    | readonly ['function', {
        readonly 'initialization': _T_Initialization<G_Source>
        readonly 'temp has parameters': boolean
    }]
    | readonly ['group', _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>]
    | readonly ['null', null]
    | readonly ['number', _i_core._T_State_Group<G_Source, 
        | readonly ['floting point', number]
        | readonly ['integer', number]
        | readonly ['signed integer', number]
    >]
    | readonly ['optional', _i_core._T_State_Group<G_Source, 
        | readonly ['not set', null]
        | readonly ['set', _T_Initialization<G_Source>]
    >]
    | readonly ['string', {
        readonly 'delimiter': _i_core._T_State_Group<G_Source, 
            | readonly ['backtick', null]
            | readonly ['quote', null]
        >
        readonly 'value': string
    }]
    | readonly ['tagged union', {
        readonly 'case': string
        readonly 'value': _T_Initialization<G_Source>
    }]
>

export type _T_Module<G_Source> = {
    readonly 'type imports': _i_imports_interface._T_Imports<G_Source>
    readonly 'variable imports': _i_core._T_Dictionary<G_Source, {
        readonly 'tail': _i_core._T_List<G_Source, string>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['ancestor', {
                readonly 'dependency': string
                readonly 'number of steps': number
            }]
            | readonly ['external', string]
            | readonly ['sibling', string]
        >
    }>
    readonly 'variables': _T_Variables<G_Source>
}

export type _T_Module_Set<G_Source> = _i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
    | readonly ['module', _T_Module<G_Source>]
    | readonly ['set', _T_Module_Set<G_Source>]
>>

export type _T_Selection<G_Source> = {
    readonly 'start': _i_core._T_State_Group<G_Source, 
        | readonly ['abort', null]
        | readonly ['argument', string]
        | readonly ['call', {
            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
            readonly 'context': _T_Selection<G_Source>
            readonly 'source': _T_Selection<G_Source>
        }]
        | readonly ['context', null]
        | readonly ['implement me', null]
        | readonly ['imported variable', {
            readonly 'import': string
            readonly 'variable': string
        }]
        | readonly ['parameter', string]
        | readonly ['transform optional value', {
            readonly 'if not set': _T_Selection<G_Source>
            readonly 'if set': _T_Selection<G_Source>
            readonly 'source': _T_Selection<G_Source>
        }]
        | readonly ['variable', string]
    >
    readonly 'tail': _i_core._T_List<G_Source, string>
}

export type _T_Type_Parameters<G_Source> = _i_core._T_Dictionary<G_Source, null>

export type _T_Variables<G_Source> = _i_core._T_Dictionary<G_Source, {
    readonly 'initialization': _T_Initialization<G_Source>
    readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
}>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Initialization<G_Source> = _T_Initialization<G_Source>

export type Literal<G_Source> = _T_Literal<G_Source>

export type Module<G_Source> = _T_Module<G_Source>

export type Module_Set<G_Source> = _T_Module_Set<G_Source>

export type Selection<G_Source> = _T_Selection<G_Source>

export type Type_Parameters<G_Source> = _T_Type_Parameters<G_Source>

export type Variables<G_Source> = _T_Variables<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Initialization {
    
    export namespace SG {
        
        export namespace block {
            
            export namespace initialization {
            }
            export type initialization<G_Source> = _T_Initialization<G_Source>
            
            export namespace temp_ordered_variables {
                
                export namespace L {
                    
                    export namespace initialization {
                    }
                    export type initialization<G_Source> = _T_Initialization<G_Source>
                    export type name<G_Source> = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O<G_Source> = _i_imports_interface._T_Type<G_Source>
                    }
                    export type _type<G_Source> = _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                }
                export type L<G_Source> = {
                    readonly 'initialization': _T_Initialization<G_Source>
                    readonly 'name': string
                    readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                }
            }
            export type temp_ordered_variables<G_Source> = _i_core._T_List<G_Source, {
                readonly 'initialization': _T_Initialization<G_Source>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
            }>
            
            export namespace variables {
            }
            export type variables<G_Source> = _T_Variables<G_Source>
        }
        export type block<G_Source> = {
            readonly 'initialization': _T_Initialization<G_Source>
            readonly 'temp ordered variables': _i_core._T_List<G_Source, {
                readonly 'initialization': _T_Initialization<G_Source>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
            }>
            readonly 'variables': _T_Variables<G_Source>
        }
        
        export namespace change_context {
            
            export namespace initialization {
            }
            export type initialization<G_Source> = _T_Initialization<G_Source>
            
            export namespace new_context {
            }
            export type new_context<G_Source> = _T_Selection<G_Source>
        }
        export type change_context<G_Source> = {
            readonly 'initialization': _T_Initialization<G_Source>
            readonly 'new context': _T_Selection<G_Source>
        }
        
        export namespace literal {
            
            export namespace value {
            }
            export type value<G_Source> = _T_Literal<G_Source>
        }
        export type literal<G_Source> = {
            readonly 'value': _T_Literal<G_Source>
        }
        
        export namespace selection {
        }
        export type selection<G_Source> = _T_Selection<G_Source>
        
        export namespace transformation {
            
            export namespace source {
            }
            export type source<G_Source> = _T_Selection<G_Source>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace array {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map<G_Source> = _T_Initialization<G_Source>
                        }
                        export type SG<G_Source> = 
                            | readonly ['map', _T_Initialization<G_Source>]
                    }
                    export type array<G_Source> = _i_core._T_State_Group<G_Source, 
                        | readonly ['map', _T_Initialization<G_Source>]
                    >
                    
                    export namespace _boolean {
                        
                        export namespace SG {
                            export type not<G_Source> = null
                            
                            export namespace transform {
                                
                                export namespace if_false {
                                }
                                export type if_false<G_Source> = _T_Initialization<G_Source>
                                
                                export namespace if_true {
                                }
                                export type if_true<G_Source> = _T_Initialization<G_Source>
                            }
                            export type transform<G_Source> = {
                                readonly 'if false': _T_Initialization<G_Source>
                                readonly 'if true': _T_Initialization<G_Source>
                            }
                        }
                        export type SG<G_Source> = 
                            | readonly ['not', null]
                            | readonly ['transform', {
                                readonly 'if false': _T_Initialization<G_Source>
                                readonly 'if true': _T_Initialization<G_Source>
                            }]
                    }
                    export type _boolean<G_Source> = _i_core._T_State_Group<G_Source, 
                        | readonly ['not', null]
                        | readonly ['transform', {
                            readonly 'if false': _T_Initialization<G_Source>
                            readonly 'if true': _T_Initialization<G_Source>
                        }]
                    >
                    
                    export namespace dictionary {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map<G_Source> = _T_Initialization<G_Source>
                        }
                        export type SG<G_Source> = 
                            | readonly ['map', _T_Initialization<G_Source>]
                    }
                    export type dictionary<G_Source> = _i_core._T_State_Group<G_Source, 
                        | readonly ['map', _T_Initialization<G_Source>]
                    >
                    
                    export namespace _function {
                        
                        export namespace SG {
                            
                            export namespace call {
                                
                                export namespace _arguments {
                                    
                                    export namespace O {
                                        
                                        export namespace D {
                                        }
                                        export type D<G_Source> = _T_Initialization<G_Source>
                                    }
                                    export type O<G_Source> = _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                }
                                export type _arguments<G_Source> = _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                                
                                export namespace context {
                                }
                                export type context<G_Source> = _T_Initialization<G_Source>
                            }
                            export type call<G_Source> = {
                                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                                readonly 'context': _T_Initialization<G_Source>
                            }
                        }
                        export type SG<G_Source> = 
                            | readonly ['call', {
                                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                                readonly 'context': _T_Initialization<G_Source>
                            }]
                    }
                    export type _function<G_Source> = _i_core._T_State_Group<G_Source, 
                        | readonly ['call', {
                            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                            readonly 'context': _T_Initialization<G_Source>
                        }]
                    >
                    
                    export namespace optional {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map<G_Source> = _T_Initialization<G_Source>
                            
                            export namespace transform {
                                
                                export namespace if_not_set {
                                }
                                export type if_not_set<G_Source> = _T_Initialization<G_Source>
                                
                                export namespace if_set {
                                }
                                export type if_set<G_Source> = _T_Initialization<G_Source>
                                
                                export namespace resulting_node {
                                    
                                    export namespace O {
                                    }
                                    export type O<G_Source> = _i_imports_interface._T_Type<G_Source>
                                }
                                export type resulting_node<G_Source> = _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                            }
                            export type transform<G_Source> = {
                                readonly 'if not set': _T_Initialization<G_Source>
                                readonly 'if set': _T_Initialization<G_Source>
                                readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                            }
                        }
                        export type SG<G_Source> = 
                            | readonly ['map', _T_Initialization<G_Source>]
                            | readonly ['transform', {
                                readonly 'if not set': _T_Initialization<G_Source>
                                readonly 'if set': _T_Initialization<G_Source>
                                readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                            }]
                    }
                    export type optional<G_Source> = _i_core._T_State_Group<G_Source, 
                        | readonly ['map', _T_Initialization<G_Source>]
                        | readonly ['transform', {
                            readonly 'if not set': _T_Initialization<G_Source>
                            readonly 'if set': _T_Initialization<G_Source>
                            readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                        }]
                    >
                    
                    export namespace tagged_union {
                        
                        export namespace SG {
                            
                            export namespace _switch {
                                
                                export namespace resulting_node {
                                    
                                    export namespace O {
                                    }
                                    export type O<G_Source> = _i_imports_interface._T_Type<G_Source>
                                }
                                export type resulting_node<G_Source> = _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                                
                                export namespace _type {
                                    
                                    export namespace SG {
                                        
                                        export namespace full {
                                            
                                            export namespace cases {
                                                
                                                export namespace D {
                                                }
                                                export type D<G_Source> = _T_Initialization<G_Source>
                                            }
                                            export type cases<G_Source> = _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                        }
                                        export type full<G_Source> = {
                                            readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                        }
                                        
                                        export namespace partial {
                                            
                                            export namespace cases {
                                                
                                                export namespace D {
                                                }
                                                export type D<G_Source> = _T_Initialization<G_Source>
                                            }
                                            export type cases<G_Source> = _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                            
                                            export namespace _default {
                                            }
                                            export type _default<G_Source> = _T_Initialization<G_Source>
                                        }
                                        export type partial<G_Source> = {
                                            readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                            readonly 'default': _T_Initialization<G_Source>
                                        }
                                    }
                                    export type SG<G_Source> = 
                                        | readonly ['full', {
                                            readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                        }]
                                        | readonly ['partial', {
                                            readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                            readonly 'default': _T_Initialization<G_Source>
                                        }]
                                }
                                export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                        readonly 'default': _T_Initialization<G_Source>
                                    }]
                                >
                            }
                            export type _switch<G_Source> = {
                                readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                                readonly 'type': _i_core._T_State_Group<G_Source, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                        readonly 'default': _T_Initialization<G_Source>
                                    }]
                                >
                            }
                        }
                        export type SG<G_Source> = 
                            | readonly ['switch', {
                                readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                                readonly 'type': _i_core._T_State_Group<G_Source, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                        readonly 'default': _T_Initialization<G_Source>
                                    }]
                                >
                            }]
                    }
                    export type tagged_union<G_Source> = _i_core._T_State_Group<G_Source, 
                        | readonly ['switch', {
                            readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                            readonly 'type': _i_core._T_State_Group<G_Source, 
                                | readonly ['full', {
                                    readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                }]
                                | readonly ['partial', {
                                    readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                    readonly 'default': _T_Initialization<G_Source>
                                }]
                            >
                        }]
                    >
                }
                export type SG<G_Source> = 
                    | readonly ['array', _i_core._T_State_Group<G_Source, 
                        | readonly ['map', _T_Initialization<G_Source>]
                    >]
                    | readonly ['boolean', _i_core._T_State_Group<G_Source, 
                        | readonly ['not', null]
                        | readonly ['transform', {
                            readonly 'if false': _T_Initialization<G_Source>
                            readonly 'if true': _T_Initialization<G_Source>
                        }]
                    >]
                    | readonly ['dictionary', _i_core._T_State_Group<G_Source, 
                        | readonly ['map', _T_Initialization<G_Source>]
                    >]
                    | readonly ['function', _i_core._T_State_Group<G_Source, 
                        | readonly ['call', {
                            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                            readonly 'context': _T_Initialization<G_Source>
                        }]
                    >]
                    | readonly ['optional', _i_core._T_State_Group<G_Source, 
                        | readonly ['map', _T_Initialization<G_Source>]
                        | readonly ['transform', {
                            readonly 'if not set': _T_Initialization<G_Source>
                            readonly 'if set': _T_Initialization<G_Source>
                            readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                        }]
                    >]
                    | readonly ['tagged union', _i_core._T_State_Group<G_Source, 
                        | readonly ['switch', {
                            readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                            readonly 'type': _i_core._T_State_Group<G_Source, 
                                | readonly ['full', {
                                    readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                }]
                                | readonly ['partial', {
                                    readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                    readonly 'default': _T_Initialization<G_Source>
                                }]
                            >
                        }]
                    >]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['array', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                >]
                | readonly ['boolean', _i_core._T_State_Group<G_Source, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization<G_Source>
                        readonly 'if true': _T_Initialization<G_Source>
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                >]
                | readonly ['function', _i_core._T_State_Group<G_Source, 
                    | readonly ['call', {
                        readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                        readonly 'context': _T_Initialization<G_Source>
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization<G_Source>
                        readonly 'if set': _T_Initialization<G_Source>
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<G_Source, 
                    | readonly ['switch', {
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                        readonly 'type': _i_core._T_State_Group<G_Source, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                readonly 'default': _T_Initialization<G_Source>
                            }]
                        >
                    }]
                >]
            >
        }
        export type transformation<G_Source> = {
            readonly 'source': _T_Selection<G_Source>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['array', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                >]
                | readonly ['boolean', _i_core._T_State_Group<G_Source, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization<G_Source>
                        readonly 'if true': _T_Initialization<G_Source>
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                >]
                | readonly ['function', _i_core._T_State_Group<G_Source, 
                    | readonly ['call', {
                        readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                        readonly 'context': _T_Initialization<G_Source>
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization<G_Source>
                        readonly 'if set': _T_Initialization<G_Source>
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<G_Source, 
                    | readonly ['switch', {
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                        readonly 'type': _i_core._T_State_Group<G_Source, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                readonly 'default': _T_Initialization<G_Source>
                            }]
                        >
                    }]
                >]
            >
        }
    }
    export type SG<G_Source> = 
        | readonly ['block', {
            readonly 'initialization': _T_Initialization<G_Source>
            readonly 'temp ordered variables': _i_core._T_List<G_Source, {
                readonly 'initialization': _T_Initialization<G_Source>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
            }>
            readonly 'variables': _T_Variables<G_Source>
        }]
        | readonly ['change context', {
            readonly 'initialization': _T_Initialization<G_Source>
            readonly 'new context': _T_Selection<G_Source>
        }]
        | readonly ['literal', {
            readonly 'value': _T_Literal<G_Source>
        }]
        | readonly ['selection', _T_Selection<G_Source>]
        | readonly ['transformation', {
            readonly 'source': _T_Selection<G_Source>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['array', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                >]
                | readonly ['boolean', _i_core._T_State_Group<G_Source, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization<G_Source>
                        readonly 'if true': _T_Initialization<G_Source>
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                >]
                | readonly ['function', _i_core._T_State_Group<G_Source, 
                    | readonly ['call', {
                        readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                        readonly 'context': _T_Initialization<G_Source>
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization<G_Source>
                        readonly 'if set': _T_Initialization<G_Source>
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<G_Source, 
                    | readonly ['switch', {
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                        readonly 'type': _i_core._T_State_Group<G_Source, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                readonly 'default': _T_Initialization<G_Source>
                            }]
                        >
                    }]
                >]
            >
        }]
}

export namespace _T_Literal {
    
    export namespace SG {
        
        export namespace array {
            
            export namespace L {
            }
            export type L<G_Source> = _T_Initialization<G_Source>
        }
        export type array<G_Source> = _i_core._T_List<G_Source, _T_Initialization<G_Source>>
        
        export namespace _boolean {
            
            export namespace SG {
                export type _false<G_Source> = null
                export type _true<G_Source> = null
            }
            export type SG<G_Source> = 
                | readonly ['false', null]
                | readonly ['true', null]
        }
        export type _boolean<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['false', null]
            | readonly ['true', null]
        >
        
        export namespace dictionary {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Initialization<G_Source>
        }
        export type dictionary<G_Source> = _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
        
        export namespace _function {
            
            export namespace initialization {
            }
            export type initialization<G_Source> = _T_Initialization<G_Source>
            export type temp_has_parameters<G_Source> = boolean
        }
        export type _function<G_Source> = {
            readonly 'initialization': _T_Initialization<G_Source>
            readonly 'temp has parameters': boolean
        }
        
        export namespace group {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Initialization<G_Source>
        }
        export type group<G_Source> = _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
        export type _null<G_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                export type floting_point<G_Source> = number
                export type integer<G_Source> = number
                export type signed_integer<G_Source> = number
            }
            export type SG<G_Source> = 
                | readonly ['floting point', number]
                | readonly ['integer', number]
                | readonly ['signed integer', number]
        }
        export type _number<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['floting point', number]
            | readonly ['integer', number]
            | readonly ['signed integer', number]
        >
        
        export namespace optional {
            
            export namespace SG {
                export type not_set<G_Source> = null
                
                export namespace _set {
                }
                export type _set<G_Source> = _T_Initialization<G_Source>
            }
            export type SG<G_Source> = 
                | readonly ['not set', null]
                | readonly ['set', _T_Initialization<G_Source>]
        }
        export type optional<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['not set', null]
            | readonly ['set', _T_Initialization<G_Source>]
        >
        
        export namespace _string {
            
            export namespace delimiter {
                
                export namespace SG {
                    export type backtick<G_Source> = null
                    export type quote<G_Source> = null
                }
                export type SG<G_Source> = 
                    | readonly ['backtick', null]
                    | readonly ['quote', null]
            }
            export type delimiter<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            export type value<G_Source> = string
        }
        export type _string<G_Source> = {
            readonly 'delimiter': _i_core._T_State_Group<G_Source, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }
        
        export namespace tagged_union {
            export type _case<G_Source> = string
            
            export namespace value {
            }
            export type value<G_Source> = _T_Initialization<G_Source>
        }
        export type tagged_union<G_Source> = {
            readonly 'case': string
            readonly 'value': _T_Initialization<G_Source>
        }
    }
    export type SG<G_Source> = 
        | readonly ['array', _i_core._T_List<G_Source, _T_Initialization<G_Source>>]
        | readonly ['boolean', _i_core._T_State_Group<G_Source, 
            | readonly ['false', null]
            | readonly ['true', null]
        >]
        | readonly ['dictionary', _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>]
        | readonly ['function', {
            readonly 'initialization': _T_Initialization<G_Source>
            readonly 'temp has parameters': boolean
        }]
        | readonly ['group', _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<G_Source, 
            | readonly ['floting point', number]
            | readonly ['integer', number]
            | readonly ['signed integer', number]
        >]
        | readonly ['optional', _i_core._T_State_Group<G_Source, 
            | readonly ['not set', null]
            | readonly ['set', _T_Initialization<G_Source>]
        >]
        | readonly ['string', {
            readonly 'delimiter': _i_core._T_State_Group<G_Source, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }]
        | readonly ['tagged union', {
            readonly 'case': string
            readonly 'value': _T_Initialization<G_Source>
        }]
}

export namespace _T_Module {
    
    export namespace type_imports {
    }
    export type type_imports<G_Source> = _i_imports_interface._T_Imports<G_Source>
    
    export namespace variable_imports {
        
        export namespace D {
            
            export namespace tail {
                export type L<G_Source> = string
            }
            export type tail<G_Source> = _i_core._T_List<G_Source, string>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace ancestor {
                        export type dependency<G_Source> = string
                        export type number_of_steps<G_Source> = number
                    }
                    export type ancestor<G_Source> = {
                        readonly 'dependency': string
                        readonly 'number of steps': number
                    }
                    export type external<G_Source> = string
                    export type sibling<G_Source> = string
                }
                export type SG<G_Source> = 
                    | readonly ['ancestor', {
                        readonly 'dependency': string
                        readonly 'number of steps': number
                    }]
                    | readonly ['external', string]
                    | readonly ['sibling', string]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
            >
        }
        export type D<G_Source> = {
            readonly 'tail': _i_core._T_List<G_Source, string>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
            >
        }
    }
    export type variable_imports<G_Source> = _i_core._T_Dictionary<G_Source, {
        readonly 'tail': _i_core._T_List<G_Source, string>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['ancestor', {
                readonly 'dependency': string
                readonly 'number of steps': number
            }]
            | readonly ['external', string]
            | readonly ['sibling', string]
        >
    }>
    
    export namespace variables {
    }
    export type variables<G_Source> = _T_Variables<G_Source>
}

export namespace _T_Module_Set {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace _module {
            }
            export type _module<G_Source> = _T_Module<G_Source>
            
            export namespace _set {
            }
            export type _set<G_Source> = _T_Module_Set<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['module', _T_Module<G_Source>]
            | readonly ['set', _T_Module_Set<G_Source>]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['module', _T_Module<G_Source>]
        | readonly ['set', _T_Module_Set<G_Source>]
    >
}

export namespace _T_Selection {
    
    export namespace start {
        
        export namespace SG {
            export type abort<G_Source> = null
            export type argument<G_Source> = string
            
            export namespace call {
                
                export namespace _arguments {
                    
                    export namespace O {
                        
                        export namespace D {
                        }
                        export type D<G_Source> = _T_Initialization<G_Source>
                    }
                    export type O<G_Source> = _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                }
                export type _arguments<G_Source> = _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                
                export namespace context {
                }
                export type context<G_Source> = _T_Selection<G_Source>
                
                export namespace source {
                }
                export type source<G_Source> = _T_Selection<G_Source>
            }
            export type call<G_Source> = {
                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                readonly 'context': _T_Selection<G_Source>
                readonly 'source': _T_Selection<G_Source>
            }
            export type context<G_Source> = null
            export type implement_me<G_Source> = null
            
            export namespace imported_variable {
                export type _import<G_Source> = string
                export type variable<G_Source> = string
            }
            export type imported_variable<G_Source> = {
                readonly 'import': string
                readonly 'variable': string
            }
            export type parameter<G_Source> = string
            
            export namespace transform_optional_value {
                
                export namespace if_not_set {
                }
                export type if_not_set<G_Source> = _T_Selection<G_Source>
                
                export namespace if_set {
                }
                export type if_set<G_Source> = _T_Selection<G_Source>
                
                export namespace source {
                }
                export type source<G_Source> = _T_Selection<G_Source>
            }
            export type transform_optional_value<G_Source> = {
                readonly 'if not set': _T_Selection<G_Source>
                readonly 'if set': _T_Selection<G_Source>
                readonly 'source': _T_Selection<G_Source>
            }
            export type variable<G_Source> = string
        }
        export type SG<G_Source> = 
            | readonly ['abort', null]
            | readonly ['argument', string]
            | readonly ['call', {
                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                readonly 'context': _T_Selection<G_Source>
                readonly 'source': _T_Selection<G_Source>
            }]
            | readonly ['context', null]
            | readonly ['implement me', null]
            | readonly ['imported variable', {
                readonly 'import': string
                readonly 'variable': string
            }]
            | readonly ['parameter', string]
            | readonly ['transform optional value', {
                readonly 'if not set': _T_Selection<G_Source>
                readonly 'if set': _T_Selection<G_Source>
                readonly 'source': _T_Selection<G_Source>
            }]
            | readonly ['variable', string]
    }
    export type start<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['abort', null]
        | readonly ['argument', string]
        | readonly ['call', {
            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
            readonly 'context': _T_Selection<G_Source>
            readonly 'source': _T_Selection<G_Source>
        }]
        | readonly ['context', null]
        | readonly ['implement me', null]
        | readonly ['imported variable', {
            readonly 'import': string
            readonly 'variable': string
        }]
        | readonly ['parameter', string]
        | readonly ['transform optional value', {
            readonly 'if not set': _T_Selection<G_Source>
            readonly 'if set': _T_Selection<G_Source>
            readonly 'source': _T_Selection<G_Source>
        }]
        | readonly ['variable', string]
    >
    
    export namespace tail {
        export type L<G_Source> = string
    }
    export type tail<G_Source> = _i_core._T_List<G_Source, string>
}

export namespace _T_Type_Parameters {
    export type D<G_Source> = null
}

export namespace _T_Variables {
    
    export namespace D {
        
        export namespace initialization {
        }
        export type initialization<G_Source> = _T_Initialization<G_Source>
        
        export namespace _type {
            
            export namespace O {
            }
            export type O<G_Source> = _i_imports_interface._T_Type<G_Source>
        }
        export type _type<G_Source> = _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
    }
    export type D<G_Source> = {
        readonly 'initialization': _T_Initialization<G_Source>
        readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
    }
}

// *** ALIASES FOR NESTED TYPES

export namespace Initialization {
    
    export namespace SG {
        
        export namespace block {
            
            export namespace initialization {
            }
            export type initialization<G_Source> = _T_Initialization<G_Source>
            
            export namespace temp_ordered_variables {
                
                export namespace L {
                    
                    export namespace initialization {
                    }
                    export type initialization<G_Source> = _T_Initialization<G_Source>
                    export type name<G_Source> = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O<G_Source> = _i_imports_interface._T_Type<G_Source>
                    }
                    export type _type<G_Source> = _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                }
                export type L<G_Source> = {
                    readonly 'initialization': _T_Initialization<G_Source>
                    readonly 'name': string
                    readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                }
            }
            export type temp_ordered_variables<G_Source> = _i_core._T_List<G_Source, {
                readonly 'initialization': _T_Initialization<G_Source>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
            }>
            
            export namespace variables {
            }
            export type variables<G_Source> = _T_Variables<G_Source>
        }
        export type block<G_Source> = {
            readonly 'initialization': _T_Initialization<G_Source>
            readonly 'temp ordered variables': _i_core._T_List<G_Source, {
                readonly 'initialization': _T_Initialization<G_Source>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
            }>
            readonly 'variables': _T_Variables<G_Source>
        }
        
        export namespace change_context {
            
            export namespace initialization {
            }
            export type initialization<G_Source> = _T_Initialization<G_Source>
            
            export namespace new_context {
            }
            export type new_context<G_Source> = _T_Selection<G_Source>
        }
        export type change_context<G_Source> = {
            readonly 'initialization': _T_Initialization<G_Source>
            readonly 'new context': _T_Selection<G_Source>
        }
        
        export namespace literal {
            
            export namespace value {
            }
            export type value<G_Source> = _T_Literal<G_Source>
        }
        export type literal<G_Source> = {
            readonly 'value': _T_Literal<G_Source>
        }
        
        export namespace selection {
        }
        export type selection<G_Source> = _T_Selection<G_Source>
        
        export namespace transformation {
            
            export namespace source {
            }
            export type source<G_Source> = _T_Selection<G_Source>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace array {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map<G_Source> = _T_Initialization<G_Source>
                        }
                        export type SG<G_Source> = 
                            | readonly ['map', _T_Initialization<G_Source>]
                    }
                    export type array<G_Source> = _i_core._T_State_Group<G_Source, 
                        | readonly ['map', _T_Initialization<G_Source>]
                    >
                    
                    export namespace _boolean {
                        
                        export namespace SG {
                            export type not<G_Source> = null
                            
                            export namespace transform {
                                
                                export namespace if_false {
                                }
                                export type if_false<G_Source> = _T_Initialization<G_Source>
                                
                                export namespace if_true {
                                }
                                export type if_true<G_Source> = _T_Initialization<G_Source>
                            }
                            export type transform<G_Source> = {
                                readonly 'if false': _T_Initialization<G_Source>
                                readonly 'if true': _T_Initialization<G_Source>
                            }
                        }
                        export type SG<G_Source> = 
                            | readonly ['not', null]
                            | readonly ['transform', {
                                readonly 'if false': _T_Initialization<G_Source>
                                readonly 'if true': _T_Initialization<G_Source>
                            }]
                    }
                    export type _boolean<G_Source> = _i_core._T_State_Group<G_Source, 
                        | readonly ['not', null]
                        | readonly ['transform', {
                            readonly 'if false': _T_Initialization<G_Source>
                            readonly 'if true': _T_Initialization<G_Source>
                        }]
                    >
                    
                    export namespace dictionary {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map<G_Source> = _T_Initialization<G_Source>
                        }
                        export type SG<G_Source> = 
                            | readonly ['map', _T_Initialization<G_Source>]
                    }
                    export type dictionary<G_Source> = _i_core._T_State_Group<G_Source, 
                        | readonly ['map', _T_Initialization<G_Source>]
                    >
                    
                    export namespace _function {
                        
                        export namespace SG {
                            
                            export namespace call {
                                
                                export namespace _arguments {
                                    
                                    export namespace O {
                                        
                                        export namespace D {
                                        }
                                        export type D<G_Source> = _T_Initialization<G_Source>
                                    }
                                    export type O<G_Source> = _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                }
                                export type _arguments<G_Source> = _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                                
                                export namespace context {
                                }
                                export type context<G_Source> = _T_Initialization<G_Source>
                            }
                            export type call<G_Source> = {
                                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                                readonly 'context': _T_Initialization<G_Source>
                            }
                        }
                        export type SG<G_Source> = 
                            | readonly ['call', {
                                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                                readonly 'context': _T_Initialization<G_Source>
                            }]
                    }
                    export type _function<G_Source> = _i_core._T_State_Group<G_Source, 
                        | readonly ['call', {
                            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                            readonly 'context': _T_Initialization<G_Source>
                        }]
                    >
                    
                    export namespace optional {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map<G_Source> = _T_Initialization<G_Source>
                            
                            export namespace transform {
                                
                                export namespace if_not_set {
                                }
                                export type if_not_set<G_Source> = _T_Initialization<G_Source>
                                
                                export namespace if_set {
                                }
                                export type if_set<G_Source> = _T_Initialization<G_Source>
                                
                                export namespace resulting_node {
                                    
                                    export namespace O {
                                    }
                                    export type O<G_Source> = _i_imports_interface._T_Type<G_Source>
                                }
                                export type resulting_node<G_Source> = _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                            }
                            export type transform<G_Source> = {
                                readonly 'if not set': _T_Initialization<G_Source>
                                readonly 'if set': _T_Initialization<G_Source>
                                readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                            }
                        }
                        export type SG<G_Source> = 
                            | readonly ['map', _T_Initialization<G_Source>]
                            | readonly ['transform', {
                                readonly 'if not set': _T_Initialization<G_Source>
                                readonly 'if set': _T_Initialization<G_Source>
                                readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                            }]
                    }
                    export type optional<G_Source> = _i_core._T_State_Group<G_Source, 
                        | readonly ['map', _T_Initialization<G_Source>]
                        | readonly ['transform', {
                            readonly 'if not set': _T_Initialization<G_Source>
                            readonly 'if set': _T_Initialization<G_Source>
                            readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                        }]
                    >
                    
                    export namespace tagged_union {
                        
                        export namespace SG {
                            
                            export namespace _switch {
                                
                                export namespace resulting_node {
                                    
                                    export namespace O {
                                    }
                                    export type O<G_Source> = _i_imports_interface._T_Type<G_Source>
                                }
                                export type resulting_node<G_Source> = _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                                
                                export namespace _type {
                                    
                                    export namespace SG {
                                        
                                        export namespace full {
                                            
                                            export namespace cases {
                                                
                                                export namespace D {
                                                }
                                                export type D<G_Source> = _T_Initialization<G_Source>
                                            }
                                            export type cases<G_Source> = _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                        }
                                        export type full<G_Source> = {
                                            readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                        }
                                        
                                        export namespace partial {
                                            
                                            export namespace cases {
                                                
                                                export namespace D {
                                                }
                                                export type D<G_Source> = _T_Initialization<G_Source>
                                            }
                                            export type cases<G_Source> = _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                            
                                            export namespace _default {
                                            }
                                            export type _default<G_Source> = _T_Initialization<G_Source>
                                        }
                                        export type partial<G_Source> = {
                                            readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                            readonly 'default': _T_Initialization<G_Source>
                                        }
                                    }
                                    export type SG<G_Source> = 
                                        | readonly ['full', {
                                            readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                        }]
                                        | readonly ['partial', {
                                            readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                            readonly 'default': _T_Initialization<G_Source>
                                        }]
                                }
                                export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                        readonly 'default': _T_Initialization<G_Source>
                                    }]
                                >
                            }
                            export type _switch<G_Source> = {
                                readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                                readonly 'type': _i_core._T_State_Group<G_Source, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                        readonly 'default': _T_Initialization<G_Source>
                                    }]
                                >
                            }
                        }
                        export type SG<G_Source> = 
                            | readonly ['switch', {
                                readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                                readonly 'type': _i_core._T_State_Group<G_Source, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                        readonly 'default': _T_Initialization<G_Source>
                                    }]
                                >
                            }]
                    }
                    export type tagged_union<G_Source> = _i_core._T_State_Group<G_Source, 
                        | readonly ['switch', {
                            readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                            readonly 'type': _i_core._T_State_Group<G_Source, 
                                | readonly ['full', {
                                    readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                }]
                                | readonly ['partial', {
                                    readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                    readonly 'default': _T_Initialization<G_Source>
                                }]
                            >
                        }]
                    >
                }
                export type SG<G_Source> = 
                    | readonly ['array', _i_core._T_State_Group<G_Source, 
                        | readonly ['map', _T_Initialization<G_Source>]
                    >]
                    | readonly ['boolean', _i_core._T_State_Group<G_Source, 
                        | readonly ['not', null]
                        | readonly ['transform', {
                            readonly 'if false': _T_Initialization<G_Source>
                            readonly 'if true': _T_Initialization<G_Source>
                        }]
                    >]
                    | readonly ['dictionary', _i_core._T_State_Group<G_Source, 
                        | readonly ['map', _T_Initialization<G_Source>]
                    >]
                    | readonly ['function', _i_core._T_State_Group<G_Source, 
                        | readonly ['call', {
                            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                            readonly 'context': _T_Initialization<G_Source>
                        }]
                    >]
                    | readonly ['optional', _i_core._T_State_Group<G_Source, 
                        | readonly ['map', _T_Initialization<G_Source>]
                        | readonly ['transform', {
                            readonly 'if not set': _T_Initialization<G_Source>
                            readonly 'if set': _T_Initialization<G_Source>
                            readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                        }]
                    >]
                    | readonly ['tagged union', _i_core._T_State_Group<G_Source, 
                        | readonly ['switch', {
                            readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                            readonly 'type': _i_core._T_State_Group<G_Source, 
                                | readonly ['full', {
                                    readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                }]
                                | readonly ['partial', {
                                    readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                    readonly 'default': _T_Initialization<G_Source>
                                }]
                            >
                        }]
                    >]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['array', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                >]
                | readonly ['boolean', _i_core._T_State_Group<G_Source, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization<G_Source>
                        readonly 'if true': _T_Initialization<G_Source>
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                >]
                | readonly ['function', _i_core._T_State_Group<G_Source, 
                    | readonly ['call', {
                        readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                        readonly 'context': _T_Initialization<G_Source>
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization<G_Source>
                        readonly 'if set': _T_Initialization<G_Source>
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<G_Source, 
                    | readonly ['switch', {
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                        readonly 'type': _i_core._T_State_Group<G_Source, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                readonly 'default': _T_Initialization<G_Source>
                            }]
                        >
                    }]
                >]
            >
        }
        export type transformation<G_Source> = {
            readonly 'source': _T_Selection<G_Source>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['array', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                >]
                | readonly ['boolean', _i_core._T_State_Group<G_Source, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization<G_Source>
                        readonly 'if true': _T_Initialization<G_Source>
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                >]
                | readonly ['function', _i_core._T_State_Group<G_Source, 
                    | readonly ['call', {
                        readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                        readonly 'context': _T_Initialization<G_Source>
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization<G_Source>
                        readonly 'if set': _T_Initialization<G_Source>
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<G_Source, 
                    | readonly ['switch', {
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                        readonly 'type': _i_core._T_State_Group<G_Source, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                readonly 'default': _T_Initialization<G_Source>
                            }]
                        >
                    }]
                >]
            >
        }
    }
    export type SG<G_Source> = 
        | readonly ['block', {
            readonly 'initialization': _T_Initialization<G_Source>
            readonly 'temp ordered variables': _i_core._T_List<G_Source, {
                readonly 'initialization': _T_Initialization<G_Source>
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
            }>
            readonly 'variables': _T_Variables<G_Source>
        }]
        | readonly ['change context', {
            readonly 'initialization': _T_Initialization<G_Source>
            readonly 'new context': _T_Selection<G_Source>
        }]
        | readonly ['literal', {
            readonly 'value': _T_Literal<G_Source>
        }]
        | readonly ['selection', _T_Selection<G_Source>]
        | readonly ['transformation', {
            readonly 'source': _T_Selection<G_Source>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['array', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                >]
                | readonly ['boolean', _i_core._T_State_Group<G_Source, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization<G_Source>
                        readonly 'if true': _T_Initialization<G_Source>
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                >]
                | readonly ['function', _i_core._T_State_Group<G_Source, 
                    | readonly ['call', {
                        readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                        readonly 'context': _T_Initialization<G_Source>
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<G_Source, 
                    | readonly ['map', _T_Initialization<G_Source>]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization<G_Source>
                        readonly 'if set': _T_Initialization<G_Source>
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<G_Source, 
                    | readonly ['switch', {
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
                        readonly 'type': _i_core._T_State_Group<G_Source, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                                readonly 'default': _T_Initialization<G_Source>
                            }]
                        >
                    }]
                >]
            >
        }]
}

export namespace Literal {
    
    export namespace SG {
        
        export namespace array {
            
            export namespace L {
            }
            export type L<G_Source> = _T_Initialization<G_Source>
        }
        export type array<G_Source> = _i_core._T_List<G_Source, _T_Initialization<G_Source>>
        
        export namespace _boolean {
            
            export namespace SG {
                export type _false<G_Source> = null
                export type _true<G_Source> = null
            }
            export type SG<G_Source> = 
                | readonly ['false', null]
                | readonly ['true', null]
        }
        export type _boolean<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['false', null]
            | readonly ['true', null]
        >
        
        export namespace dictionary {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Initialization<G_Source>
        }
        export type dictionary<G_Source> = _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
        
        export namespace _function {
            
            export namespace initialization {
            }
            export type initialization<G_Source> = _T_Initialization<G_Source>
            export type temp_has_parameters<G_Source> = boolean
        }
        export type _function<G_Source> = {
            readonly 'initialization': _T_Initialization<G_Source>
            readonly 'temp has parameters': boolean
        }
        
        export namespace group {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Initialization<G_Source>
        }
        export type group<G_Source> = _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
        export type _null<G_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                export type floting_point<G_Source> = number
                export type integer<G_Source> = number
                export type signed_integer<G_Source> = number
            }
            export type SG<G_Source> = 
                | readonly ['floting point', number]
                | readonly ['integer', number]
                | readonly ['signed integer', number]
        }
        export type _number<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['floting point', number]
            | readonly ['integer', number]
            | readonly ['signed integer', number]
        >
        
        export namespace optional {
            
            export namespace SG {
                export type not_set<G_Source> = null
                
                export namespace _set {
                }
                export type _set<G_Source> = _T_Initialization<G_Source>
            }
            export type SG<G_Source> = 
                | readonly ['not set', null]
                | readonly ['set', _T_Initialization<G_Source>]
        }
        export type optional<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['not set', null]
            | readonly ['set', _T_Initialization<G_Source>]
        >
        
        export namespace _string {
            
            export namespace delimiter {
                
                export namespace SG {
                    export type backtick<G_Source> = null
                    export type quote<G_Source> = null
                }
                export type SG<G_Source> = 
                    | readonly ['backtick', null]
                    | readonly ['quote', null]
            }
            export type delimiter<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            export type value<G_Source> = string
        }
        export type _string<G_Source> = {
            readonly 'delimiter': _i_core._T_State_Group<G_Source, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }
        
        export namespace tagged_union {
            export type _case<G_Source> = string
            
            export namespace value {
            }
            export type value<G_Source> = _T_Initialization<G_Source>
        }
        export type tagged_union<G_Source> = {
            readonly 'case': string
            readonly 'value': _T_Initialization<G_Source>
        }
    }
    export type SG<G_Source> = 
        | readonly ['array', _i_core._T_List<G_Source, _T_Initialization<G_Source>>]
        | readonly ['boolean', _i_core._T_State_Group<G_Source, 
            | readonly ['false', null]
            | readonly ['true', null]
        >]
        | readonly ['dictionary', _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>]
        | readonly ['function', {
            readonly 'initialization': _T_Initialization<G_Source>
            readonly 'temp has parameters': boolean
        }]
        | readonly ['group', _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<G_Source, 
            | readonly ['floting point', number]
            | readonly ['integer', number]
            | readonly ['signed integer', number]
        >]
        | readonly ['optional', _i_core._T_State_Group<G_Source, 
            | readonly ['not set', null]
            | readonly ['set', _T_Initialization<G_Source>]
        >]
        | readonly ['string', {
            readonly 'delimiter': _i_core._T_State_Group<G_Source, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }]
        | readonly ['tagged union', {
            readonly 'case': string
            readonly 'value': _T_Initialization<G_Source>
        }]
}

export namespace Module {
    
    export namespace type_imports {
    }
    export type type_imports<G_Source> = _i_imports_interface._T_Imports<G_Source>
    
    export namespace variable_imports {
        
        export namespace D {
            
            export namespace tail {
                export type L<G_Source> = string
            }
            export type tail<G_Source> = _i_core._T_List<G_Source, string>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace ancestor {
                        export type dependency<G_Source> = string
                        export type number_of_steps<G_Source> = number
                    }
                    export type ancestor<G_Source> = {
                        readonly 'dependency': string
                        readonly 'number of steps': number
                    }
                    export type external<G_Source> = string
                    export type sibling<G_Source> = string
                }
                export type SG<G_Source> = 
                    | readonly ['ancestor', {
                        readonly 'dependency': string
                        readonly 'number of steps': number
                    }]
                    | readonly ['external', string]
                    | readonly ['sibling', string]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
            >
        }
        export type D<G_Source> = {
            readonly 'tail': _i_core._T_List<G_Source, string>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
            >
        }
    }
    export type variable_imports<G_Source> = _i_core._T_Dictionary<G_Source, {
        readonly 'tail': _i_core._T_List<G_Source, string>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['ancestor', {
                readonly 'dependency': string
                readonly 'number of steps': number
            }]
            | readonly ['external', string]
            | readonly ['sibling', string]
        >
    }>
    
    export namespace variables {
    }
    export type variables<G_Source> = _T_Variables<G_Source>
}

export namespace Module_Set {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace _module {
            }
            export type _module<G_Source> = _T_Module<G_Source>
            
            export namespace _set {
            }
            export type _set<G_Source> = _T_Module_Set<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['module', _T_Module<G_Source>]
            | readonly ['set', _T_Module_Set<G_Source>]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['module', _T_Module<G_Source>]
        | readonly ['set', _T_Module_Set<G_Source>]
    >
}

export namespace Selection {
    
    export namespace start {
        
        export namespace SG {
            export type abort<G_Source> = null
            export type argument<G_Source> = string
            
            export namespace call {
                
                export namespace _arguments {
                    
                    export namespace O {
                        
                        export namespace D {
                        }
                        export type D<G_Source> = _T_Initialization<G_Source>
                    }
                    export type O<G_Source> = _i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>
                }
                export type _arguments<G_Source> = _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                
                export namespace context {
                }
                export type context<G_Source> = _T_Selection<G_Source>
                
                export namespace source {
                }
                export type source<G_Source> = _T_Selection<G_Source>
            }
            export type call<G_Source> = {
                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                readonly 'context': _T_Selection<G_Source>
                readonly 'source': _T_Selection<G_Source>
            }
            export type context<G_Source> = null
            export type implement_me<G_Source> = null
            
            export namespace imported_variable {
                export type _import<G_Source> = string
                export type variable<G_Source> = string
            }
            export type imported_variable<G_Source> = {
                readonly 'import': string
                readonly 'variable': string
            }
            export type parameter<G_Source> = string
            
            export namespace transform_optional_value {
                
                export namespace if_not_set {
                }
                export type if_not_set<G_Source> = _T_Selection<G_Source>
                
                export namespace if_set {
                }
                export type if_set<G_Source> = _T_Selection<G_Source>
                
                export namespace source {
                }
                export type source<G_Source> = _T_Selection<G_Source>
            }
            export type transform_optional_value<G_Source> = {
                readonly 'if not set': _T_Selection<G_Source>
                readonly 'if set': _T_Selection<G_Source>
                readonly 'source': _T_Selection<G_Source>
            }
            export type variable<G_Source> = string
        }
        export type SG<G_Source> = 
            | readonly ['abort', null]
            | readonly ['argument', string]
            | readonly ['call', {
                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
                readonly 'context': _T_Selection<G_Source>
                readonly 'source': _T_Selection<G_Source>
            }]
            | readonly ['context', null]
            | readonly ['implement me', null]
            | readonly ['imported variable', {
                readonly 'import': string
                readonly 'variable': string
            }]
            | readonly ['parameter', string]
            | readonly ['transform optional value', {
                readonly 'if not set': _T_Selection<G_Source>
                readonly 'if set': _T_Selection<G_Source>
                readonly 'source': _T_Selection<G_Source>
            }]
            | readonly ['variable', string]
    }
    export type start<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['abort', null]
        | readonly ['argument', string]
        | readonly ['call', {
            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _T_Initialization<G_Source>>>
            readonly 'context': _T_Selection<G_Source>
            readonly 'source': _T_Selection<G_Source>
        }]
        | readonly ['context', null]
        | readonly ['implement me', null]
        | readonly ['imported variable', {
            readonly 'import': string
            readonly 'variable': string
        }]
        | readonly ['parameter', string]
        | readonly ['transform optional value', {
            readonly 'if not set': _T_Selection<G_Source>
            readonly 'if set': _T_Selection<G_Source>
            readonly 'source': _T_Selection<G_Source>
        }]
        | readonly ['variable', string]
    >
    
    export namespace tail {
        export type L<G_Source> = string
    }
    export type tail<G_Source> = _i_core._T_List<G_Source, string>
}

export namespace Type_Parameters {
    export type D<G_Source> = null
}

export namespace Variables {
    
    export namespace D {
        
        export namespace initialization {
        }
        export type initialization<G_Source> = _T_Initialization<G_Source>
        
        export namespace _type {
            
            export namespace O {
            }
            export type O<G_Source> = _i_imports_interface._T_Type<G_Source>
        }
        export type _type<G_Source> = _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
    }
    export type D<G_Source> = {
        readonly 'initialization': _T_Initialization<G_Source>
        readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type<G_Source>>
    }
}
