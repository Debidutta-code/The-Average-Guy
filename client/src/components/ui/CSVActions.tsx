import React from 'react';
import api from '../../lib/api';
import { Button } from './Button';
import { Download, Upload, ShieldCheck } from 'lucide-react';
import { useQueryClient } from '@tanstack/react-query';

const CSVActions: React.FC = () => {
    const queryClient = useQueryClient();
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleBackup = async () => {
        try {
            const response = await api.get('/csv/backup', { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `backup-${new Date().toISOString().split('T')[0]}.json`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Backup failed', error);
            alert('Failed to download backup');
        }
    };

    const handleExport = async () => {
        try {
            const response = await api.get('/csv/export', { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'leads.csv');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Export failed', error);
            alert('Failed to export leads');
        }
    };

    const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (e) => {
            const csvData = e.target?.result;
            try {
                await api.post('/csv/import', { csvData });
                queryClient.invalidateQueries({ queryKey: ['leads'] });
                alert('Leads imported successfully');
            } catch (error) {
                console.error('Import failed', error);
                alert('Failed to import leads');
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="flex gap-2 flex-wrap">
            <Button variant="outline" size="sm" onClick={handleExport} className="gap-2">
                <Download className="h-4 w-4" /> Export
            </Button>
            <input
                type="file"
                accept=".csv"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImport}
            />
            <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} className="gap-2">
                <Upload className="h-4 w-4" /> Import
            </Button>
            <Button variant="outline" size="sm" onClick={handleBackup} className="gap-2 text-emerald-600 border-emerald-200">
                <ShieldCheck className="h-4 w-4" /> Backup
            </Button>
        </div>
    );
};

export default CSVActions;
