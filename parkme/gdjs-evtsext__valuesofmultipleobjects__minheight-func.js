
if (typeof gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight !== "undefined") {
  gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight = {};
gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.forEachIndex2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.forEachObjects2 = [];

gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.forEachTemporary2 = null;

gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.forEachTotalCount2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects1= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects2= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects3= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects4= [];


gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects2, gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects3[i].getHeight() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MinHeight")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects3[k] = gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects3 */
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MinHeight").setNumber((( gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects3[0].getHeight()));
}}

}


};gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects1);
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MinHeight").setNumber((( gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects1[0].getHeight()));
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects1);

for (gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.forEachIndex2 = 0;gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.forEachIndex2 < gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects1.length;++gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.forEachIndex2) {
gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects2.length = 0;


gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.forEachTemporary2 = gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects1[gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.forEachIndex2];
gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects2.push(gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MinHeight")); }}}

}


};

gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects1.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects2.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects3.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.GDObjectObjects4.length = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.eventsList1(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ValuesOfMultipleObjects__MinHeight.registeredGdjsCallbacks = [];