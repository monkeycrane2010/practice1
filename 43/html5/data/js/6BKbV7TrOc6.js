﻿window.globalProvideData('slide', '{"title":"Watch this short video (REQUIRED)","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":2,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide2","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6BKbV7TrOc6","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"69FyTrngnGX.6Zw9rajoABw.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"69FyTrngnGX.5a6sCOFBzyh.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.6LZfNBoQo66"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5e7HAQa6gor.InvalidPromptSlide"}}]}]},"ReviewInt_69FyTrngnGX":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"69FyTrngnGX.6Zw9rajoABw"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"69FyTrngnGX.5a6sCOFBzyh"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_69FyTrngnGX","typea":"var","valueb":"5Y28C6FtoCc","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns10111001111"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5Y28C6FtoCc.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_69FyTrngnGX"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5Y28C6FtoCc.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_69FyTrngnGX"}]}]}]},"ReviewIntCorrectIncorrect_69FyTrngnGX":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"69FyTrngnGX.6Zw9rajoABw"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"69FyTrngnGX.5a6sCOFBzyh"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_69FyTrngnGX":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_69FyTrngnGX"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111001111"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111001111"}]}]},"DisableChoices_69FyTrngnGX":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"69FyTrngnGX.6Zw9rajoABw.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"69FyTrngnGX.5a6sCOFBzyh.ActGrpSetDisabledState"}]},"69FyTrngnGX_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6LZfNBoQo66.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_69FyTrngnGX"}]}]},"SetLayout_pxabnsnfns10111001111":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111001111"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111001111"}]}]},"NavigationRestrictionNextSlide_6BKbV7TrOc6":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6a960rqSX4A"}}]},"NavigationRestrictionPreviousSlide_6BKbV7TrOc6":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns10111001111"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns10111001111"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5e7HAQa6gor","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5e7HAQa6gor","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_69FyTrngnGX","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_69FyTrngnGX"}],"elseActions":[{"kind":"exe_actiongroup","id":"69FyTrngnGX_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_69FyTrngnGX","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_69FyTrngnGX","typea":"var","valueb":"5Y28C6FtoCc","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5Y28C6FtoCc"},"completed_slide_ref":{"type":"string","value":"_player.68dWu6m0erp.6MLe5lRShmW"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_69FyTrngnGX","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_69FyTrngnGX","typea":"var","valueb":"5Y28C6FtoCc","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5Y28C6FtoCc"},"completed_slide_ref":{"type":"string","value":"_player.68dWu6m0erp.6MLe5lRShmW"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6BKbV7TrOc6"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6BKbV7TrOc6"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69FyTrngnGX"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69FyTrngnGX.5a6sCOFBzyh"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69FyTrngnGX.6Zw9rajoABw"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6CiKy21SbG8"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5s9HQHBK4dl"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":292,"contentheight":92,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"checkbox","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6DrlLIqeoIN_-1443465869","id":"01","linkId":"txt__default_5a6sCOFBzyh","type":"acctext","xPos":10,"yPos":5,"xAccOffset":42,"yAccOffset":12,"width":206,"height":22,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"This is incorrect","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":17,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":159,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":9}}}],"shapemaskId":"","xPos":24,"yPos":46,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":134,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is incorrect","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is incorrect","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is incorrect","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is incorrect","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is incorrect","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is incorrect","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is incorrect","pngfb":false,"pr":{"l":"Lib","i":7}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is incorrect","pngfb":false,"pr":{"l":"Lib","i":7}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is incorrect","pngfb":false,"pr":{"l":"Lib","i":7}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is incorrect","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is incorrect","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is incorrect","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}}],"width":268,"height":46,"resume":true,"useHandCursor":true,"id":"5a6sCOFBzyh","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"adjustvar","variable":"_checked","operator":"toggle"},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"checkbox","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6HrclqbFVHB_-1469103408","id":"01","linkId":"txt__default_6Zw9rajoABw","type":"acctext","xPos":10,"yPos":5,"xAccOffset":42,"yAccOffset":12,"width":206,"height":22,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"This is correct","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":15,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":145,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":10}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":134,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is correct","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is correct","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is correct","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is correct","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is correct","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is correct","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is correct","pngfb":false,"pr":{"l":"Lib","i":7}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is correct","pngfb":false,"pr":{"l":"Lib","i":7}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is correct","pngfb":false,"pr":{"l":"Lib","i":7}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is correct","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is correct","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":46,"altText":"This is correct","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":47,"strokewidth":3}}}],"width":268,"height":46,"resume":true,"useHandCursor":true,"id":"6Zw9rajoABw","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"adjustvar","variable":"_checked","operator":"toggle"},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":true,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":true,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":392,"yPos":80,"tabIndex":1,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":134,"rotateYPos":211,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":268,"height":422,"strokewidth":0}},"width":292,"height":422,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":292,"bottom":422,"altText":"Pick Many","pngfb":false,"pr":{"l":"Lib","i":4}}},"id":"69FyTrngnGX"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6CiKy21SbG8_883663483","id":"01","linkId":"txt__default_6CiKy21SbG8","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":628,"height":34,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Watch this short video (REQUIRED)","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":26.365,"descent":7.227,"leading":0,"underlinePosition":-1.855,"underlineThickness":1.229,"xHeight":13.201}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":33,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":408,"bottom":39,"pngfb":false,"pr":{"l":"Lib","i":12}}}],"shapemaskId":"","xPos":36,"yPos":22,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":22,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":44,"altText":"Watch this short video (REQUIRED)","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":44,"strokewidth":0}},"width":648,"height":44,"resume":true,"useHandCursor":true,"id":"6CiKy21SbG8"},{"kind":"webobject","shouldScale":true,"url":"https://www.youtube.com/watch?v=8ae2nTek3Bs","html5Url":"https://www.youtube.com/watch?v=8ae2nTek3Bs","thumbAssetId":1,"loadtype":"onclick","objtype":"normal","shapemaskId":"","xPos":24,"yPos":86,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":191,"rotateYPos":206,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"width":382,"height":412,"resume":true,"useHandCursor":true,"id":"5s9HQHBK4dl"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"69FyTrngnGX_CorrectReview","id":"01","linkId":"69FyTrngnGX_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":14}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":13}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"69FyTrngnGX_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"69FyTrngnGX_IncorrectReview","id":"01","linkId":"69FyTrngnGX_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":16}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":15}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"69FyTrngnGX_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');