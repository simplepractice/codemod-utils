import { types } from 'recast';
declare function _print(ast: types.ASTNode): string;
declare function _traverse(isTypeScript?: boolean): (file: string, visitMethods?: types.Visitor) => types.ASTNode;
type Tools = {
    builders: typeof types.builders;
    print: typeof _print;
    traverse: typeof _traverse;
};
declare const tools: Tools;
export default tools;
