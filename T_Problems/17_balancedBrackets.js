// 문자열을 입력받아 문자열 내의 모든 괄호의 짝이 맞는지 여부를 리턴해야 합니다.

// 다음 단계에 맞춰 함수를 작성해 보세요
// 괄호의 종류를 단 한가지로 한정합니다.
// 괄호의 종류를 늘려 모든 종류의 괄호에도 작동하도록 합니다.
// 괄호를 제외한 문자열이 포함된 경우에도 작동하도록 합니다.

// 인자 1 : str
// string 타입의 괄호가 포함된 문자열

// boolean 타입을 리턴해야 합니다.

// 괄호의 종류는 (, )만 고려합니다.
// 괄호는 먼저 열리고((), 열린만큼만 닫혀야()) 합니다.
// 빈 문자열을 입력받은 경우, true를 리턴해야 합니다.

/******************************************************************************/
/******************************** Reference ***********************************/
/* Bare Minimum Requirements */
const balancedBrackets = function (str) {
  const opener = '(';
  const closer = ')';
  const stack = [];
  for (let char of str) {
    if (char === opener) {
      stack.push(opener);
    } else if (char === closer) {
      const recent = stack.pop();
      if (recent !== opener) return false;
    }
  }
  return stack.length === 0;
};

////////////////////////////////////////////////////////////////////////////////
/* Advanced */
// 모든 종류의 괄호((, ), {, }, [, ])가 포함된 문자열을 입력빋아 모든 괄호의 짝이 맞는지 여부를 리턴해 보세요.
const balancedBrackets = function (str) {
  const openers = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const closers = ')}]';
  const stack = [];
  for (let char of str) {
    if (char in openers) {
      stack.push(char);
    } else if (closers.indexOf(char) !== -1) {
      const recent = stack.pop();
      if (char !== openers[recent]) return false;
    }
  }
  return stack.length === 0;
};

// Another Reference
const balancedBrackets = function (str) {
  const openers = '({[';
  const closers = ')}]';
  const stack = [];
  for (let char of str) {
    if (openers.indexOf(char) !== -1) {
      stack.push(char);
    } else if (closers.indexOf(char) !== -1) {
      const recent = stack.pop();
      if (!recent || (recent === '(' && char !== ')') || (recent === '{' && char !== '}') || (recent === '[' && char !== ']')) return false;
    }
  }
  return stack.length === 0;
};


/******************************************************************************/
/******************************* My Solution **********************************/
/* Bare Minimum Requirements */
// const balancedBrackets = function (str) {
//   if (str.length === 0) return true;
//   let rBracket = 0;
//   for (let char of str) {
//     if (rBracket === 0 && char === ')') {
//       return false;
//     } else if (char === '(') {
//       rBracket ++;
//     } else if (char === ')') {
//       rBracket --;
//     }
//   }
//   return rBracket === 0;
// };

////////////////////////////////////////////////////////////////////////////////
/* Advanced */
// 모든 종류의 괄호((, ), {, }, [, ])가 포함된 문자열을 입력빋아 모든 괄호의 짝이 맞는지 여부를 리턴해 보세요.
// const balancedBrackets = function (str) {
//   if (str.length === 0) return true;
//   let temp = [];
//   let rBracket = 0;
//   let sBracket = 0;
//   let cBracket = 0;
//   for (let char of str) {
//     if ((rBracket === 0 && char === ')') || (sBracket === 0 && char === ']') || (cBracket === 0 && char === '}')) {
//       return false;
//     } else if ((temp[temp.length-1] === '(' && (char === ']' || char === '}')) || (temp[temp.length-1] === '{' && (char === ')' || char === ']')) || (temp[temp.length-1] === '[' && (char === ')' || char === '}'))) {
//       return false;
//     } else if (char === '(') {
//       temp.push('(');
//       rBracket ++;
//     } else if (temp[temp.length-1] === '(' && char === ')') {
//       temp.pop();
//       rBracket --;
//     } else if (char === '[') {
//       temp.push('[');
//       sBracket ++;
//     } else if (temp[temp.length-1] === '[' && char === ']') {
//       temp.pop();
//       sBracket --;
//     } else if (char === '{') {
//       temp.push('{');
//       cBracket ++;
//     } else if (temp[temp.length-1] === '{' && char === '}') {
//       temp.pop();
//       cBracket --;
//     }
//   }
//   if (temp.length === 0 && rBracket === 0 && sBracket === 0 && cBracket === 0) return true;
//   return false;
// };
