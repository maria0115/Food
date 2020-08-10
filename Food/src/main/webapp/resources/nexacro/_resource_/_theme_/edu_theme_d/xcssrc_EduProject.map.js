(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"cell" :
			{
				"class" :
				[
					{
						"cell_style1" :
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
															"color" : nexacro.ColorObject("#3da2df"),
															"font" : nexacro.FontObject("bold italic 12pt/normal \"Arial\"")
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
				]
			}
		},
		{
			"includeStatusMap" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		
	};
}
)();
