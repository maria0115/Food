(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"Form" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("10pt \"NanumGothic\""),
						"color" : nexacro.ColorObject("#000000")
					}
				}
			},
			"ChildFrame" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0")
					}
				}
			},
			"FrameSet" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0")
					}
				}
			},
			"TileFrameSet" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0")
					}
				}
			},
			"HFrameSet" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0")
					}
				}
			},
			"VFrameSet" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0")
					}
				}
			},
			"MainFrame" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("2px solid #1565c0")
					},
					"deactivate" :
					{
						"border" : nexacro.BorderObject("2px solid #64b5f6")
					}
				}
			},
			"titleicon" :
			{
				"parent" :
				{
					"titlebar" :
					{
						"parent" :
						{
							"MainFrame" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/titlebar_icon_nexacro17.ico')")
									}
								}
							}
						}
					},
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 14pt \"NanumGothic\""),
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_icon.png\")"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
							}
						}
					}
				}
			},
			"TitleBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
					},
					"deactivate" :
					{
					}
				}
			},
			"minbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_N.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_P.png\")")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_O.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_D.png\")")
							}
						}
					}
				}
			},
			"maxbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_N.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_P.png\")")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_O.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_D.png\")")
							}
						}
					}
				}
			},
			"normalbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_N.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_P.png\")")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_O.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_D.png\")")
							}
						}
					}
				}
			},
			"closebutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_P.png\")")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_O.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid transparent"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_D.png\")")
							}
						}
					}
				}
			},
			"StatusBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0"),
						"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
					}
				}
			},
			"resizegrip" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/img_grip.png\")")
							}
						}
					}
				}
			},
			"progressbar" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("5px solid transparent"),
								"color" : nexacro.ColorObject("#000000")
							}
						}
					}
				}
			},
			"progressbartext" :
			{
				"parent" :
				{
					"progressbar" :
					{
						"parent" :
						{
							"StatusBarControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("bold 8pt \"NanumGothic\""),
										"color" : nexacro.ColorObject("#ffffff")
									}
								}
							}
						}
					},
					"ProgressBar" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 8pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#ffffff")
							}
						}
					},
					"ProgressBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 8pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#ffffff")
							}
						}
					}
				}
			},
			"Static" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("14pt \"NanumGothic\""),
						"color" : nexacro.ColorObject("#333333")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					}
				}
			},
			"StaticControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("14pt \"NanumGothic\""),
						"color" : nexacro.ColorObject("#333333")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					}
				}
			},
			"Button" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c0c0c0")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #9f9f9f")
					},
					"pushed" :
					{
						"border" : nexacro.BorderObject("1px solid #666666")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#939393")
					}
				}
			},
			"Edit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #c0c0c0, 0px none"),
						"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#9a9a9a"),
						"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					}
				}
			},
			"MaskEdit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #c0c0c0, 0px none"),
						"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#9a9a9a"),
						"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					}
				}
			},
			"TextArea" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #bdbdbd"),
						"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc"),
						"color" : nexacro.ColorObject("#999999")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #c0c0c0"),
						"color" : nexacro.ColorObject("#333333")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					}
				}
			},
			"TextAreaControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #bdbdbd"),
						"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc"),
						"color" : nexacro.ColorObject("#999999")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #c0c0c0"),
						"color" : nexacro.ColorObject("#333333")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					}
				}
			},
			"EditControl" :
			{
				"self" :
				{
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					}
				}
			},
			"MaskEditControl" :
			{
				"self" :
				{
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					}
				}
			},
			"Calendar" :
			{
				"self" :
				{
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c0c0c0")
					}
				}
			},
			"CalendarControl" :
			{
				"self" :
				{
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c0c0c0")
					}
				}
			},
			"Spin" :
			{
				"self" :
				{
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c0c0c0")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #136cc8")
					}
				}
			},
			"SpinControl" :
			{
				"self" :
				{
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					}
				}
			},
			"spinedit" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#9a9a9a")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"font" : nexacro.FontObject("12pt \"NanumGothic\""),
												"color" : nexacro.ColorObject("#333333"),
												"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
											},
											"mouseover" :
											{
												"font" : nexacro.FontObject("12pt \"NanumGothic\""),
												"color" : nexacro.ColorObject("#333333"),
												"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#9a9a9a")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"font" : nexacro.FontObject("12pt \"NanumGothic\""),
												"color" : nexacro.ColorObject("#333333"),
												"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
											},
											"mouseover" :
											{
												"font" : nexacro.FontObject("12pt \"NanumGothic\""),
												"color" : nexacro.ColorObject("#333333"),
												"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#9a9a9a")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"spinupbutton" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_P.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_D.png\")")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
											},
											"mouseover" :
											{
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_P.png\")")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
											},
											"mouseover" :
											{
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_P.png\")")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"spindownbutton" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_P.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_D.png\")")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
											},
											"mouseover" :
											{
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_P.png\")")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
											},
											"mouseover" :
											{
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_P.png\")")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"tabpage" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cccccc")
							}
						}
					}
				}
			},
			"tabbuttonitem" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cccccc"),
								"font" : nexacro.FontObject("bold 14pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#1f1f1f"),
								"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #cccccc, 1px solid #ffffff, 1px solid #cccccc"),
								"color" : nexacro.ColorObject("#212121")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #cccccc, 1px solid #ffffff, 1px solid #cccccc"),
								"color" : nexacro.ColorObject("#212121")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #4ca0e2")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e5e5e5"),
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"extrabutton" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_N.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_O.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_D.png\")")
									}
								}
							}
						}
					}
				}
			},
			"nextbutton" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cccccc"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")"),
								"padding" : nexacro.PaddingObject("3px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e5e5e5"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #606060"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_P.png\")")
							}
						}
					},
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_next_N.png\")")
									},
									"pushed" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					},
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menunext_N.png\")"),
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menunext_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menunext_D.png\")")
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_N.png\")"),
								"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_D.png\")")
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_N.png\")"),
								"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_D.png\")")
							}
						}
					}
				}
			},
			"prevbutton" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cccccc"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")"),
								"padding" : nexacro.PaddingObject("3px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e5e5e5"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #606060"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_P.png\")")
							}
						}
					},
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_prev_N.png\")")
									},
									"pushed" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					},
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menuprev_N.png\")"),
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menuprev_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menuprev_D.png\")")
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_N.png\")"),
								"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_D.png\")")
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_N.png\")"),
								"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_D.png\")")
							}
						}
					}
				}
			},
			"CheckBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"color" : nexacro.ColorObject("#232323"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NN.png\")")
					},
					"selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NS.png\")")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#9a9a9a"),
						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DN.png\")")
					},
					"disabled_selected" :
					{
						"color" : nexacro.ColorObject("#9a9a9a"),
						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DS.png\")")
					}
				}
			},
			"CheckBoxControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"color" : nexacro.ColorObject("#232323"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NN.png\")")
					},
					"selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NS.png\")")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#9a9a9a"),
						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DN.png\")")
					},
					"disabled_selected" :
					{
						"color" : nexacro.ColorObject("#9a9a9a"),
						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DS.png\")")
					}
				}
			},
			"radioitem" :
			{
				"parent" :
				{
					"Radio" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#232323"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_NN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_NS.png\")")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#9c9c9c"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_DN.png\")")
							},
							"disabled_selected" :
							{
								"color" : nexacro.ColorObject("#9c9c9c"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_DS.png\")")
							}
						}
					}
				}
			},
			"calendaredit" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#232323"),
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#9a9a9a")
							}
						}
					},
					"CalendarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#232323"),
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#9a9a9a")
							}
						}
					}
				}
			},
			"dropbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")")
							},
							"mouseover" :
							{
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_P.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e5e5e5"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_D.png\")")
							}
						}
					},
					"CalendarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")")
							},
							"mouseover" :
							{
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_P.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e5e5e5"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_D.png\")")
							}
						}
					},
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_N.png\")")
							},
							"mouseover" :
							{
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_D.png\")")
							}
						}
					},
					"ComboControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_N.png\")")
							},
							"mouseover" :
							{
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_D.png\")")
							}
						}
					}
				}
			},
			"calendarspinupbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_D.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
							}
						}
					},
					"CalendarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_D.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
							}
						}
					}
				}
			},
			"calendarspindownbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_D.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
							}
						}
					},
					"CalendarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_D.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
							}
						}
					}
				}
			},
			"DatePickerControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e5e5e5"),
						"color" : nexacro.ColorObject("#000000")
					}
				}
			},
			"head" :
			{
				"parent" :
				{
					"DatePickerControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 14pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
							}
						}
					},
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d7d7d7")
							}
						}
					}
				}
			},
			"monthstatic" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("bold 14pt \"NanumGothic\""),
										"color" : nexacro.ColorObject("#ffffff")
									}
								}
							}
						}
					}
				}
			},
			"yearstatic" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("bold 14pt \"NanumGothic\""),
										"color" : nexacro.ColorObject("#ffffff")
									}
								}
							}
						}
					}
				}
			},
			"yearspin" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #cccccc")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #cccccc")
									}
								}
							}
						}
					}
				}
			},
			"monthspin" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #cccccc")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #cccccc")
									}
								}
							}
						}
					}
				}
			},
			"body" :
			{
				"parent" :
				{
					"DatePickerControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 14pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#878787")
							}
						}
					},
					"ListView" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("normal 10pt/normal \"NanumGothic\"")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("normal 10pt/normal \"NanumGothic\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("normal 10pt/normal \"NanumGothic\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("normal 10pt/normal \"NanumGothic\"")
							},
							"selected" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"weekitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("8pt \"NanumGothic\""),
										"color" : nexacro.ColorObject("#878787")
									}
								}
							}
						}
					}
				}
			},
			"dayitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("8pt \"NanumGothic\""),
										"color" : nexacro.ColorObject("#313131"),
										"border" : nexacro.BorderObject("0px solid #0078d6")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #0b7ed7")
									},
									"selected" :
									{
										"border" : nexacro.BorderObject("1px solid #0078d6"),
										"font" : nexacro.FontObject("bold 8pt \"NanumGothic\""),
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#cccccc")
									},
									"today" :
									{
										"border" : nexacro.BorderObject("1px solid #0078d6")
									},
									"trailingday" :
									{
										"color" : nexacro.ColorObject("#999999")
									}
								}
							}
						}
					}
				}
			},
			"incbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("3px solid #f2f2f2"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_P.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_O.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_D.png\")")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("3px solid #f2f2f2"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_P.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_O.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_D.png\")")
							}
						}
					}
				}
			},
			"decbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("3px solid #f2f2f2"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_P.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_O.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_D.png\")")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("3px solid #f2f2f2"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_P.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_O.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_D.png\")")
							}
						}
					}
				}
			},
			"trackbar" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 3px solid transparent, 0px none, 3px solid transparent")
							},
							"pushed" :
							{
							},
							"mouseover" :
							{
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("3px solid transparent, 0px none, 3px solid transparent, 0px none")
							},
							"pushed" :
							{
							},
							"mouseover" :
							{
							}
						}
					},
					"VScrollIndicatorControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("2px solid transparent")
							},
							"pushed" :
							{
							},
							"mouseover" :
							{
							}
						}
					},
					"HScrollIndicatorControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("2px solid transparent")
							},
							"pushed" :
							{
							},
							"mouseover" :
							{
							}
						}
					}
				}
			},
			"Combo" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #999999")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #c0c0c0")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#919191"),
						"border" : nexacro.BorderObject("1px solid #cccccc")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #136cc8")
					}
				}
			},
			"ComboControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #999999")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #c0c0c0")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#919191"),
						"border" : nexacro.BorderObject("1px solid #cccccc")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #136cc8")
					}
				}
			},
			"comboedit" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#cccccc")
							}
						}
					},
					"ComboControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#cccccc")
							}
						}
					}
				}
			},
			"ListBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c0c0c0")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc"),
						"color" : nexacro.ColorObject("#9d9d9d")
					}
				}
			},
			"ListBoxControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c0c0c0")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc"),
						"color" : nexacro.ColorObject("#9d9d9d")
					}
				}
			},
			"listboxitem" :
			{
				"parent" :
				{
					"ListBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#2f2f2f"),
								"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
							},
							"mouseover" :
							{
							},
							"selected" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#969696")
							},
							"disabled_selected" :
							{
							}
						}
					},
					"ListBoxControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#2f2f2f"),
								"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
							},
							"mouseover" :
							{
							},
							"selected" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#969696")
							},
							"disabled_selected" :
							{
							}
						}
					}
				}
			},
			"StepControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
					}
				}
			},
			"stepitem" :
			{
				"parent" :
				{
					"StepControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Step_N.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/img_Step_S.png\")")
							}
						}
					}
				}
			},
			"Menu" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc")
					}
				}
			},
			"menuitem" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
							},
							"selected" :
							{
							},
							"mouseover" :
							{
							}
						}
					}
				}
			},
			"PopupMenu" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #ebebeb")
					}
				}
			},
			"PopupMenuControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #ebebeb")
					}
				}
			},
			"popupmenuitem" :
			{
				"parent" :
				{
					"PopupMenu" :
					{
						"self" :
						{
							"selected" :
							{
							},
							"mouseover" :
							{
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"selected" :
							{
							},
							"mouseover" :
							{
							}
						}
					}
				}
			},
			"popupmenuitemcheckbox" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/img_popmenu_check_NS.png\")")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/img_popmenu_check_NS.png\")")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemtext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#252525")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#252525")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemhotkeytext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#7a7a7a")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#7a7a7a")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemexpandimage" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/img_menuexpand_N.png\")")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/img_menuexpand_N.png\")")
									}
								}
							}
						}
					}
				}
			},
			"ProgressBar" :
			{
				"self" :
				{
					"disabled" :
					{
					}
				}
			},
			"ProgressBarControl" :
			{
				"self" :
				{
					"disabled" :
					{
					}
				}
			},
			"progressbaritem" :
			{
				"parent" :
				{
					"ProgressBar" :
					{
						"self" :
						{
							"disabled" :
							{
							}
						}
					},
					"ProgressBarControl" :
					{
						"self" :
						{
							"disabled" :
							{
							}
						}
					}
				}
			},
			"ImageViewer" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #90caf9")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0")
					}
				}
			},
			"imagetext" :
			{
				"parent" :
				{
					"ImageViewer" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("16pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#212121")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"Div" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0"),
						"font" : nexacro.FontObject("16pt \"NanumGothic\""),
						"color" : nexacro.ColorObject("#212121")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #90caf9")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0"),
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"PopupDiv" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0"),
						"font" : nexacro.FontObject("16pt \"NanumGothic\""),
						"color" : nexacro.ColorObject("#212121")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #90caf9")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0"),
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"groupboxcontents" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cccccc"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 50px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #f2f2f2")
							}
						}
					}
				}
			},
			"groupboxtitle" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cccccc"),
								"color" : nexacro.ColorObject("#212121"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_groupboxtit.png\")"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 10px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#9f9f9f"),
								"border" : nexacro.BorderObject("1px solid #f2f2f2"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_groupboxtit_D.png\")")
							}
						}
					}
				}
			},
			"fileuploaditemedit" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #c0c0c0"),
										"font" : nexacro.FontObject("11pt \"NanumGothic\""),
										"color" : nexacro.ColorObject("#202020")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #cccccc"),
										"color" : nexacro.ColorObject("#959595")
									}
								}
							}
						}
					}
				}
			},
			"fileuploaditembutton" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("12pt \"NanumGothic\""),
										"color" : nexacro.ColorObject("#ffffff"),
										"textPadding" : nexacro.PaddingObject("0px 15px 0px 15px")
									},
									"mouseover" :
									{
										"font" : nexacro.FontObject("12pt \"NanumGothic\""),
										"color" : nexacro.ColorObject("#ffffff"),
										"textPadding" : nexacro.PaddingObject("0px 15px 0px 15px")
									},
									"pushed" :
									{
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #cccccc"),
										"color" : nexacro.ColorObject("#939393")
									}
								}
							}
						}
					}
				}
			},
			"FileDownload" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("12pt \"NanumGothic\""),
						"color" : nexacro.ColorObject("#ffffff"),
						"textPadding" : nexacro.PaddingObject("0px 10px 0px 10px")
					},
					"focused" :
					{
						"font" : nexacro.FontObject("12pt \"NanumGothic\""),
						"color" : nexacro.ColorObject("#ffffff"),
						"textPadding" : nexacro.PaddingObject("0px 10px 0px 10px")
					},
					"mouseover" :
					{
					},
					"pushed" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#939393")
					}
				}
			},
			"cell" :
			{
				"parent" :
				{
					"row" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("1px solid #e0e0e0"),
												"color" : nexacro.ColorObject("#242424")
											},
											"selected" :
											{
												"border" : nexacro.BorderObject("1px solid #e0e0e0"),
												"color" : nexacro.ColorObject("#242424")
											}
										}
									}
								}
							},
							"summary" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("1px solid #e5e5e5"),
												"color" : nexacro.ColorObject("#000000")
											}
										}
									}
								}
							},
							"body" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("1px solid #f5f5f5"),
												"color" : nexacro.ColorObject("#000000")
											},
											"selected" :
											{
											},
											"mouseover" :
											{
											},
											"blinked" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							}
						}
					},
					"body" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"readonly" :
									{
										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #ebebeb")
									}
								}
							}
						}
					},
					"detail" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"readonly" :
									{
										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #ebebeb")
									}
								}
							}
						}
					}
				}
			},
			"cellbutton" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"head" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #c0c0c0")
													},
													"selected" :
													{
														"border" : nexacro.BorderObject("1px solid #c0c0c0")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #c0c0c0")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #9f9f9f")
													},
													"pushed" :
													{
														"border" : nexacro.BorderObject("1px solid #666666")
													},
													"disabled" :
													{
														"color" : nexacro.ColorObject("#939393")
													}
												}
											}
										}
									},
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #c0c0c0")
													},
													"selected" :
													{
														"border" : nexacro.BorderObject("1px solid #c0c0c0")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #c0c0c0")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #9f9f9f")
													},
													"pushed" :
													{
														"border" : nexacro.BorderObject("1px solid #666666")
													},
													"disabled" :
													{
														"color" : nexacro.ColorObject("#939393")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #c0c0c0")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #9f9f9f")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #666666")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#939393")
							}
						}
					}
				}
			},
			"subcell" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #f5f5f5"),
														"color" : nexacro.ColorObject("#000000")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #f5f5f5"),
														"color" : nexacro.ColorObject("#000000")
													},
													"mouseover" :
													{
													},
													"selected" :
													{
													},
													"blinked" :
													{
														"color" : nexacro.ColorObject("#ffffff")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"cellexpandbutton" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"font" : nexacro.FontObject("10pt \"NanumGothic\""),
														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
													},
													"selected" :
													{
														"font" : nexacro.FontObject("10pt \"NanumGothic\""),
														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
													},
													"focused" :
													{
														"font" : nexacro.FontObject("10pt \"NanumGothic\""),
														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
													},
													"mouseover" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_P.png\")")
													},
													"pushed" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_P.png\")")
													},
													"disabled" :
													{
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"celledit" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #c0c0c0, 0px none")
													},
													"disabled" :
													{
														"color" : nexacro.ColorObject("#9a9a9a"),
														"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
													},
													"readonly" :
													{
														"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #c0c0c0, 0px none")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#9a9a9a"),
								"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
							}
						}
					}
				}
			},
			"cellmaskedit" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #999999"),
														"color" : nexacro.ColorObject("#000000"),
														"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
													},
													"disabled" :
													{
														"color" : nexacro.ColorObject("#9a9a9a"),
														"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
													},
													"readonly" :
													{
														"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #999999"),
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#9a9a9a"),
								"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
							}
						}
					}
				}
			},
			"celltextarea" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #bdbdbd"),
														"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
													},
													"disabled" :
													{
														"color" : nexacro.ColorObject("#9a9a9a"),
														"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
													},
													"readonly" :
													{
														"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #bdbdbd"),
								"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#9a9a9a"),
								"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
							}
						}
					}
				}
			},
			"treeitembutton" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"expand" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeCollapse.png\")")
															},
															"collapse" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeExpand.png\")")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"treeitemimage" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"leaf" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeItem.png\")")
															},
															"collapse" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeClose.png\")")
															},
															"expand" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeOpen.png\")")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"celltreeline" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px dotted #c7c7c7")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"selection" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"Grid" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("2px solid #1565c0")
									}
								}
							}
						}
					}
				}
			},
			"Plugin" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0")
					}
				}
			},
			"PluginControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0")
					}
				}
			},
			"WebBrowser" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0")
					}
				}
			},
			"WebBrowserControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0")
					}
				}
			},
			"Sketch" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#9a9a9a")
					}
				}
			},
			"ListView" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc"),
						"color" : nexacro.ColorObject("#000000")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc"),
						"color" : nexacro.ColorObject("#000000")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc"),
						"color" : nexacro.ColorObject("#000000")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc"),
						"color" : nexacro.ColorObject("#000000")
					},
					"disabled" :
					{
					}
				}
			},
			"detail" :
			{
				"parent" :
				{
					"ListView" :
					{
						"self" :
						{
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("normal 10pt/normal \"NanumGothic\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("normal 10pt/normal \"NanumGothic\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("normal 10pt/normal \"NanumGothic\"")
							},
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("normal 10pt/normal \"NanumGothic\"")
							},
							"selected" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"expandbar" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_N.png\")"),
										"border" : nexacro.BorderObject("1px solid #c0c0c0")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #9f9f9f")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#939393")
									},
									"collapse" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_N.png\")")
									},
									"expand" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_expand.png')")
									}
								}
							}
						}
					}
				}
			}
		},
		{
			"includeStatusMap" : true,
			"hasListViewExpandStatus" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon_nexacro17.ico")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon.png")] = { width:13, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/btn_min_N.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_min_P.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_min_O.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_min_D.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_max_N.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_max_P.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_max_O.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_max_D.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_normal_N.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_normal_P.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_normal_O.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_normal_D.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_close_N.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_close_P.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_close_O.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_close_D.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/img_grip.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_N.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_P.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_D.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_N.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_P.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_D.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_N.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_O.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_D.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_N.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_N.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_P.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_P.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_NN.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_NS.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_DN.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_DS.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NN.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NS.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DN.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DS.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_N.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_P.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_D.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_next_N.png")] = { width:9, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_prev_N.png")] = { width:9, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_N.png")] = { width:9, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_P.png")] = { width:9, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_O.png")] = { width:9, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_D.png")] = { width:9, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_N.png")] = { width:9, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_P.png")] = { width:9, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_O.png")] = { width:9, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_D.png")] = { width:9, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_N.png")] = { width:10, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_P.png")] = { width:10, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_O.png")] = { width:10, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_D.png")] = { width:10, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_N.png")] = { width:10, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_P.png")] = { width:10, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_O.png")] = { width:10, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_D.png")] = { width:10, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_drop_N.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_drop_D.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_Step_N.png")] = { width:20, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/img_Step_S.png")] = { width:20, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_N.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_P.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_D.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_N.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_P.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_D.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_N.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_P.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_D.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_N.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_P.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_D.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/img_popmenu_check_NS.png")] = { width:12, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_menuexpand_N.png")] = { width:7, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit_D.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_N.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_P.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeCollapse.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeExpand.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeItem.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeClose.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeOpen.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/btn_expand.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_drop_P.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_D.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_O.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_D.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_O.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/pop_menu_icon.png")] = { width:14, height:14 };
	};
}
)();
