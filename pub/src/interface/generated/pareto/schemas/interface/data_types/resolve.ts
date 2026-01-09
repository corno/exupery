import * as _pi from 'pareto-core-interface'

import * as _i_resolve from "pareto-core-internals/dist/algorithm_types/refiner/resolve"
import * as _i_resolved from "./source"
import * as _i_unresolved from "./target"

// **** TYPES

export type _T_Module = <F_Source>(
    $$_: _i_unresolved._T_Module<F_Source>,
    $$_p: {
        readonly 'parameters': {
            readonly 'values': null
            readonly 'lookups': null
        }
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
    },
) => _i_resolved._T_Module

export type _T_Type_Parameters = <F_Source>(
    $$_: _i_unresolved._T_Type_Parameters<F_Source>,
    $$_p: {
        readonly 'parameters': {
            readonly 'values': null
            readonly 'lookups': null
        }
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
    },
) => _i_resolved._T_Type_Parameters

export type _T_Module_Set = <F_Source>(
    $$_: _i_unresolved._T_Module_Set<F_Source>,
    $$_p: {
        readonly 'parameters': {
            readonly 'values': null
            readonly 'lookups': null
        }
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
    },
) => _i_resolved._T_Module_Set

export type _T_Imports = <F_Source>(
    $$_: _i_unresolved._T_Imports<F_Source>,
    $$_p: {
        readonly 'parameters': {
            readonly 'values': null
            readonly 'lookups': null
        }
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
    },
) => _i_resolved._T_Imports

export type _T_Type_Arguments = <F_Source>(
    $$_: _i_unresolved._T_Type_Arguments<F_Source>,
    $$_p: {
        readonly 'parameters': {
            readonly 'values': null
            readonly 'lookups': null
        }
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
    },
) => _i_resolved._T_Type_Arguments

export type _T_Type_Parameter_Selection = <F_Source>(
    $$_: _i_unresolved._T_Type_Parameter_Selection<F_Source>,
    $$_p: {
        readonly 'parameters': {
            readonly 'values': null
            readonly 'lookups': null
        }
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
    },
) => _i_resolved._T_Type_Parameter_Selection

export type _T_Type = <F_Source>(
    $$_: _i_unresolved._T_Type<F_Source>,
    $$_p: {
        readonly 'parameters': {
            readonly 'values': null
            readonly 'lookups': null
        }
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
    },
) => _i_resolved._T_Type

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Module = _T_Module

export type Type_Parameters = _T_Type_Parameters

export type Module_Set = _T_Module_Set

export type Imports = _T_Imports

export type Type_Arguments = _T_Type_Arguments

export type Type_Parameter_Selection = _T_Type_Parameter_Selection

export type Type = _T_Type

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Module {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Module<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Module
}

export namespace _T_Type_Parameters {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Parameters<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Parameters
}

export namespace _T_Module_Set {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Module_Set<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Module_Set
}

export namespace _T_Imports {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Imports<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Imports
}

export namespace _T_Type_Arguments {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Arguments<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Arguments
}

export namespace _T_Type_Parameter_Selection {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Parameter_Selection<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Parameter_Selection
}

export namespace _T_Type {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type
}

// *** ALIASES FOR NESTED TYPES

export namespace Module {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Module<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Module
}

export namespace Type_Parameters {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Parameters<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Parameters
}

export namespace Module_Set {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Module_Set<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Module_Set
}

export namespace Imports {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Imports<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Imports
}

export namespace Type_Arguments {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Arguments<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Arguments
}

export namespace Type_Parameter_Selection {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Parameter_Selection<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Parameter_Selection
}

export namespace Type {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type<F_Source>
    
    export namespace PARAMS {
        
        export namespace parameters {
            
            export namespace values {
            }
            export type values<F_Source> = null
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'values': null
            readonly 'lookups': null
        }
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type
}
