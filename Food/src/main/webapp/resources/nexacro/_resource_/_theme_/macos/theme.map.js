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
						"color" : nexacro.ColorObject("#474747"),
						"font" : nexacro.FontObject("10pt \"NanumGothic\"")
					}
				}
			},
			"MainFrame" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #dcdcdc")
					},
					"deactivate" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc")
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
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_icon.png\")"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
							},
							"deactivate" :
							{
								"color" : nexacro.ColorObject("#bcbcbc"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_icon_D.png\")")
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
						"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #aaaaaa, 0px none"),
						"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
					},
					"deactivate" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
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
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_P.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_O.png\")")
							},
							"disabled" :
							{
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
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_N.png\")"),
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_P.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_O.png\")")
							},
							"disabled" :
							{
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
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_default_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_default_P.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_default_O.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_default_D.png\")")
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
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_O.png\")")
							},
							"disabled" :
							{
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
						"border" : nexacro.BorderObject("1px solid #cccccc"),
						"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
					}
				}
			},
			"statustext" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("8pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#181818")
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
								"border" : nexacro.BorderObject("1px solid #cccccc")
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
										"font" : nexacro.FontObject("8pt \"NanumGothic\""),
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
								"font" : nexacro.FontObject("8pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#afafaf")
							}
						}
					},
					"ProgressBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("8pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#afafaf")
							}
						}
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
			"Static" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none #333333"),
						"color" : nexacro.ColorObject("#333333")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#b6b6b6")
					}
				}
			},
			"StaticControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none #333333"),
						"color" : nexacro.ColorObject("#333333")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#b6b6b6")
					}
				}
			},
			"Button" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa"),
						"color" : nexacro.ColorObject("#000000"),
						"textPadding" : nexacro.PaddingObject("0px 6px 0px 6px")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #737373")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1976d2")
					},
					"pushed" :
					{
						"border" : nexacro.BorderObject("1px solid #0c62fe"),
						"color" : nexacro.ColorObject("#ffffff")
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
						"border" : nexacro.BorderObject("1px solid #aaaaaa"),
						"color" : nexacro.ColorObject("#000000"),
						"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#bcbcbc"),
						"border" : nexacro.BorderObject("1px solid #dbdbdb")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
					}
				}
			},
			"MaskEdit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa"),
						"color" : nexacro.ColorObject("#000000"),
						"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#bcbcbc"),
						"border" : nexacro.BorderObject("1px solid #dbdbdb")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
					}
				}
			},
			"TextArea" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa"),
						"color" : nexacro.ColorObject("#000000"),
						"padding" : nexacro.PaddingObject("3px")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#bcbcbc"),
						"border" : nexacro.BorderObject("1px solid #dbdbdb")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
					}
				}
			},
			"TextAreaControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa"),
						"color" : nexacro.ColorObject("#000000"),
						"padding" : nexacro.PaddingObject("3px")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#bcbcbc"),
						"border" : nexacro.BorderObject("1px solid #dbdbdb")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
					}
				}
			},
			"EditControl" :
			{
				"self" :
				{
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
					}
				}
			},
			"MaskEditControl" :
			{
				"self" :
				{
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
					}
				}
			},
			"Calendar" :
			{
				"self" :
				{
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					}
				}
			},
			"CalendarControl" :
			{
				"self" :
				{
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					}
				}
			},
			"Spin" :
			{
				"self" :
				{
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #dbdbdb")
					}
				}
			},
			"SpinControl" :
			{
				"self" :
				{
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
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
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#bcbcbc")
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
												"color" : nexacro.ColorObject("#000000")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#b6b6b6")
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
												"color" : nexacro.ColorObject("#000000")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#b6b6b6")
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
							"focused" :
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
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinUp_N.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinUp_D.png\")")
											},
											"mouseover" :
											{
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinUp_P.png\")")
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
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinUp_N.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinUp_D.png\")")
											},
											"mouseover" :
											{
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinUp_P.png\")")
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
							"focused" :
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
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinDown_D.png\")")
											},
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinDown_N.png\")")
											},
											"mouseover" :
											{
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinDown_P.png\")")
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
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinDown_D.png\")")
											},
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinDown_N.png\")")
											},
											"mouseover" :
											{
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinDown_P.png\")")
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
								"border" : nexacro.BorderObject("1px solid #aaaaaa"),
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("5px 10px 5px 10px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #737373")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #aaaaaa"),
								"color" : nexacro.ColorObject("#999999")
							},
							"focused_selected" :
							{
								"border" : nexacro.BorderObject("1px solid #0156ff"),
								"font" : nexacro.FontObject("bold 10pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#ffffff")
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
										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_N.png\")"),
										"iconPosition" : "right"
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
								"border" : nexacro.BorderObject("1px solid #aaaaaa"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")"),
								"padding" : nexacro.PaddingObject("5px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #1976d2"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #1976d2"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #0c62fe"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_P.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #aaaaaa"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_D.png\")")
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
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_next_P.png\")")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #b1cff0")
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
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
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
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_N.png\")")
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
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_N.png\")")
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
								"border" : nexacro.BorderObject("1px solid #aaaaaa"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")"),
								"padding" : nexacro.PaddingObject("5px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #1976d2"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #1976d2"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #0c62fe"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_P.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #aaaaaa"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_D.png\")")
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
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_prev_P.png\")")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #b1cff0")
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
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
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
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_N.png\")")
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
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_N.png\")")
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
						"color" : nexacro.ColorObject("#1f1f1f"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
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
						"color" : nexacro.ColorObject("#1f1f1f"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
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
								"color" : nexacro.ColorObject("#1f1f1f"),
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
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#b6b6b6")
							}
						}
					},
					"CalendarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#b6b6b6")
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
							"focused" :
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
							"focused" :
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
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_P.png\")"),
								"color" : nexacro.ColorObject("#027bff")
							},
							"mouseover" :
							{
							},
							"pushed" :
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
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_P.png\")"),
								"color" : nexacro.ColorObject("#027bff")
							},
							"mouseover" :
							{
							},
							"pushed" :
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
							"focused" :
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
							"focused" :
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
							"focused" :
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
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
							}
						}
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
								"font" : nexacro.FontObject("bold 11pt \"NanumGothic\""),
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
								"border" : nexacro.BorderObject("1px solid #aaaaaa")
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
										"font" : nexacro.FontObject("bold 11pt \"NanumGothic\""),
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
										"font" : nexacro.FontObject("bold 11pt \"NanumGothic\""),
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
										"border" : nexacro.BorderObject("1px solid #aaaaaa")
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
										"border" : nexacro.BorderObject("1px solid #aaaaaa")
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
								"border" : nexacro.BorderObject("1px solid #c0c0c0")
							}
						}
					},
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #aaaaaa")
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
								"font" : nexacro.FontObject("10pt \"NanumGothic\"")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("10pt \"NanumGothic\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("10pt \"NanumGothic\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("10pt \"NanumGothic\"")
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
										"color" : nexacro.ColorObject("#101010")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#b6b6b6")
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
										"color" : nexacro.ColorObject("#101010")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#b6b6b6")
									},
									"selected" :
									{
										"font" : nexacro.FontObject("bold 8pt \"NanumGothic\""),
										"color" : nexacro.ColorObject("#ffffff")
									},
									"today" :
									{
										"color" : nexacro.ColorObject("#ff5757")
									},
									"trailingday" :
									{
										"color" : nexacro.ColorObject("#bbbbbb")
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
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_N.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #0c62fe"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_P.png\")")
							},
							"mouseover" :
							{
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
							"mouseover" :
							{
							},
							"enabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_N.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #0c62fe"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_P.png\")")
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
							"mouseover" :
							{
							},
							"enabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_N.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #0c62fe"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_P.png\")")
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
							"mouseover" :
							{
							},
							"enabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_N.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #0c62fe"),
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_P.png\")")
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
								"border" : nexacro.BorderObject("3px solid #f6f6f6")
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
								"border" : nexacro.BorderObject("3px solid #f6f6f6")
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
								"border" : nexacro.BorderObject("3px solid #f6f6f6")
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
								"border" : nexacro.BorderObject("3px solid #f6f6f6")
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
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#bcbcbc")
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
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#bcbcbc")
							}
						}
					}
				}
			},
			"listboxitem" :
			{
				"parent" :
				{
					"combolist" :
					{
						"parent" :
						{
							"Combo" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#000000")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#000000")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"focused" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									}
								}
							},
							"ComboControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#000000")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#000000")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"focused" :
									{
										"color" : nexacro.ColorObject("#ffffff")
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
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("0px 10px 5px 10px")
							},
							"mouseover" :
							{
							},
							"focused" :
							{
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#b4b4b4")
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
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("0px 10px 5px 10px")
							},
							"mouseover" :
							{
							},
							"focused" :
							{
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#b4b4b4")
							},
							"disabled_selected" :
							{
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
						"border" : nexacro.BorderObject("1px solid #aaaaaa")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #dbdbdb")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1976d2")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #1976d2")
					}
				}
			},
			"ListBoxControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #dbdbdb")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1976d2")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #1976d2")
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
								"border" : nexacro.BorderObject("1px solid #d3d3d3"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Step_N.png\")")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("2px solid #aaaaaa"),
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
								"font" : nexacro.FontObject("16pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("5px 10px 5px 10px")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#ffffff")
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
						"border" : nexacro.BorderObject("1px solid #cccccc")
					}
				}
			},
			"PopupMenuControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc")
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
							"enabled" :
							{
								"font" : nexacro.FontObject("16pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("5px 10px 5px 10px")
							},
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
							"enabled" :
							{
								"font" : nexacro.FontObject("16pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("5px 10px 5px 10px")
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
										"font" : nexacro.FontObject("14pt \"NanumGothic\""),
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
										"font" : nexacro.FontObject("14pt \"NanumGothic\""),
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
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #b5b5b5")
					}
				}
			},
			"ProgressBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #b5b5b5")
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
						"border" : nexacro.BorderObject("1px solid #69b2fd")
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
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e0e0e0")
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
						"border" : nexacro.BorderObject("1px solid #ffffff"),
						"color" : nexacro.ColorObject("#000000")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #69b2fd")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0"),
						"color" : nexacro.ColorObject("#b6b6b6")
					}
				}
			},
			"PopupDiv" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #ffffff"),
						"color" : nexacro.ColorObject("#000000")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #69b2fd")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #e0e0e0"),
						"color" : nexacro.ColorObject("#b6b6b6")
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
								"border" : nexacro.BorderObject("1px solid #aaaaaa")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e0e0e0")
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
								"font" : nexacro.FontObject("16pt \"NanumGothic\""),
								"color" : nexacro.ColorObject("#000000"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_groupboxtit.png\")"),
								"textPadding" : nexacro.PaddingObject("0px 5px 0px 15px"),
								"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999"),
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
										"border" : nexacro.BorderObject("1px solid #aaaaaa"),
										"font" : nexacro.FontObject("16pt \"NanumGothic\""),
										"color" : nexacro.ColorObject("#b5b5b5")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #e5e5e5")
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
										"border" : nexacro.BorderObject("1px solid #aaaaaa"),
										"font" : nexacro.FontObject("16pt \"NanumGothic\""),
										"color" : nexacro.ColorObject("#000000"),
										"textPadding" : nexacro.PaddingObject("0px 15px 0px 15px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #1976d2")
									},
									"pushed" :
									{
										"border" : nexacro.BorderObject("1px solid #1976d2"),
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #c0c0c0"),
										"color" : nexacro.ColorObject("#bcbcbc")
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
						"border" : nexacro.BorderObject("1px solid #aaaaaa"),
						"font" : nexacro.FontObject("16pt \"NanumGothic\""),
						"color" : nexacro.ColorObject("#000000"),
						"textPadding" : nexacro.PaddingObject("0px 6px 0px 6px")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #737373")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1976d2")
					},
					"pushed" :
					{
						"border" : nexacro.BorderObject("1px solid #0c62fe"),
						"color" : nexacro.ColorObject("#ffffff")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#939393")
					}
				}
			},
			"Grid" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none")
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
												"border" : nexacro.BorderObject("0px, 1px solid #e2e2e2, 0px, 0px"),
												"color" : nexacro.ColorObject("#090909"),
												"padding" : nexacro.PaddingObject("3px")
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
												"border" : nexacro.BorderObject("0px, 1px solid #d1c5a4, 0px, 0px"),
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
												"border" : nexacro.BorderObject("0px, 1px solid #e2e2e2, 0px, 0px"),
												"color" : nexacro.ColorObject("#000000"),
												"padding" : nexacro.PaddingObject("3px")
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
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"readonly" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
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
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"readonly" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
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
														"border" : nexacro.BorderObject("1px solid #aaaaaa"),
														"color" : nexacro.ColorObject("#000000"),
														"textPadding" : nexacro.PaddingObject("0px 6px 0px 6px")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #1976d2")
													},
													"pushed" :
													{
														"border" : nexacro.BorderObject("1px solid #0c62fe"),
														"color" : nexacro.ColorObject("#ffffff")
													},
													"selected" :
													{
														"border" : nexacro.BorderObject("1px solid #737373")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #737373")
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
														"border" : nexacro.BorderObject("1px solid #aaaaaa"),
														"color" : nexacro.ColorObject("#000000"),
														"textPadding" : nexacro.PaddingObject("0px 6px 0px 6px")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #1976d2")
													},
													"pushed" :
													{
														"border" : nexacro.BorderObject("1px solid #0c62fe"),
														"color" : nexacro.ColorObject("#ffffff")
													},
													"selected" :
													{
														"border" : nexacro.BorderObject("1px solid #737373")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #737373")
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
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #aaaaaa"),
								"color" : nexacro.ColorObject("#000000"),
								"textPadding" : nexacro.PaddingObject("0px 6px 0px 6px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #1976d2")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #0c62fe"),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #737373")
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
														"border" : nexacro.BorderObject("0px, 1px solid #e2e2e2, 0px, 0px"),
														"color" : nexacro.ColorObject("#000000"),
														"padding" : nexacro.PaddingObject("3px")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("0px, 1px solid #e2e2e2, 0px, 0px"),
														"color" : nexacro.ColorObject("#000000"),
														"padding" : nexacro.PaddingObject("3px")
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
														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
													},
													"selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
													},
													"focused" :
													{
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
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
							},
							"focused" :
							{
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
														"border" : nexacro.BorderObject("1px solid #aaaaaa"),
														"color" : nexacro.ColorObject("#000000"),
														"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
													},
													"disabled" :
													{
														"color" : nexacro.ColorObject("#bcbcbc"),
														"border" : nexacro.BorderObject("1px solid #dbdbdb")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #1565c0")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #1565c0")
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
								"border" : nexacro.BorderObject("1px solid #aaaaaa"),
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#bcbcbc"),
								"border" : nexacro.BorderObject("1px solid #dbdbdb")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #1565c0")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #1565c0")
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
														"border" : nexacro.BorderObject("1px solid #aaaaaa"),
														"color" : nexacro.ColorObject("#000000"),
														"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
													},
													"disabled" :
													{
														"color" : nexacro.ColorObject("#bcbcbc"),
														"border" : nexacro.BorderObject("1px solid #dbdbdb")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #1565c0")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #1565c0")
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
								"border" : nexacro.BorderObject("1px solid #aaaaaa"),
								"color" : nexacro.ColorObject("#000000"),
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#bcbcbc"),
								"border" : nexacro.BorderObject("1px solid #dbdbdb")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #1565c0")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #1565c0")
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
													"disabled" :
													{
														"color" : nexacro.ColorObject("#bcbcbc"),
														"border" : nexacro.BorderObject("1px solid #dbdbdb")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #1565c0")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #1565c0")
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
							"disabled" :
							{
								"color" : nexacro.ColorObject("#bcbcbc"),
								"border" : nexacro.BorderObject("1px solid #dbdbdb")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #1565c0")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #1565c0")
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
														"border" : nexacro.BorderObject("1px dotted #999999")
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
			"Plugin" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #dcdcdc")
					}
				}
			},
			"PluginControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #dcdcdc")
					}
				}
			},
			"WebBrowser" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #dcdcdc")
					}
				}
			},
			"WebBrowserControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #dcdcdc")
					}
				}
			},
			"Sketch" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #dcdcdc"),
						"font" : nexacro.FontObject("12pt \"NanumGothic\""),
						"color" : nexacro.ColorObject("#000000")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#bcbcbc")
					}
				}
			},
			"ListView" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa"),
						"color" : nexacro.ColorObject("#000000")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa"),
						"color" : nexacro.ColorObject("#000000")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aaaaaa"),
						"color" : nexacro.ColorObject("#000000")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #1565c0")
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
								"font" : nexacro.FontObject("10pt \"NanumGothic\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("10pt \"NanumGothic\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("10pt \"NanumGothic\"")
							},
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("10pt \"NanumGothic\"")
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
			"ListViewCellControl" :
			{
				"self" :
				{
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #c4c9cf")
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
										"border" : nexacro.BorderObject("1px solid #aaaaaa"),
										"color" : nexacro.ColorObject("#000000")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #737373")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #1976d2")
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
		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon.png")] = { width:14, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon_D.png")] = { width:14, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_min_N.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_min_P.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_min_O.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_min_D.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_max_N.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_max_P.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_max_O.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_max_D.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_default_N.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_default_P.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_default_O.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_default_D.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_close_N.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_close_O.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_close_D.png")] = { width:12, height:12 };
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
		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_P.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_D.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_N.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_P.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_D.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_NN.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_NS.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_DN.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_DS.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NN.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NS.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DN.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DS.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_N.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_P.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_D.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_next_P.png")] = { width:8, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_prev_P.png")] = { width:8, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinUp_N.png")] = { width:6, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinUp_D.png")] = { width:6, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinDown_D.png")] = { width:6, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinUp_P.png")] = { width:6, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinDown_N.png")] = { width:6, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinDown_P.png")] = { width:6, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_N.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_P.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_D.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_N.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_P.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_D.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_N.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_P.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_D.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_N.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_P.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_D.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_drop_P.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_drop_D.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_Step_N.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_Step_S.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_N.png")] = { width:10, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_P.png")] = { width:10, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_D.png")] = { width:10, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_N.png")] = { width:10, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_P.png")] = { width:10, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_D.png")] = { width:10, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_N.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_D.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_N.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_D.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_popmenu_check_NS.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/img_menuexpand_N.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit_D.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_N.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_P.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeCollapse.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeExpand.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeItem.png")] = { width:9, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeClose.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeOpen.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_drop_N.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_expand.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_close_P.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_next_N.png")] = { width:8, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_prev_N.png")] = { width:8, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_O.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_O.png")] = { width:4, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_menuexpand_O.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_popmenu_check_OS.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/pop_menu_icon.png")] = { width:14, height:14 };
	};
}
)();
