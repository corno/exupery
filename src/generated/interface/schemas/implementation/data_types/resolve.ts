import * as _pt from 'exupery-core-types'

import * as _i_resolve from "../../../core/resolve"
import * as _i_resolved from "./resolved"
import * as _i_unresolved from "./unresolved"

// **** TYPES

export type _T_Initialization<M_Source> = (
    $$_: _i_unresolved._T_Initialization<M_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<M_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Initialization

export type _T_Literal<M_Source> = (
    $$_: _i_unresolved._T_Literal<M_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<M_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Literal

export type _T_Module<M_Source> = (
    $$_: _i_unresolved._T_Module<M_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<M_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Module

export type _T_Module_Set<M_Source> = (
    $$_: _i_unresolved._T_Module_Set<M_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<M_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Module_Set

export type _T_Selection<M_Source> = (
    $$_: _i_unresolved._T_Selection<M_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<M_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Selection

export type _T_Type_Parameters<M_Source> = (
    $$_: _i_unresolved._T_Type_Parameters<M_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<M_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Type_Parameters

export type _T_Variables<M_Source> = (
    $$_: _i_unresolved._T_Variables<M_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<M_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Variables

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Initialization<M_Source> = _T_Initialization<M_Source>

export type Literal<M_Source> = _T_Literal<M_Source>

export type Module<M_Source> = _T_Module<M_Source>

export type Module_Set<M_Source> = _T_Module_Set<M_Source>

export type Selection<M_Source> = _T_Selection<M_Source>

export type Type_Parameters<M_Source> = _T_Type_Parameters<M_Source>

export type Variables<M_Source> = _T_Variables<M_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Initialization {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Initialization<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Initialization
}

export namespace _T_Literal {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Literal<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Literal
}

export namespace _T_Module {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Module<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Module
}

export namespace _T_Module_Set {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Module_Set<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Module_Set
}

export namespace _T_Selection {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Selection<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Selection
}

export namespace _T_Type_Parameters {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Type_Parameters<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Type_Parameters
}

export namespace _T_Variables {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Variables<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Variables
}

// *** ALIASES FOR NESTED TYPES

export namespace Initialization {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Initialization<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Initialization
}

export namespace Literal {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Literal<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Literal
}

export namespace Module {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Module<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Module
}

export namespace Module_Set {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Module_Set<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Module_Set
}

export namespace Selection {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Selection<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Selection
}

export namespace Type_Parameters {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Type_Parameters<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Type_Parameters
}

export namespace Variables {
    
    export namespace CONTEXT {
        export type Source<M_Source> = M_Source
    }
    export type CONTEXT<M_Source> = _i_unresolved._T_Variables<M_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<M_Source> = M_Source
        }
        export type location_2_string<M_Source> = _i_resolve._T_Location_2_String<M_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<M_Source> = null
            
            export namespace values {
            }
            export type values<M_Source> = null
        }
        export type parameters<M_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<M_Source> = _i_resolved._T_Variables
}
