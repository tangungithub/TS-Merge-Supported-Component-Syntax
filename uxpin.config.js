module.exports = {
  components: {
    categories: [
      {
        name: 'Category 1',
        include: [
          'src/components/ArrowFunctionWithDefaultsAsStaticProperty/ArrowFunctionWithDefaultsAsStaticProperty.tsx',
          'src/components/ArrowFunctionWithNamedExport/ArrowFunctionWithNamedExport.tsx',
          'src/components/ArrowFunctionWithSeperateNamedExport/ArrowFunctionWithSeperateNamedExport.tsx',
          // 'src/components/WIP/ButtonMultiple/ButtonMultiple.tsx',
        ],
      },
      {
        name: "Other",
        include: [
          'src/components/ClassEnumTypes/ClassEnumTypes.tsx',
          'src/components/ClassInterfaceTypes/ClassInterfaceTypes.tsx',
          'src/components/ClassWithArrayOfUnionType/ClassWithArrayOfUnionType.tsx',
          // 'src/components/ClassWithCombinedAndImportedPropertiesType/ClassWithCombinedAndImportedPropertiesType.tsx',
          'src/components/ClassWithDateType/ClassWithDateType.tsx',
          'src/components/ClassWithExtendedInterface/ClassWithExtendedInterface.tsx',
          'src/components/ClassWithFunctionTypes/ClassWithFunctionTypes.tsx',
          'src/components/ClassWithIndexedType/ClassWithIndexedType.tsx',
          'src/components/ClassWithJSDocCommentPropDefaults/ClassWithJSDocCommentPropDefaults.tsx',
          'src/components/ClassWithKeyOfTypeOfOperatorInType/ClassWithKeyOfTypeOfOperatorInType.tsx',
          // 'src/components/ClassWithMultiLevelNameSpaceDeclaration/ClassWithNamespaceDeclaration.tsx',
          // 'src/components/ClassWithoutImportedReactComponent/ClassWithoutImportedReactComponent.tsx',
          'src/components/ClassWithPropTypesWithComments/ClassWithPropTypesWithComments.tsx',
          'src/components/ClassWithTwoDimensionalArray/ClassWithTwoDimensionalArray.tsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'TypeScript Design System'
};
