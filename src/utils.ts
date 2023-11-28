export const countChar = (text: string): number   => {
    if (text.length > 0) {
        const count = text.replace(/\s/g, "");
        return count.length;
    }

    else{
        const count=0
        return count
    }
};

export const countWord = (text: string): number   => {
    if (text.length > 0) {
        const count = text.split(/\s+/);
        return count.length - 1;
    }

    else{
        const count=0
        return count
    }
};

export const countPro = (text: string): number   => {
    const pronouns: string[] = ['i', 'we', 'you', 'he', 'she', 'it', 'they', 'me', 'us', 'her', 'him', 'them', 'mine', 'ours', 'yours', 'hers', 'his', 'theirs', 'myself', 'yourself', 'herself', 'himself', 'itself', 'ourselves', 'yourselves', 'themselves'];
    const split = text.split(/\s+/);
    return split.map((item) => item.toLowerCase()).filter((item) => pronouns.includes(item)).length;
};

export const countRead = (text: string): number   => {
    if (text.length > 0) {
        const length = text.length;
        let counter = 0;
        for (let i = 0; i <= length; i++) {
            if (i % 800 === 0) {
                counter++;
            }
        }
        return counter;
    }

    else{
        const num = 0;
        return num;
    }
};

export const longWord = (text: string): string  => {
    if (text.length > 0) {
        const replace1 = text.replace(/\./g, " ");
        const replace2 = replace1.replace(/\?/g, " ");
        const replace3 = replace2.replace(/:/g, " ");
        const replace4 = replace3.replace(/;/g, " ");
        const replace5 = replace4.replace(/,/g, " ");
        const replace6 = replace5.replace(/!/g, " ");
        const split = replace6.split(/\s+/).sort((a, b) => b.length - a.length);
        return split[0];
    }

    else{
            const str="-"
            return str
    }
};

export const countPara = (text: string): number => {
    const count = text.replace(/\n$/gm, '').split(/\n/).length;
    return count;
};

export const countSent=(text: string): number =>{
    const result=text.split(/[.]/gi);
    const count=result.filter((item)=>item!=="");
    return count.length
}

