import React, { useState } from 'react';
import { FileText, Download, Search, ChevronDown, ChevronRight } from 'lucide-react';

interface File {
    name: string;
    month: string; // format: 'MM/YY'
    url: string;
}

interface Subject {
    name: string;
    midterm: File[];
    final: File[];
}

interface Term {
    name: string;
    subjects: Record<string, Subject>;
}

const fileSystem: Record<string, Term> = {
    'Term 1': {
        name: 'Term 1',
        subjects: {
            'COMM190': {
                name: 'COMM190',
                midterm: [
                    { name: '2018 Midterm Answers', month: 'Oct 2018', url: '/files/term1/COMM190/midterm/2018 Answers.pdf' },
                    { name: '2018 Midterm Questions', month: 'Oct 2018', url: '/files/term1/COMM190/midterm/2018 Questions.pdf' },
                    { name: '2020 Midterm Answers', month: 'Oct 2020', url: '/files/term1/COMM190/midterm/2020 Answers.pdf' },
                    { name: '2020 Midterm Questions', month: 'Oct 2020', url: '/files/term1/COMM190/midterm/2020 Questions.pdf' },
                    { name: '2021 Midterm Answers', month: 'Oct 2021', url: '/files/term1/COMM190/midterm/2021 Answers.pdf' },
                    { name: '2021 Midterm Questions', month: 'Oct 2021', url: '/files/term1/COMM190/midterm/2021 Questions.pdf' },
                ],
                final: [
                    { name: '2018 Final Answers', month: 'Dec 2018', url: '/files/term1/COMM190/final/2018 Answers.pdf' },
                    { name: '2018 Final Questions', month: 'Dec 2018', url: '/files/term1/COMM190/final/2018 Questions.pdf' },
                    { name: '2020 Final Answers', month: 'Dec 2020', url: '/files/term1/COMM190/final/2020 Answers.pdf' },
                    { name: '2020 Final Questions', month: 'Dec 2020', url: '/files/term1/COMM190/final/2020 Questions.pdf' },
                    { name: '2021 Final Answers', month: 'Dec 2021', url: '/files/term1/COMM190/final/2021 Answers.pdf' },
                    { name: '2021 Final Questions', month: 'Dec 2021', url: '/files/term1/COMM190/final/2021 Questions.pdf' },
                ],
            },
            'COMM204': {
                name: 'COMM204',
                midterm: [
                    { name: '2018 Midterm Answers', month: 'Oct 2018', url: '/files/term1/COMM204/midterm/2018 Answers.pdf' },
                    { name: '2020 Midterm Answers', month: 'Oct 2020', url: '/files/term1/COMM204/midterm/2020 Answers.pdf' },
                    { name: '2020 Midterm Questions', month: 'Oct 2020', url: '/files/term1/COMM204/midterm/2020 Questions.pdf' },
                    { name: '2022 Midterm Answers', month: 'Oct 2022', url: '/files/term1/COMM204/midterm/2022 Answers.pptx' },
                    { name: '2022 Midterm Questions', month: 'Oct 2022', url: '/files/term1/COMM204/midterm/2022 Questions.pptx' },
                    { name: '2023 Midterm Answers', month: 'Oct 2023', url: '/files/term1/COMM204/midterm/2023 Answers.pdf' },
                    { name: '2023 Midterm Questions', month: 'Oct 2023', url: '/files/term1/COMM204/midterm/2023 Questions.pdf' },
                ],
                final: [
                    { name: '2018 Final Answers', month: 'Dec 2018', url: '/files/term1/COMM204/final/2018 Answers.docx' },
                    { name: '2020 Final Answers', month: 'Dec 2020', url: '/files/term1/COMM204/final/2020 Answers.pdf' },
                    { name: '2020 Final Questions', month: 'Dec 2020', url: '/files/term1/COMM204/final/2020 Questions.pdf' },
                    { name: '2021 Final Answers', month: 'Dec 2021', url: '/files/term1/COMM204/final/2021 Answers.pdf' },
                    { name: '2021 Final Questions', month: 'Dec 2021', url: '/files/term1/COMM204/final/2021 Questions.pdf' },
                    { name: '2022 Final Answers', month: 'Dec 2022', url: '/files/term1/COMM204/final/2022 Answers.pptx' },
                    { name: '2022 Final Questions', month: 'Dec 2022', url: '/files/term1/COMM204/final/2022 Questions.pptx' },
                ],
            },
            'COMM205': {
                name: 'COMM205',
                midterm: [
                    { name: '2021 Midterm Answers', month: 'Oct 2021', url: '/files/term1/COMM205/midterm/2021 Answers.pdf' },
                    { name: '2021 Midterm Questions', month: 'Oct 2021', url: '/files/term1/COMM205/midterm/2021 Questions.pdf' },
                    { name: '2022 Midterm Answers', month: 'Oct 2022', url: '/files/term1/COMM205/midterm/2022 Answers.xlsx' },
                    { name: '2022 Midterm Questions', month: 'Oct 2022', url: '/files/term1/COMM205/midterm/2022 Questions.pdf' },
                    { name: '2023 Midterm Answers', month: 'Oct 2023', url: '/files/term1/COMM205/midterm/2023 Answers.pdf' },
                    { name: '2023 Midterm Questions', month: 'Oct 2023', url: '/files/term1/COMM205/midterm/2023 Questions.pdf' },
                ],
                final: [
                    { name: '2022 Final Questions', month: 'Dec 2022', url: '/files/term1/COMM205/final/2022 Questions.pdf' },
                ],
            },
            'COMM293': {
                name: 'COMM293',
                midterm: [
                    { name: '2018 Midterm Answers', month: 'Oct 2018', url: '/files/term1/COMM293/midterm/2018 Answers.pdf' },
                    { name: '2018 Midterm Questions', month: 'Oct 2018', url: '/files/term1/COMM293/midterm/2018 Questions.pdf' },
                    { name: '2020 Midterm Answers', month: 'Oct 2020', url: '/files/term1/COMM293/midterm/2020 Answers.pdf' },
                    { name: '2020 Midterm Questions', month: 'Oct 2020', url: '/files/term1/COMM293/midterm/2020 Questions.pdf' },
                    { name: '2021 Midterm Answers', month: 'Oct 2021', url: '/files/term1/COMM293/midterm/2021 Answers.docx' },
                    { name: '2021 Midterm Questions', month: 'Oct 2021', url: '/files/term1/COMM293/midterm/2021 Questions.docx' },
                    { name: '2022 Midterm Answers', month: 'Oct 2022', url: '/files/term1/COMM293/midterm/2022 Answers.pdf' },
                    { name: '2022 Midterm Questions', month: 'Oct 2022', url: '/files/term1/COMM293/midterm/2022 Questions.pptx' },
                    { name: '2023 Midterm Answers', month: 'Oct 2023', url: '/files/term1/COMM293/midterm/2023 Answers.pptx' },
                    { name: '2023 Midterm Questions', month: 'Oct 2023', url: '/files/term1/COMM293/midterm/2023 Questions.pptx' },
                ],
                final: [
                    { name: '2020 Final Answers', month: 'Dec 2020', url: '/files/term1/COMM293/final/2020 Answers.pptx' },
                    { name: '2020 Final Questions', month: 'Dec 2020', url: '/files/term1/COMM293/final/2020 Questions.pdf' },
                    { name: '2021 Final Answers', month: 'Dec 2021', url: '/files/term1/COMM293/final/2021 Answers.pdf' },
                    { name: '2021 Final Questions', month: 'Dec 2021', url: '/files/term1/COMM293/final/2021 Questions.pdf' },
                    { name: '2022 Final Answers', month: 'Dec 2022', url: '/files/term1/COMM293/final/2022 Answers.pdf' },
                    { name: '2022 Final Questions', month: 'Dec 2022', url: '/files/term1/COMM293/final/2022 Questions.pdf' },
                ],
            },
            'COMM295': {
                name: 'COMM295',
                midterm: [
                    { name: '2018 Midterm Answers', month: 'Oct 2018', url: '/files/term1/COMM295/midterm/2018 Answers.pdf' },
                    { name: '2020 Midterm Answers', month: 'Oct 2020', url: '/files/term1/COMM295/midterm/2020 Answers.pdf' },
                    { name: '2020 Midterm Questions', month: 'Oct 2020', url: '/files/term1/COMM295/midterm/2020 Questions.pdf' },
                    { name: '2022 Midterm Answers', month: 'Oct 2022', url: '/files/term1/COMM295/midterm/2022 Answers.pptx' },
                    { name: '2022 Midterm Questions', month: 'Oct 2022', url: '/files/term1/COMM295/midterm/2022 Questions.pptx' },
                ],
                final: [
                    { name: '2018 Final Answers', month: 'Dec 2018', url: '/files/term1/COMM295/final/2018 Answers.pdf' },
                    { name: '2022 Final Answers', month: 'Dec 2022', url: '/files/term1/COMM295/final/2022 Answers.pptx' },
                    { name: '2022 Final Questions', month: 'Dec 2022', url: '/files/term1/COMM295/final/2022 Questions.pptx' },
                ],
            },
            'COMM370': {
                name: 'COMM370',
                midterm: [
                    { name: '2020 Midterm Answers', month: 'Oct 2020', url: '/files/term1/COMM370/midterm/2020 Answers.pdf' },
                    { name: '2020 Midterm Questions', month: 'Oct 2020', url: '/files/term1/COMM370/midterm/2020 Questions.pdf' },
                ],
                final: [
                    { name: '2020 Final Answers', month: 'Dec 2020', url: '/files/term1/COMM370/final/2020 Answers.pdf' },
                ],
            },
            'COMM393': {
                name: 'COMM393',
                midterm: [
                    { name: '2020 Midterm Answers', month: 'Oct 2020', url: '/files/term1/COMM393/midterm/2020 Answers.pdf' },
                    { name: '2020 Midterm Questions', month: 'Oct 2020', url: '/files/term1/COMM393/midterm/2020 Questions.pdf' },
                    { name: '2022 Midterm Answers', month: 'Oct 2022', url: '/files/term1/COMM393/midterm/2022 Answers.pptx' },
                ],
                final: [
                    { name: '2020 Final Answers', month: 'Dec 2020', url: '/files/term1/COMM393/final/2020 Answers.pdf' },
                    { name: '2021 Final Answers', month: 'Dec 2021', url: '/files/term1/COMM393/final/2021 Answers.pdf' },
                ],
            },
            'ECON101': {
                name: 'ECON101',
                midterm: [
                    { name: '2020 Midterm Answers', month: 'Oct 2020', url: '/files/term1/ECON101/midterm/2020 Answers.pdf' },
                    { name: '2023 Midterm Questions', month: 'Oct 2023', url: '/files/term1/ECON101/midterm/2023 Questions.pptx' },
                ],
                final: [
                    { name: '2018 Final Answers', month: 'Dec 2018', url: '/files/term1/ECON101/final/2018 Answers.pdf' },
                    { name: '2022 Final Answers', month: 'Dec 2022', url: '/files/term1/ECON101/final/2022 Answers.pdf' },
                ],
            },
        },
    },
    'Term 2': {
        name: 'Term 2',
        subjects: {
            'COMM191': {
                name: 'COMM191',
                midterm: [
                    { name: 'ACOMM191 2023W2', month: 'Mar 2023', url: '/files/term2/COMM191/midterm/ACOMM191_2023W2.pdf' },
                    { name: 'RCOMM191 2023W2', month: 'Mar 2023', url: '/files/term2/COMM191/midterm/RCOMM191_2023W2.pdf' },
                ],
                final: [
                    { name: 'FINAL ACOMM191 2023W2', month: 'May 2023', url: '/files/term2/COMM191/final/FINAL_ACOMM191_2023W2.pdf' },
                    { name: 'FINAL RCOMM191 2023W2', month: 'May 2023', url: '/files/term2/COMM191/final/FINAL_RCOMM191_2023W2.pdf' },
                ],
            },
            'COMM204': {
                name: 'COMM204',
                midterm: [
                    { name: 'COMM 204 Midterm Review Session (Answers)', month: 'Mar 2023', url: '/files/term2/COMM204/midterm/COMM 204 Midterm Review Session (Answers).pptx.pdf' },
                    { name: 'COMM 204 Midterm Review Session', month: 'Mar 2023', url: '/files/term2/COMM204/midterm/COMM 204 Midterm Review Session.pptx.pdf' },
                ],
                final: [
                    { name: 'COMM 204 Final Review Session (Answers)', month: 'May 2023', url: '/files/term2/COMM204/final/COMM 204 Final Review Session (Answers).pptx' },
                    { name: 'COMM 204 Final Review Session', month: 'May 2023', url: '/files/term2/COMM204/final/COMM 204 Final Review Session.pptx' },
                ],
            },
            'COMM205': {
                name: 'COMM205',
                midterm: [
                    { name: 'Copy of ACOMM205 2023W2', month: 'Mar 2023', url: '/files/term2/COMM205/midterm/Copy of ACOMM205_2023W2.pdf' },
                    { name: 'Copy of RCOMM205 2023W2', month: 'Mar 2023', url: '/files/term2/COMM205/midterm/Copy of RCOMM205_2023W2.pdf' },
                ],
                final: [
                    { name: 'Copy of ACOMM205 2023W2', month: 'May 2023', url: '/files/term2/COMM205/final/Copy of ACOMM205_2023W2.pdf' },
                    { name: 'Copy of RCOMM205 2023W2', month: 'May 2023', url: '/files/term2/COMM205/final/Copy of RCOMM205_2023W2.pdf' },
                ],
            },
            'COMM294': {
                name: 'COMM294',
                midterm: [
                    { name: 'ACOMM294 2023W2', month: 'Mar 2023', url: '/files/term2/COMM294/midterm/ACOMM294_2023W2.pdf' },
                    { name: 'RCOMM294 2023W2', month: 'Mar 2023', url: '/files/term2/COMM294/midterm/RCOMM294_2023W2.pdf' },
                ],
                final: [
                    { name: 'ACOMM294 2023W2 Finals', month: 'May 2023', url: '/files/term2/COMM294/final/ACOMM294_2023W2 (Finals).pdf' },
                    { name: 'RCOMM294 2023W2 Finals', month: 'May 2023', url: '/files/term2/COMM294/final/RCOMM294_2023W2 (Finals).pdf' },
                ],
            },
            'COMM298': {
                name: 'COMM298',
                midterm: [
                    { name: 'ACOMM298 2023W2', month: 'Mar 2023', url: '/files/term2/COMM298/midterm/ACOMM298_2023W2.pdf' },
                    { name: 'RCOMM298 2023W2', month: 'Mar 2023', url: '/files/term2/COMM298/midterm/RCOMM298_2023W2.pdf' },
                ],
                final: [
                    { name: 'ACOMM298 2023W2', month: 'May 2023', url: '/files/term2/COMM298/final/ACOMM298_2023W2.pdf' },
                    { name: 'RCOMM298 2023W2', month: 'May 2023', url: '/files/term2/COMM298/final/RCOMM298_2023W2.pdf' },
                ],
            },
            'COMM393': {
                name: 'COMM393',
                midterm: [],
                final: [
                    { name: 'CheatSheet USE ONLY FOR CMP REVIEW SESSION', month: 'May 2023', url: '/files/term2/COMM393/CheatSheet USE ONLY FOR CMP REVIEW SESSION.pdf' },
                    { name: 'RCOMM-393 2024W2 With Answers', month: 'May 2024', url: '/files/term2/COMM393/RCOMM-393_2024W2 With Answers.pptx' },
                    { name: 'RCOMM-393 2024W2 Without Answers', month: 'May 2024', url: '/files/term2/COMM393/RCOMM-393_2024W2 Without Answers.pptx' },
                ],
            },
            'ECON102': {
                name: 'ECON102',
                midterm: [
                    { name: 'AECON102 2023W2', month: 'Mar 2023', url: '/files/term2/ECON102/midterm/AECON102_2023W2.pdf' },
                    { name: 'RECON102 2023W2', month: 'Mar 2023', url: '/files/term2/ECON102/midterm/RECON102_2023W2.pdf' },
                ],
                final: [
                    { name: 'AECON102 2023W2', month: 'May 2023', url: '/files/term2/ECON102/final/AECON102_2023W2.pdf' },
                    { name: 'RECON102 2023W2', month: 'May 2023', url: '/files/term2/ECON102/final/RECON102_2023W2.pdf' },
                ],
            },
        },

    },
};

