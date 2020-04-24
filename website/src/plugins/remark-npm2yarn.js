/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const npmToYarn = require('npm-to-yarn');

// E.g. global install: 'npm i' -> 'yarn'
const convertNpmToYarn = npmCode => npmToYarn(npmCode, 'yarn');

const transformNode = node => {
  const npmCode = node.value;
  const yarnCode = convertNpmToYarn(node.value);
  return [
    {
      type: 'jsx',
      value:
        `<Tabs groupId="npmClient" defaultValue="npm" ` +
        `values={[
    { label: 'npm', value: 'npm', },
    { label: 'Yarn', value: 'yarn', },
  ]}
>
<TabItem value="npm">`
    },
    {
      type: node.type,
      lang: node.lang,
      value: npmCode
    },
    {
      type: 'jsx',
      value: '</TabItem>\n<TabItem value="yarn">'
    },
    {
      type: node.type,
      lang: node.lang,
      value: yarnCode
    },
    {
      type: 'jsx',
      value: '</TabItem>\n</Tabs>'
    }
  ];
};

const matchNode = node => node.type === 'code' && node.meta === 'npm2yarn';
const nodeForImport = {
  type: 'import',
  value:
    "import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';"
};

module.exports = () => {
  let transformed = false;
  const transformer = node => {
    if (matchNode(node)) {
      transformed = true;
      return transformNode(node);
    }
    if (Array.isArray(node.children)) {
      let index = 0;
      while (index < node.children.length) {
        const result = transformer(node.children[index]);
        if (result) {
          node.children.splice(index, 1, ...result);
          index += result.length;
        } else {
          index += 1;
        }
      }
    }
    if (node.type === 'root' && transformed) {
      node.children.unshift(nodeForImport);
    }
    return null;
  };
  return transformer;
};
