/* SystemJS module definition */
declare var module: NodeModule;

declare var jquery: any;

declare var summary: any;
interface jquery {
  tooltip(options?: any): any;
}
interface NodeModule {
  id: string;
}