export default function Files() {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedTerms, setExpandedTerms] = useState<Record<string, boolean>>({});
    const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({});

    const toggleTerm = (termName: string) => {
        setExpandedTerms(prev => ({
            ...prev,
            [termName]: !prev[termName]
        }));
    };

    const toggleSubject = (subjectPath: string) => {
        setExpandedSubjects(prev => ({
            ...prev,
            [subjectPath]: !prev[subjectPath]
        }));
    };

    const FileRow = ({ file }: { file: File }) => (
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-4">
                <FileText className="h-6 w-6 text-orange-500" />
                <div>
                    <h4 className="font-medium text-gray-800">{file.name}</h4>
                    <div className="text-sm text-gray-500">{file.month}</div>
                </div>
            </div>
            <a
                href={file.url}
                download
                className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
                <Download className="h-4 w-4" />
                <span>Download</span>
            </a>
        </div>
    );

    const filterFiles = (files: File[]) => {
        return files.filter(file =>
            file.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Study Resources</h1>

                    {/* Search Section */}
                    <div className="mb-8 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search files..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* File System */}
                    <div className="space-y-4">
                        {Object.entries(fileSystem).map(([termName, term]) => (
                            <div key={termName} className="border border-gray-200 rounded-lg overflow-hidden">
                                {/* Term Header */}
                                <button
                                    onClick={() => toggleTerm(termName)}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    <span className="font-semibold text-gray-800">{term.name}</span>
                                    {expandedTerms[termName] ? (
                                        <ChevronDown className="h-5 w-5 text-gray-500" />
                                    ) : (
                                        <ChevronRight className="h-5 w-5 text-gray-500" />
                                    )}
                                </button>

                                {/* Term Content */}
                                {expandedTerms[termName] && (
                                    <div className="p-4 space-y-4">
                                        {Object.entries(term.subjects).map(([subjectName, subject]) => (
                                            <div key={subjectName} className="border border-gray-200 rounded-lg">
                                                {/* Subject Header */}
                                                <button
                                                    onClick={() => toggleSubject(`${termName}-${subjectName}`)}
                                                    className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                                                >
                                                    <span className="font-medium text-gray-700">{subject.name}</span>
                                                    {expandedSubjects[`${termName}-${subjectName}`] ? (
                                                        <ChevronDown className="h-5 w-5 text-gray-500" />
                                                    ) : (
                                                        <ChevronRight className="h-5 w-5 text-gray-500" />
                                                    )}
                                                </button>

                                                {/* Subject Content */}
                                                {expandedSubjects[`${termName}-${subjectName}`] && (
                                                    <div className="p-3 space-y-4">
                                                        {/* Midterm Section */}
                                                        {filterFiles(subject.midterm).length > 0 && (
                                                            <div>
                                                                <h3 className="text-sm font-semibold text-gray-500 mb-2">Midterm</h3>
                                                                <div className="space-y-2">
                                                                    {filterFiles(subject.midterm).map(file => (
                                                                        <FileRow key={file.url} file={file} />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Final Section */}
                                                        {filterFiles(subject.final).length > 0 && (
                                                            <div>
                                                                <h3 className="text-sm font-semibold text-gray-500 mb-2">Final</h3>
                                                                <div className="space-y-2">
                                                                    {filterFiles(subject.final).map(file => (
                                                                        <FileRow key={file.url} file={file} />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
