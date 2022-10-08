import { Utility } from '@css-panda/core'
import { TokenMap } from '@css-panda/tokens'
import { semanticTokens, tokens, utilities } from '@css-panda/fixture'
import { describe, expect, test } from 'vitest'
import { generatePropTypes } from '../src/generators/prop-types'

describe('generate property types', () => {
  test('should ', () => {
    expect(
      generatePropTypes(
        new Utility({
          tokens: new TokenMap({ tokens, semanticTokens }),
          config: utilities,
        }),
      ),
    ).toMatchInlineSnapshot(`
      "import { Properties as CSSProperties } from \\"./csstype\\"

      type BasePropTypes  = {
      	divideX: string;
      	divideY: string;
      	divideColor: \\"current\\" | \\"gray.50\\" | \\"gray.100\\" | \\"gray.200\\" | \\"gray.300\\" | \\"gray.400\\" | \\"gray.500\\" | \\"gray.600\\" | \\"gray.700\\" | \\"gray.800\\" | \\"gray.900\\" | \\"green.50\\" | \\"green.100\\" | \\"green.200\\" | \\"green.300\\" | \\"green.400\\" | \\"green.500\\" | \\"green.600\\" | \\"green.700\\" | \\"green.800\\" | \\"green.900\\" | \\"red.50\\" | \\"red.100\\" | \\"red.200\\" | \\"red.300\\" | \\"red.400\\" | \\"red.500\\" | \\"red.600\\" | \\"red.700\\" | \\"red.800\\" | \\"red.900\\" | \\"primary\\" | \\"secondary\\";
      	divideStyle: CSSProperties[\\"borderStyle\\"];
      	top: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	left: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	start: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	right: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	end: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	bottom: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	insetX: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	insetY: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	float: \\"left\\" | \\"right\\" | \\"start\\" | \\"end\\";
      	color: \\"current\\" | \\"gray.50\\" | \\"gray.100\\" | \\"gray.200\\" | \\"gray.300\\" | \\"gray.400\\" | \\"gray.500\\" | \\"gray.600\\" | \\"gray.700\\" | \\"gray.800\\" | \\"gray.900\\" | \\"green.50\\" | \\"green.100\\" | \\"green.200\\" | \\"green.300\\" | \\"green.400\\" | \\"green.500\\" | \\"green.600\\" | \\"green.700\\" | \\"green.800\\" | \\"green.900\\" | \\"red.50\\" | \\"red.100\\" | \\"red.200\\" | \\"red.300\\" | \\"red.400\\" | \\"red.500\\" | \\"red.600\\" | \\"red.700\\" | \\"red.800\\" | \\"red.900\\" | \\"primary\\" | \\"secondary\\";
      	fill: \\"current\\" | \\"gray.50\\" | \\"gray.100\\" | \\"gray.200\\" | \\"gray.300\\" | \\"gray.400\\" | \\"gray.500\\" | \\"gray.600\\" | \\"gray.700\\" | \\"gray.800\\" | \\"gray.900\\" | \\"green.50\\" | \\"green.100\\" | \\"green.200\\" | \\"green.300\\" | \\"green.400\\" | \\"green.500\\" | \\"green.600\\" | \\"green.700\\" | \\"green.800\\" | \\"green.900\\" | \\"red.50\\" | \\"red.100\\" | \\"red.200\\" | \\"red.300\\" | \\"red.400\\" | \\"red.500\\" | \\"red.600\\" | \\"red.700\\" | \\"red.800\\" | \\"red.900\\" | \\"primary\\" | \\"secondary\\";
      	stroke: \\"current\\" | \\"gray.50\\" | \\"gray.100\\" | \\"gray.200\\" | \\"gray.300\\" | \\"gray.400\\" | \\"gray.500\\" | \\"gray.600\\" | \\"gray.700\\" | \\"gray.800\\" | \\"gray.900\\" | \\"green.50\\" | \\"green.100\\" | \\"green.200\\" | \\"green.300\\" | \\"green.400\\" | \\"green.500\\" | \\"green.600\\" | \\"green.700\\" | \\"green.800\\" | \\"green.900\\" | \\"red.50\\" | \\"red.100\\" | \\"red.200\\" | \\"red.300\\" | \\"red.400\\" | \\"red.500\\" | \\"red.600\\" | \\"red.700\\" | \\"red.800\\" | \\"red.900\\" | \\"primary\\" | \\"secondary\\";
      	accentColor: \\"current\\" | \\"gray.50\\" | \\"gray.100\\" | \\"gray.200\\" | \\"gray.300\\" | \\"gray.400\\" | \\"gray.500\\" | \\"gray.600\\" | \\"gray.700\\" | \\"gray.800\\" | \\"gray.900\\" | \\"green.50\\" | \\"green.100\\" | \\"green.200\\" | \\"green.300\\" | \\"green.400\\" | \\"green.500\\" | \\"green.600\\" | \\"green.700\\" | \\"green.800\\" | \\"green.900\\" | \\"red.50\\" | \\"red.100\\" | \\"red.200\\" | \\"red.300\\" | \\"red.400\\" | \\"red.500\\" | \\"red.600\\" | \\"red.700\\" | \\"red.800\\" | \\"red.900\\" | \\"primary\\" | \\"secondary\\";
      	outlineColor: \\"current\\" | \\"gray.50\\" | \\"gray.100\\" | \\"gray.200\\" | \\"gray.300\\" | \\"gray.400\\" | \\"gray.500\\" | \\"gray.600\\" | \\"gray.700\\" | \\"gray.800\\" | \\"gray.900\\" | \\"green.50\\" | \\"green.100\\" | \\"green.200\\" | \\"green.300\\" | \\"green.400\\" | \\"green.500\\" | \\"green.600\\" | \\"green.700\\" | \\"green.800\\" | \\"green.900\\" | \\"red.50\\" | \\"red.100\\" | \\"red.200\\" | \\"red.300\\" | \\"red.400\\" | \\"red.500\\" | \\"red.600\\" | \\"red.700\\" | \\"red.800\\" | \\"red.900\\" | \\"primary\\" | \\"secondary\\";
      	aspectRatio: \\"auto\\" | \\"square\\" | \\"video\\";
      	gap: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	rowGap: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	columnGap: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	flexBasis: \\"0\\" | \\"1/2\\" | \\"1/3\\" | \\"2/3\\" | \\"1/4\\";
      	flex: \\"1\\" | \\"auto\\" | \\"initial\\" | \\"none\\";
      	padding: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	paddingLeft: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	paddingRight: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	paddingTop: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	paddingBottom: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	paddingX: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	paddingY: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	fontSize: \\"sm\\" | \\"xs\\" | \\"md\\" | \\"lg\\" | \\"xl\\";
      	fontFamily: \\"heading\\" | \\"body\\" | \\"mono\\";
      	fontWeight: \\"normal\\" | \\"medium\\" | \\"semibold\\" | \\"bold\\";
      	fontSmoothing: \\"antialiased\\" | \\"subpixel-antialiased\\";
      	letterSpacing: \\"tighter\\" | \\"tight\\" | \\"normal\\" | \\"wide\\" | \\"wider\\" | \\"widest\\";
      	lineHeight: \\"normal\\" | \\"none\\" | \\"shorter\\" | \\"short\\" | \\"base\\" | \\"tall\\" | \\"taller\\";
      	textIndent: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	width: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"0.5\\" | \\"1.5\\" | \\"2.5\\" | \\"3.5\\" | \\"1/2\\" | \\"1/3\\" | \\"2/3\\" | \\"1/4\\" | \\"2/4\\";
      	height: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"0.5\\" | \\"1.5\\" | \\"2.5\\" | \\"3.5\\";
      	minHeight: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"0.5\\" | \\"1.5\\" | \\"2.5\\" | \\"3.5\\";
      	maxHeight: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"0.5\\" | \\"1.5\\" | \\"2.5\\" | \\"3.5\\";
      	minWidth: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"0.5\\" | \\"1.5\\" | \\"2.5\\" | \\"3.5\\";
      	maxWidth: \\"xs\\" | \\"sm\\" | \\"md\\" | \\"lg\\" | \\"xl\\";
      	marginLeft: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	marginRight: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	marginTop: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	marginBottom: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	margin: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	marginX: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	marginY: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	background: \\"current\\" | \\"gray.50\\" | \\"gray.100\\" | \\"gray.200\\" | \\"gray.300\\" | \\"gray.400\\" | \\"gray.500\\" | \\"gray.600\\" | \\"gray.700\\" | \\"gray.800\\" | \\"gray.900\\" | \\"green.50\\" | \\"green.100\\" | \\"green.200\\" | \\"green.300\\" | \\"green.400\\" | \\"green.500\\" | \\"green.600\\" | \\"green.700\\" | \\"green.800\\" | \\"green.900\\" | \\"red.50\\" | \\"red.100\\" | \\"red.200\\" | \\"red.300\\" | \\"red.400\\" | \\"red.500\\" | \\"red.600\\" | \\"red.700\\" | \\"red.800\\" | \\"red.900\\" | \\"primary\\" | \\"secondary\\";
      	backgroundColor: \\"current\\" | \\"gray.50\\" | \\"gray.100\\" | \\"gray.200\\" | \\"gray.300\\" | \\"gray.400\\" | \\"gray.500\\" | \\"gray.600\\" | \\"gray.700\\" | \\"gray.800\\" | \\"gray.900\\" | \\"green.50\\" | \\"green.100\\" | \\"green.200\\" | \\"green.300\\" | \\"green.400\\" | \\"green.500\\" | \\"green.600\\" | \\"green.700\\" | \\"green.800\\" | \\"green.900\\" | \\"red.50\\" | \\"red.100\\" | \\"red.200\\" | \\"red.300\\" | \\"red.400\\" | \\"red.500\\" | \\"red.600\\" | \\"red.700\\" | \\"red.800\\" | \\"red.900\\" | \\"primary\\" | \\"secondary\\";
      	backgroundGradient: \\"none\\" | \\"to-t\\" | \\"to-tr\\" | \\"to-r\\" | \\"to-br\\" | \\"to-b\\" | \\"to-bl\\" | \\"to-l\\" | \\"to-tl\\";
      	gradientFrom: \\"current\\" | \\"gray.50\\" | \\"gray.100\\" | \\"gray.200\\" | \\"gray.300\\" | \\"gray.400\\" | \\"gray.500\\" | \\"gray.600\\" | \\"gray.700\\" | \\"gray.800\\" | \\"gray.900\\" | \\"green.50\\" | \\"green.100\\" | \\"green.200\\" | \\"green.300\\" | \\"green.400\\" | \\"green.500\\" | \\"green.600\\" | \\"green.700\\" | \\"green.800\\" | \\"green.900\\" | \\"red.50\\" | \\"red.100\\" | \\"red.200\\" | \\"red.300\\" | \\"red.400\\" | \\"red.500\\" | \\"red.600\\" | \\"red.700\\" | \\"red.800\\" | \\"red.900\\" | \\"primary\\" | \\"secondary\\";
      	gradientTo: \\"current\\" | \\"gray.50\\" | \\"gray.100\\" | \\"gray.200\\" | \\"gray.300\\" | \\"gray.400\\" | \\"gray.500\\" | \\"gray.600\\" | \\"gray.700\\" | \\"gray.800\\" | \\"gray.900\\" | \\"green.50\\" | \\"green.100\\" | \\"green.200\\" | \\"green.300\\" | \\"green.400\\" | \\"green.500\\" | \\"green.600\\" | \\"green.700\\" | \\"green.800\\" | \\"green.900\\" | \\"red.50\\" | \\"red.100\\" | \\"red.200\\" | \\"red.300\\" | \\"red.400\\" | \\"red.500\\" | \\"red.600\\" | \\"red.700\\" | \\"red.800\\" | \\"red.900\\" | \\"primary\\" | \\"secondary\\";
      	transitionTimingFunction: \\"ease-in\\" | \\"ease-out\\" | \\"ease-in-out\\";
      	transitionProperty: \\"all\\" | \\"none\\" | \\"opacity\\" | \\"shadow\\" | \\"transform\\" | \\"base\\" | \\"background\\" | \\"colors\\";
      	animation: \\"none\\" | \\"spin\\" | \\"ping\\" | \\"pulse\\" | \\"bounce\\";
      	borderRadius: \\"none\\" | \\"sm\\" | \\"base\\" | \\"md\\" | \\"lg\\" | \\"xl\\" | \\"2xl\\" | \\"3xl\\" | \\"full\\";
      	boxShadow: \\"xs\\" | \\"sm\\" | \\"base\\" | \\"md\\";
      	filter: \\"auto\\";
      	blur: string | number;
      	scrollMargin: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollMarginX: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollMarginY: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollMarginLeft: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollMarginRight: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollMarginTop: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollMarginBottom: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollPadding: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollPaddingX: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollPaddingY: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollPaddingLeft: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollPaddingRight: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollPaddingTop: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollPaddingBottom: \\"1\\" | \\"2\\" | \\"3\\" | \\"4\\" | \\"5\\" | \\"6\\" | \\"-1\\" | \\"-2\\" | \\"-3\\" | \\"-4\\" | \\"-5\\" | \\"-6\\" | \\"0.5\\" | \\"-0.5\\" | \\"1.5\\" | \\"-1.5\\" | \\"2.5\\" | \\"-2.5\\" | \\"3.5\\" | \\"-3.5\\" | \\"gutter\\" | \\"-gutter\\";
      	scrollSnapType: \\"none\\" | \\"x\\" | \\"y\\" | \\"both\\";
      	scrollSnapStrictness: \\"mandatory\\" | \\"proximity\\";
      	srOnly: \\"true\\" | \\"false\\";
      }



         type Get<T> = T extends keyof BasePropTypes ? BasePropTypes[T] : T extends keyof CSSProperties ? CSSProperties[T] : string
         
         export type PropTypes = BasePropTypes & {
        
      	z: Get<\\"zIndex\\">;
      	objectPos: Get<\\"objectPosition\\">;
      	overscroll: Get<\\"overscrollBehavior\\">;
      	overscrollX: Get<\\"overscrollBehaviorX\\">;
      	overscrollY: Get<\\"overscrollBehaviorY\\">;
      	pos: Get<\\"position\\">;
      	flexDir: Get<\\"flexDirection\\">;
      	p: Get<\\"padding\\">;
      	pl: Get<\\"paddingLeft\\">;
      	pr: Get<\\"paddingRight\\">;
      	pt: Get<\\"paddingTop\\">;
      	pb: Get<\\"paddingBottom\\">;
      	px: Get<\\"paddingX\\">;
      	py: Get<\\"paddingY\\">;
      	w: Get<\\"width\\">;
      	h: Get<\\"height\\">;
      	minH: Get<\\"minHeight\\">;
      	maxH: Get<\\"maxHeight\\">;
      	minW: Get<\\"minWidth\\">;
      	maxW: Get<\\"maxWidth\\">;
      	ml: Get<\\"marginLeft\\">;
      	mr: Get<\\"marginRight\\">;
      	mt: Get<\\"marginTop\\">;
      	mb: Get<\\"marginBottom\\">;
      	m: Get<\\"margin\\">;
      	mx: Get<\\"marginX\\">;
      	my: Get<\\"marginY\\">;
      	bgAttachment: Get<\\"backgroundAttachment\\">;
      	bgClip: Get<\\"backgroundClip\\">;
      	bg: Get<\\"background\\">;
      	bgColor: Get<\\"backgroundColor\\">;
      	bgOrigin: Get<\\"backgroundOrigin\\">;
      	bgRepeat: Get<\\"backgroundRepeat\\">;
      	bgBlend: Get<\\"backgroundBlendMode\\">;
      	bgGradient: Get<\\"backgroundGradient\\">;
      	shadow: Get<\\"boxShadow\\">;
      }"
    `)
  })
})