import * as _pt from 'exupery-core-types'

import * as _i_generic from "../../generic/resolve"
import * as _i_resolved from "./resolved"
import * as _i_unresolved from "./unresolved"

// **** TYPES

export type _T_Imports<G_Source> = (
    $$_: _i_unresolved._T_Imports<G_Source>,
    $$_p: {
        readonly 'location 2 string': _i_generic._T_Location_2_String<G_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Imports

export type _T_Module<G_Source> = (
    $$_: _i_unresolved._T_Module<G_Source>,
    $$_p: {
        readonly 'location 2 string': _i_generic._T_Location_2_String<G_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Module

export type _T_Module_Set<G_Source> = (
    $$_: _i_unresolved._T_Module_Set<G_Source>,
    $$_p: {
        readonly 'location 2 string': _i_generic._T_Location_2_String<G_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Module_Set

export type _T_Type<G_Source> = (
    $$_: _i_unresolved._T_Type<G_Source>,
    $$_p: {
        readonly 'location 2 string': _i_generic._T_Location_2_String<G_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Type

export type _T_Type_Arguments<G_Source> = (
    $$_: _i_unresolved._T_Type_Arguments<G_Source>,
    $$_p: {
        readonly 'location 2 string': _i_generic._T_Location_2_String<G_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Type_Arguments

export type _T_Type_Parameter_Selection<G_Source> = (
    $$_: _i_unresolved._T_Type_Parameter_Selection<G_Source>,
    $$_p: {
        readonly 'location 2 string': _i_generic._T_Location_2_String<G_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Type_Parameter_Selection

export type _T_Type_Parameters<G_Source> = (
    $$_: _i_unresolved._T_Type_Parameters<G_Source>,
    $$_p: {
        readonly 'location 2 string': _i_generic._T_Location_2_String<G_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Type_Parameters

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Imports<G_Source> = _T_Imports<G_Source>

export type Module<G_Source> = _T_Module<G_Source>

export type Module_Set<G_Source> = _T_Module_Set<G_Source>

export type Type<G_Source> = _T_Type<G_Source>

export type Type_Arguments<G_Source> = _T_Type_Arguments<G_Source>

export type Type_Parameter_Selection<G_Source> = _T_Type_Parameter_Selection<G_Source>

export type Type_Parameters<G_Source> = _T_Type_Parameters<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Imports {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Imports<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Imports
}

export namespace _T_Module {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Module<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Module
}

export namespace _T_Module_Set {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Module_Set<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Module_Set
}

export namespace _T_Type {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Type<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Type
}

export namespace _T_Type_Arguments {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Type_Arguments<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Type_Arguments
}

export namespace _T_Type_Parameter_Selection {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Type_Parameter_Selection<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Type_Parameter_Selection
}

export namespace _T_Type_Parameters {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Type_Parameters<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Type_Parameters
}

// *** ALIASES FOR NESTED TYPES

export namespace Imports {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Imports<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Imports
}

export namespace Module {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Module<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Module
}

export namespace Module_Set {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Module_Set<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Module_Set
}

export namespace Type {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Type<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Type
}

export namespace Type_Arguments {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Type_Arguments<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Type_Arguments
}

export namespace Type_Parameter_Selection {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Type_Parameter_Selection<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Type_Parameter_Selection
}

export namespace Type_Parameters {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Type_Parameters<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_generic._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Type_Parameters
}
